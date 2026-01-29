import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  return 'unknown'
}

// Simple hash function to create a unique identifier from IP
function hashIP(ip: string): string {
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const tiltakSlug = params.id
  const ip = getClientIP(request)
  const ipHash = hashIP(ip)
  
  try {
    // Fetch tiltak by slug
    const tiltak = await client.fetch(
      `*[_type == "tiltak" && slug.current == $slug][0] { 
        _id, 
        supportCount,
        "supporters": coalesce(supporters, [])
      }`,
      { slug: tiltakSlug }
    )
    
    if (!tiltak) {
      return NextResponse.json({ count: 0, hasSupported: false })
    }
    
    const hasSupported = (tiltak.supporters || []).includes(ipHash)
    
    return NextResponse.json({
      count: tiltak.supportCount || 0,
      hasSupported
    })
  } catch (error) {
    console.error('Error fetching support data:', error)
    return NextResponse.json({ count: 0, hasSupported: false })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const tiltakSlug = params.id
  const ip = getClientIP(request)
  const ipHash = hashIP(ip)
  
  try {
    // Fetch tiltak by slug
    const tiltak = await client.fetch(
      `*[_type == "tiltak" && slug.current == $slug][0] { 
        _id, 
        supportCount,
        "supporters": coalesce(supporters, [])
      }`,
      { slug: tiltakSlug }
    )
    
    if (!tiltak) {
      return NextResponse.json({ error: 'Tiltak not found' }, { status: 404 })
    }
    
    const supporters = tiltak.supporters || []
    const hasSupported = supporters.includes(ipHash)
    let newCount = tiltak.supportCount || 0
    let newSupporters = [...supporters]
    
    if (hasSupported) {
      // Remove support (toggle off)
      newCount = Math.max(0, newCount - 1)
      newSupporters = newSupporters.filter((s: string) => s !== ipHash)
    } else {
      // Add support
      newCount += 1
      newSupporters.push(ipHash)
    }
    
    // Update in Sanity
    await client
      .patch(tiltak._id)
      .set({ 
        supportCount: newCount,
        supporters: newSupporters
      })
      .commit()
    
    return NextResponse.json({
      count: newCount,
      hasSupported: !hasSupported
    })
  } catch (error) {
    console.error('Error updating support:', error)
    return NextResponse.json({ error: 'Failed to update support' }, { status: 500 })
  }
}
