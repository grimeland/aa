import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import { images } from '@/lib/images'

export default function OmProsjektPage() {
  return (
    <>
      <Header darkMode />
      <main className="pt-20" style={{ backgroundColor: '#FDFBF7' }}>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Om prosjektet
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Et lokalt forankret initiativ for å utvikle bærekraftig besøksforvaltning på Å i Lofoten.
              </p>
            </div>
          </div>
        </section>

        {/* Image Grid 1 */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image 
                    src="/images/omprosjekt1.JPG"
                    alt="Å i Lofoten"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image 
                    src="/images/omprosjekt2.JPG"
                    alt="Å i Lofoten"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utfordringen Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Utfordringen
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Å i Lofoten opplever et stadig økende besøkstrykk som skaper utfordringer for 
                lokalsamfunnet, naturen og de besøkende selv. Mangel på infrastruktur, uklare 
                retningslinjer og begrenset kapasitet fører til konflikter og slitasje.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Turistbusser parkerer hvor som helst, besøkende mangler toalettfasiliteter, 
                og sårbare naturområder blir belastet. Lokalbefolkningen opplever at hverdagen 
                blir påvirket av kaos og manglende respekt for privat eiendom.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Det er behov for en helhetlig tilnærming som balanserer turisme med hensynet 
                til de som bor der og naturen som gjør stedet unikt.
              </p>
            </div>
          </div>
        </section>

        {/* Mål Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Mål
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Image Grid 2 */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image 
                    src="/images/omprosjekt3.JPG"
                    alt="Å i Lofoten"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image 
                    src="/images/omprosjekt4.JPG"
                    alt="Å i Lofoten"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hvem står bak Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Hvem står bak
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Prosjektet er et samarbeid mellom flere aktører med ulik kompetanse innen 
                design, planlegging, kommunikasjon og lokal forvaltning.
              </p>
              
              {/* Moskenes photo */}
              <div className="mb-12">
                <div className="rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/moskenes_foto_joachim-engelstad.jpg"
                    alt="Moskenes kommune"
                    width={1200}
                    height={500}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Foto: Joachim Engelstad
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">PIR2</h3>
                  <p className="text-gray-600 text-sm">Arkitektur og planlegging</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Travers</h3>
                  <p className="text-gray-600 text-sm">Design og kommunikasjon</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">H&W</h3>
                  <p className="text-gray-600 text-sm">Strategi og rådgivning</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Moskenes kommune</h3>
                  <p className="text-gray-600 text-sm">Lokal forankring og forvaltning</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Museum Nord</h3>
                  <p className="text-gray-600 text-sm">Kulturformidling og historie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Kontakt
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Har du spørsmål om prosjektet eller ønsker å bidra?
              </p>
              <a 
                href="mailto:erlend@travers.as"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Ta kontakt
              </a>
            </div>
          </div>
        </section>

        {/* Tiltak Carousel Section */}
        <section className="pt-20 pb-32 overflow-hidden">
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
      </main>
      <Footer />
    </>
  )
}
