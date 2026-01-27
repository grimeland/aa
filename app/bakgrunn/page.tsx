import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { images } from '@/lib/images'

export default function BakgrunnPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${images.bakgrunn}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lokalt forankret. Helhetlig samarbeid.
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Om prosjektet</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dette prosjektet er et lokalt forankret initiativ for å utvikle bærekraftig besøksforvaltning 
                på Å i Lofoten. Prosjektet er et samarbeid mellom flere aktører med fokus på å finne 
                løsninger som fungerer for lokalsamfunnet, naturen og besøkende.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Partnere</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prosjektet er et samarbeid mellom:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>PIR2</li>
                <li>Travers</li>
                <li>H&W</li>
                <li>Moskenes kommune</li>
                <li>Museum nord</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Målsetting</h3>
              <p className="text-gray-700 leading-relaxed">
                Målet er å utvikle konkrete tiltak og prinsipper for besøksforvaltning som sikrer at 
                Å kan fungere godt for folk, fuggel og fesk - hele året. Prosjektet bygger på lokal 
                kunnskap og engasjement, kombinert med faglig ekspertise innen bærekraftig turisme.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
