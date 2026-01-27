'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold transition-colors ${
          isScrolled ? 'text-primary-dark' : 'text-white'
        }`}>
          Folk, fuggel og fesk
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/tjenester" className={`transition-colors ${
            isScrolled ? 'text-gray-700 hover:text-primary-dark' : 'text-white hover:text-white/80'
          }`}>
            Tjenester
          </Link>
          <Link href="/tiltak" className={`transition-colors ${
            isScrolled ? 'text-gray-700 hover:text-primary-dark' : 'text-white hover:text-white/80'
          }`}>
            Tiltak
          </Link>
          <Link href="/bakgrunn" className={`transition-colors ${
            isScrolled ? 'text-gray-700 hover:text-primary-dark' : 'text-white hover:text-white/80'
          }`}>
            Prosjekt
          </Link>
          <Link href="/kontakt" className={isScrolled ? 'btn-primary' : 'btn-outline'}>
            Kontakt oss
          </Link>
        </div>
      </nav>
    </header>
  )
}
