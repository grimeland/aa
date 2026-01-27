import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { getTiltakById, getStatusIcon, getKompleksitetDots, type Tiltakspakke } from '@/lib/tiltak'
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

  const tidsperspektivTekst: Record<string, string> = {
    'kort': 'Kort sikt',
    'mellomlang': 'Mellomlang sikt',
    'lang': 'Lang sikt',
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-neutral-light py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm">
                <ol className="flex items-center gap-2 text-gray-600">
                  <li><Link href="/tiltak" className="hover:text-primary-dark">Tiltak</Link></li>
                  <li>/</li>
                  <li><Link href={`/tiltak/${params.pakke}`} className="hover:text-primary-dark">{pakkeNavn[tiltak.tiltakspakke]}</Link></li>
                  <li>/</li>
                  <li className="text-gray-800 font-medium">{tiltak.title}</li>
                </ol>
              </nav>

              {/* Header */}
              <div className="mb-8">
                <Link 
                  href={`/tiltak/${params.pakke}`}
                  className="inline-flex items-center gap-2 text-primary-dark hover:text-primary-dark/80 mb-6 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Tilbake til {pakkeNavn[tiltak.tiltakspakke]}
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{tiltak.title}</h1>
              </div>

              {/* Metadata Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div className="text-xl font-semibold text-gray-800">
                    {getStatusIcon(tiltak.status)} {tiltak.status.charAt(0).toUpperCase() + tiltak.status.slice(1)}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Tidsperspektiv</div>
                  <div className="text-xl font-semibold text-gray-800">
                    {tidsperspektivTekst[tiltak.tidsperspektiv]}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Kompleksitet</div>
                  <div className="text-xl font-semibold text-gray-800">
                    {getKompleksitetDots(tiltak.kompleksitet)} {tiltak.kompleksitet.charAt(0).toUpperCase() + tiltak.kompleksitet.slice(1)}
                  </div>
                </div>
                {tiltak.sesong && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Sesong</div>
                    <div className="text-xl font-semibold text-gray-800">{tiltak.sesong}</div>
                  </div>
                )}
              </div>

              {/* Hovedinnhold */}
              <div className="bg-white rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Hva er dette tiltaket?</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{tiltak.beskrivelse}</p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Hvorfor er dette et tiltak?</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{tiltak.hvorfor}</p>

                {tiltak.fremdrift && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Mulig fremdrift</h2>
                    <p className="text-gray-700 leading-relaxed">{tiltak.fremdrift}</p>
                  </>
                )}
              </div>

              {/* Visualiseringer */}
              {tiltak.visualiseringer && tiltak.visualiseringer.length > 0 && (
                <div className="bg-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Visualiseringer</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tiltak.visualiseringer.map((img, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-400">Visualisering {index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
