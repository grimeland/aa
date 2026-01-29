import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { getTiltakBySlug, getAndreTiltak, getStatusIcon, getKompleksitetDots, getTidsperspektivTekst } from '@/sanity/lib/fetch'
import TiltakDetailClient from './TiltakDetailClient'

export const revalidate = 60

interface PageProps {
  params: {
    pakke: string
    tiltak: string
  }
}

export default async function TiltakDetailPage({ params }: PageProps) {
  const tiltak = await getTiltakBySlug(params.tiltak)
  
  if (!tiltak) {
    notFound()
  }

  const andreTiltak = await getAndreTiltak(tiltak.tiltakspakke, tiltak.slug)

  const pakkeNavn: Record<string, string> = {
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
            {/* Tilbake-knapp */}
            <div className="mb-8 text-sm max-w-7xl mx-auto">
              <a
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
                <span>Tilbake til tiltakspakke</span>
              </a>
            </div>

            {/* Two-column layout */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left column - Bilder */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                    <span style={{ color: '#B8A88A' }}>Hovedbilde / visualisering</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#F0EEE5' }}>
                        <span style={{ color: '#B8A88A' }} className="text-xs">{n}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - Innhold */}
              <div>
                {/* Tiltak badge */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-block bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Tiltak
                  </span>
                  <span className="text-gray-500 text-sm">
                    {pakkeNavn[tiltak.tiltakspakke]}
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

                {/* Interactive buttons */}
                <TiltakDetailClient tiltakSlug={tiltak.slug} tiltakTitle={tiltak.title} />

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
                  {tiltak.hvorfor && (
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {tiltak.hvorfor}
                    </p>
                  )}
                </div>

                {/* Utfordringer */}
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
                          <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-medium ${
                            steg.ferdig 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {steg.ferdig ? '✓' : index + 1}
                          </div>
                          <div className="pt-1">
                            <p className={`${steg.ferdig ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                              {steg.tekst}
                            </p>
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
                  {andreTiltak.map((annetTiltak) => (
                    <a
                      key={annetTiltak.slug}
                      href={`/tiltak/${annetTiltak.tiltakspakke}/${annetTiltak.slug}`}
                      className="bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                        <div 
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: '#F0EEE5' }}
                        >
                          <span style={{ color: '#B8A88A' }}>Bilde</span>
                        </div>
                      </div>
                      
                      <div className="px-1 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{annetTiltak.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-4">
                          {annetTiltak.beskrivelse}
                        </p>
                        
                        <span className="block text-center border border-gray-300 text-gray-700 py-2.5 px-4 rounded-full text-sm mt-6">
                          Se tiltak
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <BottomSection />
      </main>
      <Footer />
    </>
  )
}
