import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { images } from '@/lib/images'
import { getTiltakspakkeBySlug, getTiltakByPakke, getTidsperspektivTekst } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

interface PageProps {
  params: {
    pakke: string
  }
}

export default async function TiltakspakkePage({ params }: PageProps) {
  const pakke = await getTiltakspakkeBySlug(params.pakke)
  
  if (!pakke) {
    notFound()
  }

  const tiltak = await getTiltakByPakke(params.pakke)

  // Fallback image if no hovedbilde
  const heroImage = pakke.hovedbilde 
    ? urlFor(pakke.hovedbilde).width(1920).url() 
    : images.hero

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col text-white">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${heroImage}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
            <span className="bg-neutral-light text-gray-800 px-3 py-1 text-sm font-medium rounded inline-block mx-auto mb-6">
              Tiltakspakke
            </span>
            <h1 className="text-4xl md:text-6xl font-normal mb-6">
              {pakke.title}
            </h1>
            {pakke.heroTekst && (
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                {pakke.heroTekst}
              </p>
            )}
          </div>
          <div className="relative z-20 pb-12 text-center">
            <a href="#tiltak" className="text-white/90 hover:text-white transition-colors flex flex-col items-center gap-2">
              <span className="text-lg">Utforsk tiltakene</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Om tiltaket Section */}
        {pakke.omTiltaket && pakke.omTiltaket.length > 0 && (
          <section className="py-20 bg-neutral-light">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Om tiltakspakken</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 text-gray-700 leading-relaxed prose">
                    <PortableText value={pakke.omTiltaket} />
                  </div>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${heroImage}')`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Forutsetninger Section */}
        {(pakke.aktorer?.length || pakke.finansiering?.length || pakke.lovverk?.length) && (
          <section className="py-20 bg-neutral-light">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Forutsetninger</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Aktører Card */}
                  {pakke.aktorer && pakke.aktorer.length > 0 && (
                    <div className="bg-white rounded-2xl p-6">
                      <p className="text-sm text-gray-500 mb-2">Nødvendige aktører</p>
                      <h3 className="text-xl font-normal text-gray-800 mb-6">Hvem må involveres?</h3>
                      <div className="flex flex-wrap gap-2">
                        {pakke.aktorer.map((aktor, i) => (
                          <span key={i} className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">
                            {aktor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Finansiering Card */}
                  {pakke.finansiering && pakke.finansiering.length > 0 && (
                    <div className="bg-white rounded-2xl p-6">
                      <p className="text-sm text-gray-500 mb-2">Finansiering</p>
                      <h3 className="text-xl font-normal text-gray-800 mb-6">Hvordan kan tiltakene finansieres?</h3>
                      <div className="flex flex-wrap gap-2">
                        {pakke.finansiering.map((fin, i) => (
                          <span key={i} className="bg-green-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">
                            {fin}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Lovverk Card */}
                  {pakke.lovverk && pakke.lovverk.length > 0 && (
                    <div className="bg-white rounded-2xl p-6">
                      <p className="text-sm text-gray-500 mb-2">Relevante lovverk</p>
                      <h3 className="text-xl font-normal text-gray-800 mb-6">Hva er det juridiske handlingsrommet?</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pakke.lovverk.map((lov, i) => (
                          <span key={i} className="bg-blue-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">
                            {lov}
                          </span>
                        ))}
                      </div>
                      {pakke.lovverkBeskrivelse && (
                        <p className="text-sm text-gray-600">
                          {pakke.lovverkBeskrivelse}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Utforsk tiltakene Section */}
        <section id="tiltak" className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Utforsk tiltakene</h2>
              {tiltak.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {tiltak.map((item) => (
                    <Link 
                      key={item.slug} 
                      href={`/tiltak/${item.tiltakspakke}/${item.slug}`}
                      className="bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
                    >
                      {/* Image */}
                      <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: item.hovedbilde 
                              ? `url('${urlFor(item.hovedbilde).width(400).url()}')`
                              : `url('${heroImage}')`
                          }}
                        ></div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-1 flex flex-col flex-grow">
                        <p className="text-gray-500 text-sm mb-1">{getTidsperspektivTekst(item.tidsperspektiv)}</p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-4">
                          {item.beskrivelse}
                        </p>
                        
                        {/* Button */}
                        <span className="block text-center border border-gray-300 text-gray-700 py-2.5 px-4 rounded-full text-sm mt-6">
                          Se tiltak
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">Ingen tiltak lagt til ennå.</p>
              )}
            </div>
          </div>
        </section>

        {/* Hvordan pakken svarer til prinsippene Section */}
        {(pakke.prinsippLokalsamfunn || pakke.prinsippNatur || pakke.prinsippTurister) && (
          <section className="py-20 bg-neutral-light">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Hvordan pakken svarer til prinsippene</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {pakke.prinsippLokalsamfunn && (
                    <div className="bg-white rounded-2xl p-8">
                      <div className="mb-6 h-24">
                        <Image 
                          src={images.lokalsamfunn} 
                          alt="Lokalsamfunn" 
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Sikre lokalsamfunnets interesser</p>
                      <p className="text-gray-900 text-lg leading-relaxed">
                        {pakke.prinsippLokalsamfunn}
                      </p>
                    </div>
                  )}
                  {pakke.prinsippNatur && (
                    <div className="bg-white rounded-2xl p-8">
                      <div className="mb-6 h-24">
                        <Image 
                          src={images.natur} 
                          alt="Natur" 
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Beskytte naturen</p>
                      <p className="text-gray-900 text-lg leading-relaxed">
                        {pakke.prinsippNatur}
                      </p>
                    </div>
                  )}
                  {pakke.prinsippTurister && (
                    <div className="bg-white rounded-2xl p-8">
                      <div className="mb-6 h-24">
                        <Image 
                          src={images.turister} 
                          alt="Turister" 
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Bevisstgjøre turister</p>
                      <p className="text-gray-900 text-lg leading-relaxed">
                        {pakke.prinsippTurister}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hva sier folk? Section */}
        {pakke.sitater && pakke.sitater.length > 0 && (
          <section className="pt-20 pb-48 bg-neutral-light">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800 text-center">Hva sier folk?</h2>
                <div className={`grid gap-0 ${pakke.sitater.length >= 3 ? 'md:grid-cols-3' : pakke.sitater.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                  {pakke.sitater.map((sitat, i) => (
                    <div 
                      key={i} 
                      className={`px-8 ${i < pakke.sitater!.length - 1 ? 'md:border-r border-gray-300' : ''} ${i > 0 ? 'mt-8 md:mt-0' : ''}`}
                    >
                      <p className="text-gray-800 text-lg italic text-center leading-relaxed">
                        "{sitat.tekst}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom Section */}
        <BottomSection />
      </main>
      <Footer />
    </>
  )
}
