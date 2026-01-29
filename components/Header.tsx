'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface HeaderProps {
  darkMode?: boolean
  transparent?: boolean
}

export default function Header({ darkMode = false, transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if we've scrolled past the threshold
      setIsScrolled(currentScrollY > 100)
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < 100) {
        // Always show at top of page
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current + 10) {
        // Scrolling down (with small threshold to prevent jitter)
        setIsVisible(false)
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Use dark text if darkMode is true OR if scrolled
  const useDarkText = darkMode || isScrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode
        ? isScrolled 
          ? 'backdrop-blur-md' 
          : ''
        : isScrolled 
          ? 'bg-white/70 backdrop-blur-md' 
          : 'bg-transparent'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}
    style={darkMode ? { backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.85)' : (transparent ? 'transparent' : '#FDFBF7') } : undefined}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`flex items-center gap-2 text-base font-normal transition-colors duration-300 ${
          useDarkText ? 'text-gray-900' : 'text-white'
        }`}>
          <Image 
            src="/icons/logo_aa.svg" 
            alt="Å logo" 
            width={28} 
            height={28}
            className={`transition-all duration-300 ${useDarkText ? '' : 'brightness-0 invert'}`}
          />
          Folk, fuggel og fesk
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/tiltak" className={`text-base font-normal transition-colors duration-300 ${
            useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
          }`}>
            Tiltak
          </Link>
          <Link href="/om-prosjekt" className={`text-base font-normal transition-colors duration-300 ${
            useDarkText ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'
          }`}>
            Om prosjekt
          </Link>
          <Link href="/kontakt" className={`text-base font-normal px-5 py-2 rounded-full transition-colors duration-300 ${
            useDarkText 
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
