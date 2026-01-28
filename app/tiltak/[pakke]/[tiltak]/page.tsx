'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { getTiltakById, getTiltakByPakke, getStatusIcon, getKompleksitetDots, getTidsperspektivTekst, type Tiltakspakke } from '@/lib/tiltak'

interface PageProps {
  params: {
    pakke: string
    tiltak: string
  }
}

export default function TiltakDetailPage({ params }: PageProps) {
  const tiltak = getTiltakById(params.tiltak)
  
  const [supportCount, setSupportCount] = useState(0)
  const [hasSupported, setHasSupported] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, setShowMessage] = useState<string | null>(null)
  
  useEffect(() => {
    if (tiltak) {
      fetch(`/api/tiltak/${tiltak.id}/support`)
        .then(res => res.json())
        .then(data => {
          setSupportCount(data.count)
          setHasSupported(data.hasSupported)
        })
        .catch(console.error)
    }
  }, [tiltak])

  const handleSupport = async () => {
    if (!tiltak || isLoading) return
    
    setIsLoading(true)
    try {
      const res = await fetch(`/api/tiltak/${tiltak.id}/support`, {
        method: 'POST',
      })
      const data = await res.json()
      setSupportCount(data.count)
      setHasSupported(data.hasSupported)
      setShowMessage(data.hasSupported ? 'Takk for din støtte!' : 'Du har fjernet din støtte')
      setTimeout(() => setShowMessage(null), 3000)
    } catch (error) {
      console.error('Failed to support:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  if (!tiltak) {
    return null
  }

  // Get other tiltak in the same package (excluding current)
  const andreTiltak = getTiltakByPakke(tiltak.tiltakspakke).filter(t => t.id !== tiltak.id)

  const pakkeNavn: Record<Tiltakspakke, string> = {
    'fysisk-infrastruktur': 'Fysisk infrastruktur og besøksflyt',
    'vertskap-formidling': 'Vertskap og formidling',
    'organisering-kompetanse': 'Organisering og kompetanse',
  }

  const statusTekst: Record<string, string> = {
    'pågår': 'Pågår',
    'planlagt': 'Planlagt',
    'ferdig': 'Ferdig',
  }

  const kompleksitetTekst: Record<string, string> = {
    'lav': 'Lav',
    'middels': 'Middels',
    'høy': 'Høy',
  }

  const handleShare = async () => {
    try {
      const shareData = {
        title: tiltak.title,
        text: `Se tiltaket "${tiltak.title}"`,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      }

      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard && shareData.url) {
        await navigator.clipboard.writeText(shareData.url)
      }
    } catch (err) {
      console.error('Kunne ikke dele tiltaket', err)
    }
  }

  return (
    <>
      <Header darkMode />
      <main>
        <section className="bg-neutral-light pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Tilbake-knapp */}
            <div className="mb-8 text-sm max-w-7xl mx-auto">
              <Link
                href={`/tiltak/${params.pakke}`}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </span>
                <span>Tilbake</span>
              </Link>
            </div>

            {/* Two-column layout - Product style */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left column - Bilder */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                {/* Hovedbilde */}
                <div className="rounded-2xl overflow-hidden mb-4">
                  <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                    <span style={{ color: '#B8A88A' }}>Hovedbilde / visualisering</span>
                  </div>
                </div>
                
                {/* Thumbnail gallery */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                      <span style={{ color: '#B8A88A' }} className="text-xs">1</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                      <span style={{ color: '#B8A88A' }} className="text-xs">2</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                      <span style={{ color: '#B8A88A' }} className="text-xs">3</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                      <span style={{ color: '#B8A88A' }} className="text-xs">4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Innhold */}
              <div>
                {/* Status badge */}
                <div className="mb-4">
                  <span className="inline-block bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {getStatusIcon(tiltak.status)} {statusTekst[tiltak.status]}
                  </span>
                </div>

                {/* Tittel */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {tiltak.title}
                </h1>

                {/* Metadata grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-5">
                    <p className="text-sm text-gray-500 mb-1">Tidsperspektiv</p>
                    <p className="text-gray-900 font-semibold text-lg">{getTidsperspektivTekst(tiltak.tidsperspektiv)}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5">
                    <p className="text-sm text-gray-500 mb-1">Kompleksitet</p>
                    <p className="text-gray-900 font-semibold text-lg">{getKompleksitetDots(tiltak.kompleksitet)} {kompleksitetTekst[tiltak.kompleksitet]}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5">
                    <p className="text-sm text-gray-500 mb-1">Sesong</p>
                    <p className="text-gray-900 font-semibold text-lg">{tiltak.sesong || 'Hele året'}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5">
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <p className="text-gray-900 font-semibold text-lg">
                      {getStatusIcon(tiltak.status)} {statusTekst[tiltak.status]}
                    </p>
                  </div>
                </div>

                {/* Støtt / del / kontakt */}
                <div className="mb-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      {/* Like / støtte */}
                      <button
                        onClick={handleSupport}
                        disabled={isLoading}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border ${
                          hasSupported
                            ? 'border-transparent text-[#D56554]'
                            : 'border-gray-300 text-gray-800 bg-white'
                        }`}
                        style={
                          hasSupported
                            ? { backgroundColor: '#F9EAEA' }
                            : undefined
                        }
                      >
                        <span
                          className={`flex items-center transition-all duration-150 ${
                            hasSupported
                              ? 'text-[#D56554]'
                              : 'text-[#B8A88A]'
                          }`}
                        >
                          <svg
                            className="h-4 w-4 transform transition-transform duration-150 active:scale-125"
                            viewBox="0 0 32 32"
                            fill={hasSupported ? 'currentColor' : 'none'}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.66699 12.6664C2.66702 11.1827 3.11712 9.73384 3.95784 8.51128C4.79856 7.28872 5.99035 6.34994 7.3758 5.81893C8.76126 5.28792 10.2752 5.18965 11.7177 5.53712C13.1601 5.88459 14.4633 6.66143 15.455 7.76506C15.5248 7.83975 15.6093 7.89929 15.7031 7.93999C15.7969 7.9807 15.8981 8.00171 16.0003 8.00171C16.1026 8.00171 16.2038 7.9807 16.2976 7.93999C16.3914 7.89929 16.4758 7.83975 16.5457 7.76506C17.5342 6.65426 18.8377 5.87088 20.2825 5.5192C21.7273 5.16751 23.245 5.26419 24.6335 5.79637C26.022 6.32856 27.2155 7.271 28.0551 8.49826C28.8948 9.72553 29.3407 11.1794 29.3337 12.6664C29.3337 15.7197 27.3337 17.9997 25.3337 19.9997L18.011 27.0837C17.7625 27.3691 17.4562 27.5983 17.1124 27.7561C16.7685 27.914 16.395 27.9969 16.0167 27.9993C15.6384 28.0017 15.2639 27.9235 14.918 27.77C14.5722 27.6165 14.263 27.3912 14.011 27.1091L6.66699 19.9997C4.66699 17.9997 2.66699 15.7331 2.66699 12.6664Z"
                              stroke="currentColor"
                              strokeWidth="2.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className={`transition-colors duration-150 ${
                            hasSupported ? 'text-[#D56554]' : 'text-gray-800'
                          }`}
                        >
                          {supportCount}
                        </span>
                      </button>

                      {/* Del tiltak */}
                      <button
                        type="button"
                        onClick={handleShare}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                      >
                        <span>↗</span>
                        <span>Del tiltak</span>
                      </button>
                    </div>

                    {/* Ta kontakt */}
                    <a
                      href={`mailto:erlend@travers.as?subject=Innspill til ${tiltak.title}`}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 md:ml-auto"
                    >
                      <span>
                        {/* chat bubble icon */}
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 0 1 12 20.5a8.38 8.38 0 0 1-5.4-1.9L3 21l1.4-3.6A8.38 8.38 0 0 1 2.5 12 8.5 8.5 0 0 1 7.1 4.4 8.38 8.38 0 0 1 12 2.5h.5A8.48 8.48 0 0 1 21 11v.5z" />
                        </svg>
                      </span>
                      <span>Ta kontakt</span>
                    </a>
                  </div>
                </div>

                {/* Beskrivelse */}
                <div className="mb-8">
                  {tiltak.undertittel && (
                    <p className="text-gray-900 font-semibold text-lg mb-3">
                      {tiltak.undertittel}
                    </p>
                  )}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {tiltak.beskrivelse}
                  </p>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {tiltak.hvorfor}
                  </p>
                </div>

                {/* Utfordringer - Expandable style */}
                {tiltak.utfordringer && tiltak.utfordringer.length > 0 && (
                  <div className="border-t border-gray-200 py-6">
                    <p className="text-gray-900 font-medium mb-4">Utfordringer</p>
                    <ul className="space-y-2">
                      {tiltak.utfordringer.map((utfordring, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-gray-400">•</span>
                          {utfordring}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Fremdrift */}
                {tiltak.fremdriftSteg && tiltak.fremdriftSteg.length > 0 && (
                  <div className="border-t border-gray-200 py-6">
                    <p className="text-gray-900 font-medium mb-4">Fremdrift</p>
                    <div className="space-y-3">
                      {tiltak.fremdriftSteg.map((steg, index) => (
                        <div key={index} className="bg-white rounded-2xl p-4 flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-600 font-medium">
                            {index + 1}
                          </div>
                          <div className="pt-1">
                            <p className="text-gray-800">{steg.tekst}</p>
                            {steg.blokkerer && (
                              <p className="text-gray-400 text-sm mt-1">→ {steg.blokkerer}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Andre tiltak i pakken */}
            {andreTiltak.length > 0 && (
              <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">Andre tiltak i {pakkeNavn[tiltak.tiltakspakke]}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {andreTiltak.slice(0, 3).map((annetTiltak) => (
                    <Link
                      key={annetTiltak.id}
                      href={`/tiltak/${annetTiltak.tiltakspakke}/${annetTiltak.id}`}
                      className="bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
                    >
                      {/* Image */}
                      <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                        <div 
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: '#F0EEE5' }}
                        >
                          <span style={{ color: '#B8A88A' }}>Bilde</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-1 flex flex-col flex-grow">
                        <p className="text-gray-500 text-sm mb-1">{getTidsperspektivTekst(annetTiltak.tidsperspektiv)}</p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{annetTiltak.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-4">
                          {annetTiltak.beskrivelse}
                        </p>
                        
                        {/* Button */}
                        <span className="block text-center border border-gray-300 text-gray-700 py-2.5 px-4 rounded-full text-sm mt-6">
                          Se tiltak
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Section */}
        <BottomSection />
      </main>
      <Footer />
    </>
  )
}
