import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { images } from '@/lib/images'
import { getTiltakByPakke, getStatusIcon, getTidsperspektivTekst } from '@/lib/tiltak'

export default function FysiskInfrastrukturPage() {
  const tiltak = getTiltakByPakke('fysisk-infrastruktur')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${images.fysiskInfrastruktur}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center py-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fysisk infrastruktur og besøksflyt
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Teknisk planlegging, oppgradering av eksisterende anlegg og nye løsninger for å redusere slitasje og forbedre opplevelsen.
            </p>
            <button className="bg-white text-primary-dark px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Les mer
            </button>
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
                    Fysisk infrastruktur og besøksflyt handler om å skape en infrastruktur som fungerer godt 
                    for både lokalbefolkning og besøkende, samtidig som vi beskytter naturen og bevarer Ås unike karakter.
                  </p>
                  <p>
                    Gjennom teknisk planlegging og strategiske løsninger kan vi redusere belastningen på området 
                    og forbedre opplevelsen for alle som besøker Å.
                  </p>
                  <p>
                    Dette inkluderer alt fra parkeringsløsninger og trafikkflyt til toalettfasiliteter, 
                    informasjonssystemer og vedlikehold av grønne områder.
                  </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${images.fysiskInfrastruktur}')`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forutsetninger Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Forutsetninger: Nødvendige aktører, finansiering og relevant lovverk
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Aktører Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Aktører</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Kommune</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Regjering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Innbyggere</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Turister</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Frivillige</span>
                    </li>
                  </ul>
                </div>

                {/* Finansiering Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Finansiering</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Statlig støtte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Kommunale midler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Private investeringer</span>
                    </li>
                  </ul>
                </div>

                {/* Lovverk Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Lovverk</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Plan- og bygningsloven</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Naturmangfoldloven</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Forurensningsloven</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utforsk tiltakene Section */}
        <section className="py-20 bg-neutral-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Utforsk tiltakene</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tiltak.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/tiltak/${item.tiltakspakke}/${item.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 bg-cover bg-center">
                      <div className="absolute top-3 left-3">
                        <span className="bg-white text-gray-800 px-2 py-1 text-xs font-medium rounded">
                          Tiltak
                        </span>
                      </div>
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${images.fysiskInfrastruktur}')`
                        }}
                      ></div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-500 text-sm mb-2">{getTidsperspektivTekst(item.tidsperspektiv)}</p>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-dark transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {item.beskrivelse}
                      </p>
                      <button className="w-full bg-primary-dark text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                        Utforsk tiltak
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hvem ser vi etter? Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Hvem ser vi etter?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-neutral-light rounded-lg p-6">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Nye perspektiver og løsninger</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vi søker etter personer og organisasjoner som kan bidra med innovative løsninger 
                    og nye perspektiver på besøksforvaltning.
                  </p>
                </div>
                <div className="bg-neutral-light rounded-lg p-6">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Lokal forankring og engasjement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lokale aktører med kunnskap om området og engasjement for å bevare Ås unike karakter 
                    er viktige for prosjektets suksess.
                  </p>
                </div>
                <div className="bg-neutral-light rounded-lg p-6">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-dark">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Digitale verktøy og plattformer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ekspertise innen digitale løsninger og plattformer som kan støtte besøksforvaltning 
                    og kommunikasjon med besøkende.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-section Banner */}
        <section className="relative py-32 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${images.bakgrunn}')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Lokalt forankret. Helhetlig samarbeid.
            </h2>
            <Link href="/kontakt" className="btn-primary inline-block">
              Bli med
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
