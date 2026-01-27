import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { images } from '@/lib/images'

export default function TiltakPage() {
  const tiltak = [
    {
      slug: 'fysisk-infrastruktur',
      title: 'Fysisk infrastruktur og besøksflyt',
      description: 'Konkrete tiltak for å forbedre fysisk infrastruktur og styre besøksflyten på Å.',
      image: images.fysiskInfrastruktur
    },
    {
      slug: 'vertskap-formidling',
      title: 'Vertskap og formidling',
      description: 'Tiltak for å styrke vertskapet og formidle informasjon til besøkende på en god måte.',
      image: images.vertskapFormidling
    },
    {
      slug: 'organisering-kompetanse',
      title: 'Organisering og kompetanse',
      description: 'Tiltak for å styrke organisering og bygge kompetanse innen besøksforvaltning.',
      image: images.organiseringKompetanse
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-neutral-light py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tiltak for besøksforvaltning
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl">
              Tre tiltakspakker med konkrete løsninger for å balansere turisme, natur og lokalsamfunn på Å.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {tiltak.map((item) => (
                <Link key={item.slug} href={`/tiltak/${item.slug}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-64 bg-cover bg-center" style={{
                      backgroundImage: `url('${item.image}')`
                    }}></div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h2>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center gap-2 text-primary-dark group-hover:translate-x-1 transition-transform">
                        <span>Les mer</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
