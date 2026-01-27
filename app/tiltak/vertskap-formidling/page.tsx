import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomSection from '@/components/BottomSection'
import { images } from '@/lib/images'
import { getTiltakByPakke, getTidsperspektivTekst } from '@/lib/tiltak'

export default function VertskapFormidlingPage() {
  const tiltak = getTiltakByPakke('vertskap-formidling')

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
              backgroundImage: `url('${images.vertskapFormidling}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
            <span className="bg-neutral-light text-gray-800 px-3 py-1 text-sm font-medium rounded inline-block mx-auto mb-6">
              Tiltakspakke
            </span>
            <h1 className="text-4xl md:text-6xl font-normal mb-6">
              Vertskap og formidling
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Tiltak for å styrke vertskapet og formidle informasjon om kultur, natur og lokale regler på en effektiv måte.
            </p>
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
        <section className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Om tiltaket</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Vertskap og formidling handler om å være gode verter for besøkende og formidle 
                    informasjon på en måte som gjør dem bevisste på Ås unike kultur og natur.
                  </p>
                  <p>
                    Gjennom tydelig kommunikasjon og engasjerende formidling kan vi hjelpe besøkende 
                    å oppleve Å på en respektfull måte som bevarer verdiene for fremtiden.
                  </p>
                  <p>
                    Dette inkluderer alt fra informasjonsskilt og digitale løsninger til opplæring 
                    av lokale verter og guider.
                  </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${images.vertskapFormidling}')`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forutsetninger Section */}
        <section className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <span className="inline-block bg-gray-900 text-white px-4 py-1.5 text-sm rounded-full mb-8">
                Forutsetninger
              </span>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Aktører Card */}
                <div className="bg-white rounded-2xl p-6">
                  <p className="text-sm text-gray-500 mb-2">Nødvendige aktører</p>
                  <h3 className="text-xl font-normal text-gray-800 mb-6">Hvem må involveres?</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">Lokale bedrifter</span>
                    <span className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">Museum Nord</span>
                    <span className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">Moskenes kommune</span>
                    <span className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">Lokale guider</span>
                    <span className="bg-neutral-light text-gray-700 px-3 py-1.5 text-sm rounded-full">Besøksnæringen</span>
                  </div>
                </div>

                {/* Finansiering Card */}
                <div className="bg-white rounded-2xl p-6">
                  <p className="text-sm text-gray-500 mb-2">Finansiering</p>
                  <h3 className="text-xl font-normal text-gray-800 mb-6">Hvordan kan tiltakene finansieres?</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">Kommunale midler</span>
                    <span className="bg-green-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">EU-midler for kultur</span>
                    <span className="bg-green-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">Private investeringer</span>
                  </div>
                </div>

                {/* Lovverk Card */}
                <div className="bg-white rounded-2xl p-6">
                  <p className="text-sm text-gray-500 mb-2">Relevante lovverk</p>
                  <h3 className="text-xl font-normal text-gray-800 mb-6">Hva er det juridiske handlingsrommet?</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">§ Markedsføringsloven</span>
                    <span className="bg-blue-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">§ Kulturminneloven</span>
                    <span className="bg-blue-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">§ Personvernloven</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Vertskap og formidling må følge markedsføringsloven og sikre personvern ved digital kommunikasjon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utforsk tiltakene Section */}
        <section id="tiltak" className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Utforsk tiltakene</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tiltak.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/tiltak/${item.tiltakspakke}/${item.id}`}
                    className="bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${images.vertskapFormidling}')`
                        }}
                      ></div>
                    </div>
                    
                    {/* Content */}
                    <div className="px-1 flex flex-col flex-grow">
                      <p className="text-gray-500 text-sm mb-1">{getTidsperspektivTekst(item.tidsperspektiv)}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
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
            </div>
          </div>
        </section>

        {/* Hvordan pakken svarer til prinsippene Section */}
        <section className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Hvordan pakken svarer til prinsippene</h2>
              <div className="grid md:grid-cols-3 gap-6">
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
                    Gir lokalsamfunnet kontroll over eget sted, reduserer kaos og konflikter
                  </p>
                </div>
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
                    Reduserer slitasje, beskytter hekkeplasser for krykkjer, leder folk bort fra sårbare områder
                  </p>
                </div>
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
                    Skaper forutsigbarhet, bedre opplevelse og tydelige møtepunkter med stedet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hva sier folk? Section */}
        <section className="pt-20 pb-32 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800 text-center">Hva sier folk?</h2>
              <div className="grid md:grid-cols-3 gap-0">
                <div className="px-8 md:border-r border-gray-300">
                  <p className="text-gray-800 text-lg italic text-center leading-relaxed">
                    "Campervans parkerer og turister gjør fra seg i parken. Hunden min tråkket i menneskebæsj. Ikke koselig."
                  </p>
                </div>
                <div className="px-8 md:border-r border-gray-300 mt-8 md:mt-0">
                  <p className="text-gray-800 text-lg italic text-center leading-relaxed">
                    "Veldig mange turister vil se «the view». De går inn i hagen vår, tar bilde av barna våre og kjører for fort på vegen. De har ikke toalett. De parkerer på private eiendommer."
                  </p>
                </div>
                <div className="px-8 mt-8 md:mt-0">
                  <p className="text-gray-800 text-lg italic text-center leading-relaxed">
                    "Turistbusser parkerer hvor som helst og slipper av turister hvor som helst, til og med mellom hus."
                  </p>
                </div>
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
