import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import Carousel from '@/components/Carousel'
import { images } from '@/lib/images'
import { getAllTiltakspakker, getAllTiltak } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/client'

export const revalidate = 60

export default async function TiltakPage() {
  const tiltakspakker = await getAllTiltakspakker()
  const alleTiltak = await getAllTiltak()

  // Build carousel items from actual tiltak
  const carouselItems = alleTiltak.slice(0, 8).map((tiltak) => ({
    tag: tiltak.tiltakspakkeTitle || 'Tiltak',
    title: tiltak.title,
    image: tiltak.hovedbilde 
      ? urlFor(tiltak.hovedbilde).width(400).url() 
      : images.placeholder,
    href: `/tiltak/${tiltak.tiltakspakke}/${tiltak.slug}`,
  }))

  return (
    <>
      <Header darkMode transparent />
      <main className="pt-20" style={{ backgroundColor: '#F8F4ED' }}>
        <section className="py-40">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tiltak for besøksforvaltning
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl">
              {tiltakspakker.length} tiltakspakker med konkrete løsninger for å balansere turisme, natur og lokalsamfunn på Å.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {tiltakspakker.map((pakke) => (
                <Link key={pakke.slug} href={`/tiltak/${pakke.slug}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div 
                      className="h-64 bg-cover bg-center" 
                      style={{
                        backgroundImage: pakke.hovedbilde 
                          ? `url('${urlFor(pakke.hovedbilde).width(600).url()}')`
                          : `url('${images.placeholder}')`
                      }}
                    ></div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-gray-800">{pakke.title}</h2>
                      <p className="text-gray-600 mb-4">{pakke.kortBeskrivelse}</p>
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

        {/* Explore Initiatives Section */}
        {carouselItems.length > 0 && (
          <section className="pt-20 pb-48 overflow-hidden">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
                Utforsk tiltakene
              </h2>
            </div>
            <Carousel 
              bgColor="#F8F4ED"
              items={carouselItems}
            />
          </section>
        )}

        {/* Bottom Section */}
        <BottomSection bgColor="#F8F4ED" />
      </main>
      <Footer />
    </>
  )
}
