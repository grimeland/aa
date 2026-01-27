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
      isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`text-base font-normal transition-colors duration-300 ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>
          Folk, fuggel og fesk
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/tiltak" className={`text-base font-normal transition-colors duration-300 ${
            isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
          }`}>
            Tiltak
          </Link>
          <Link href="/bakgrunn" className={`text-base font-normal transition-colors duration-300 ${
            isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
          }`}>
            Bakgrunn
          </Link>
          <Link href="/om-prosjekt" className={`text-base font-normal transition-colors duration-300 ${
            isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
          }`}>
            Om prosjekt
          </Link>
          <Link href="/kontakt" className={`text-base font-normal px-5 py-2 rounded-full transition-colors duration-300 ${
            isScrolled 
              ? 'bg-gray-900 text-white hover:bg-gray-800' 
              : 'bg-white text-gray-900 hover:bg-white/90'
          }`}>
            Kontakt oss
          </Link>
        </div>
      </nav>
    </header>
  )
}
