import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { getTiltakById, getStatusIcon, getKompleksitetDots, getTidsperspektivTekst, type Tiltakspakke } from '@/lib/tiltak'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    pakke: string
    tiltak: string
  }
}

export default function TiltakDetailPage({ params }: PageProps) {
  const tiltak = getTiltakById(params.tiltak)
  
  if (!tiltak) {
    notFound()
  }

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
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm">
                <ol className="flex items-center gap-2 text-gray-500">
                  <li><Link href="/tiltak" className="hover:text-gray-800">Tiltak</Link></li>
                  <li>/</li>
                  <li><Link href={`/tiltak/${params.pakke}`} className="hover:text-gray-800">{pakkeNavn[tiltak.tiltakspakke]}</Link></li>
                </ol>
              </nav>

              {/* Header med tittel */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {getStatusIcon(tiltak.status)} {tiltak.title}
              </h1>

              {/* Metadata som pills */}
              <div className="flex flex-wrap gap-3 mb-12">
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200">
                  <span className="text-gray-500">Status:</span> {statusTekst[tiltak.status]}
                </span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200">
                  <span className="text-gray-500">Tidsperspektiv:</span> {getTidsperspektivTekst(tiltak.tidsperspektiv)}
                </span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200">
                  <span className="text-gray-500">Kompleksitet:</span> {getKompleksitetDots(tiltak.kompleksitet)} {kompleksitetTekst[tiltak.kompleksitet]}
                </span>
                {tiltak.sesong && (
                  <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200">
                    <span className="text-gray-500">Sesong:</span> {tiltak.sesong}
                  </span>
                )}
              </div>

              {/* Hva & Hvorfor */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Hva</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{tiltak.beskrivelse}</p>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Hvorfor</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{tiltak.hvorfor}</p>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 mb-12" />

              {/* Visualisering */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <span>🗺️</span> Visualisering
                </h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-4">
                    <span className="text-gray-400">Kart / illustrasjon kommer</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    <strong>Hva visualiseringen viser:</strong> Oversikt over plassering og tiltak
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 mb-12" />

              {/* Utfordringer */}
              {tiltak.utfordringer && tiltak.utfordringer.length > 0 && (
                <>
                  <div className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <span>⚠️</span> Utfordringer
                    </h2>
                    <div className="space-y-3">
                      {tiltak.utfordringer.map((utfordring, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-gray-400">→</span>
                          <p className="text-gray-700">{utfordring}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="border-gray-300 mb-12" />
                </>
              )}

              {/* Fremdrift */}
              {tiltak.fremdriftSteg && tiltak.fremdriftSteg.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <span>📅</span> Fremdrift
                  </h2>
                  <div className="space-y-4">
                    {tiltak.fremdriftSteg.map((steg, index) => (
                      <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                        <div className="flex items-start gap-3">
                          <span className="text-gray-300 text-xl">⬜</span>
                          <div>
                            <p className="text-gray-900 font-medium">{steg.tekst}</p>
                            {steg.blokkerer && (
                              <p className="text-gray-500 text-sm mt-1">
                                → {steg.blokkerer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tilbake-lenke */}
              <div className="mt-16">
                <Link 
                  href={`/tiltak/${params.pakke}`}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Tilbake til {pakkeNavn[tiltak.tiltakspakke]}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <BottomSection />
      </main>
      <Footer />
    </>
  )
}
