'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { getTiltakById, getTiltakByPakke, getStatusIcon, getKompleksitetDots, getTidsperspektivTekst, type Tiltakspakke } from '@/lib/tiltak'
import { images } from '@/lib/images'

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

  return (
    <>
      <Header darkMode />
      <main>
        <section className="bg-neutral-light pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm max-w-7xl mx-auto">
              <ol className="flex items-center gap-2 text-gray-500">
                <li><Link href="/tiltak" className="hover:text-gray-800">Tiltak</Link></li>
                <li>/</li>
                <li><Link href={`/tiltak/${params.pakke}`} className="hover:text-gray-800">{pakkeNavn[tiltak.tiltakspakke]}</Link></li>
              </ol>
            </nav>

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
                    <p className="text-sm text-gray-500 mb-1">Støtter</p>
                    <p className="text-gray-900 font-semibold text-lg">{supportCount} {supportCount === 1 ? 'person' : 'personer'}</p>
                  </div>
                </div>

                {/* Støtt tiltak - knapp */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <button
                    onClick={handleSupport}
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl text-base font-medium transition-all"
                    style={{
                      backgroundColor: hasSupported ? '#E7E0D8' : '#5C4A3A',
                      color: hasSupported ? '#6B5B4F' : '#FFFFFF',
                    }}
                  >
                    {isLoading ? (
                      'Laster...'
                    ) : hasSupported ? (
                      '🤝 Du støtter tiltak'
                    ) : (
                      '🤝 Støtt tiltak'
                    )}
                  </button>
                  
                  {/* Bekreftelsesmelding */}
                  {showMessage && (
                    <div className={`mt-3 text-center text-sm animate-pulse ${
                      hasSupported ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {showMessage}
                    </div>
                  )}

                  {/* Ta kontakt - knapp */}
                  <a 
                    href={`mailto:erlend@travers.as?subject=Innspill til ${tiltak.title}`}
                    className="mt-3 w-full py-3 rounded-xl text-sm font-medium transition-all inline-flex items-center justify-center gap-2 text-gray-700 hover:opacity-90"
                    style={{
                      backgroundColor: '#E7E0D8',
                    }}
                  >
                    Ta kontakt
                  </a>
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
