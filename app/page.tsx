import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import Carousel from '@/components/Carousel'
import { images, getImage } from '@/lib/images'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${images.hero}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center pt-20 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Å briste eller bære?
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-white/95">
              Å nærmer seg bristepunktet der økt turisttrykk skaper kaos, konflikter og belastning av naturen. 
              Nå skal vi finne løsninger sammen.
            </p>
          </div>
          <div className="relative z-20 pb-12">
            <a href="#tiltak" className="text-white/90 hover:text-white transition-colors flex flex-col items-center gap-2">
              <span className="text-lg">Les mer</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-neutral-light py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-4">Visjonen</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Å skal bli et sted som fungerer godt for folk, fuggel og fesk – hele året.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                Gjennom et omfattende arbeid har vi identifisert tre hovedområder som er kritiske for å skape en bærekraftig besøksforvaltning på Å.
              </p>
            </div>
            
            {/* Principles Section - Illustration Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6 flex items-center justify-center h-32">
                  <Image 
                    src={images.lokalsamfunn} 
                    alt="Lokalsamfunn" 
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Sikre lokalsamfunnets interesser</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vi sikrer at lokalsamfunnet får en god hverdag og at lokal identitet og kultur bevares for fremtiden.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6 flex items-center justify-center h-32">
                  <Image 
                    src={images.natur} 
                    alt="Natur" 
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Beskytte naturen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vi beskytter det unike naturmiljøet og sikrer at flora og fauna kan trives også med økt besøk.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6 flex items-center justify-center h-32">
                  <Image 
                    src={images.turister} 
                    alt="Turister" 
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Bevisstgjøre turister</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vi gjør turister bevisste på kultur og natur, slik at de kan oppleve Å på en respektfull måte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Packages Section */}
        <section id="tiltak" className="bg-neutral-light py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Tre tiltakspakker for besøksforvaltning på Å
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fra analyse til handling. Konkrete løsninger for å balansere turisme, natur og lokalsamfunn.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link href="/tiltak/fysisk-infrastruktur" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative h-64 bg-cover bg-center">
                    <div className="absolute top-4 left-4">
                      <span className="bg-neutral-light text-gray-800 px-3 py-1 text-sm font-medium rounded">Tiltakspakke</span>
                    </div>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${images.fysiskInfrastruktur}')`
                      }}
                    ></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Fysisk infrastruktur og besøksflyt</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      Konkrete tiltak for å forbedre infrastrukturen og styre besøksflyten på en bærekraftig måte.
                    </p>
                    <div className="flex items-center gap-2 text-primary-dark group-hover:translate-x-1 transition-transform font-medium">
                      <span>Utforsk tiltak</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/tiltak/vertskap-formidling" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative h-64 bg-cover bg-center">
                    <div className="absolute top-4 left-4">
                      <span className="bg-neutral-light text-gray-800 px-3 py-1 text-sm font-medium rounded">Tiltakspakke</span>
                    </div>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${images.vertskapFormidling}')`
                      }}
                    ></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Vertskap og formidling</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      Tiltak for å styrke vertskapet og formidle informasjon på en effektiv og engasjerende måte.
                    </p>
                    <div className="flex items-center gap-2 text-primary-dark group-hover:translate-x-1 transition-transform font-medium">
                      <span>Utforsk tiltak</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/tiltak/organisering-kompetanse" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative h-64 bg-cover bg-center">
                    <div className="absolute top-4 left-4">
                      <span className="bg-neutral-light text-gray-800 px-3 py-1 text-sm font-medium rounded">Tiltakspakke</span>
                    </div>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${images.organiseringKompetanse}')`
                      }}
                    ></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Organisering og kompetanse</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      Tiltak for å styrke organiseringen og bygge kompetanse innen besøksforvaltning.
                    </p>
                    <div className="flex items-center gap-2 text-primary-dark group-hover:translate-x-1 transition-transform font-medium">
                      <span>Utforsk tiltak</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Explore Initiatives Section */}
        <section className="bg-neutral-light pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
              Utforsk tiltakene
            </h2>
          </div>
          <Carousel 
            items={[
              {
                tag: "Fysisk infrastruktur",
                title: "Toaletter og hygiene",
                image: images.toaletterHygiene,
                href: "/tiltak/fysisk-infrastruktur/toaletter-hygiene"
              },
              {
                tag: "Fysisk infrastruktur",
                title: "Parkering og flyt",
                image: images.parkeringTrafikk,
                href: "/tiltak/fysisk-infrastruktur/parkering-flyt"
              },
              {
                tag: "Fysisk infrastruktur",
                title: "Søppelhåndtering",
                image: images.soppelhandtering,
                href: "/tiltak/fysisk-infrastruktur/soppelhandtering"
              },
              {
                tag: "Fysisk infrastruktur",
                title: "Bilfri sone i sentrum",
                image: images.bilfriSone,
                href: "/tiltak/fysisk-infrastruktur/bilfri-sone"
              },
              {
                tag: "Fysisk infrastruktur",
                title: "Grønn mobilitet",
                image: images.gronnMobilitet,
                href: "/tiltak/fysisk-infrastruktur/gronn-mobilitet"
              },
              {
                tag: "Fysisk infrastruktur",
                title: "Naturrestaurering",
                image: images.naturrestaurering,
                href: "/tiltak/fysisk-infrastruktur/naturrestaurering"
              }
            ]}
          />
        </section>

        {/* Bottom Section */}
        <BottomSection />
      </main>
      <Footer />
    </>
  )
}
