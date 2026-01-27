import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FolkenePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-neutral-light py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Folkene
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Her vil informasjon om prosjektteamet og de som jobber med besøksforvaltning på Å komme.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
