import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'support.json')

interface SupportData {
  [tiltakId: string]: {
    count: number
    ips: string[]
  }
}

async function readSupportData(): Promise<SupportData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

async function writeSupportData(data: SupportData): Promise<void> {
  const dir = path.dirname(DATA_FILE)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}

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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const tiltakId = params.id
  const ip = getClientIP(request)
  const data = await readSupportData()
  
  const tiltakData = data[tiltakId] || { count: 0, ips: [] }
  const hasSupported = tiltakData.ips.includes(ip)
  
  return NextResponse.json({
    count: tiltakData.count,
    hasSupported
  })
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const tiltakId = params.id
  const ip = getClientIP(request)
  const data = await readSupportData()
  
  if (!data[tiltakId]) {
    data[tiltakId] = { count: 0, ips: [] }
  }
  
  // Check if IP already supported - if so, remove support (toggle)
  if (data[tiltakId].ips.includes(ip)) {
    data[tiltakId].count = Math.max(0, data[tiltakId].count - 1)
    data[tiltakId].ips = data[tiltakId].ips.filter((i: string) => i !== ip)
    
    await writeSupportData(data)
    
    return NextResponse.json({
      count: data[tiltakId].count,
      hasSupported: false,
      message: 'Du har fjernet din støtte'
    })
  }
  
  // Add support
  data[tiltakId].count += 1
  data[tiltakId].ips.push(ip)
  
  await writeSupportData(data)
  
  return NextResponse.json({
    count: data[tiltakId].count,
    hasSupported: true,
    message: 'Takk for din støtte!'
  })
}
