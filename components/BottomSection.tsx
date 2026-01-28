import Link from 'next/link'
import { images } from '@/lib/images'

export default function BottomSection() {
  return (
    <section className="relative min-h-[850px]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${images.bakgrunn}')`
        }}
      ></div>
      
      {/* Gradient overlay from beige to transparent - longer transition */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, #FDFBF7 0%, #FDFBF7 10%, rgba(253,251,247,0.9) 20%, rgba(253,251,247,0.7) 30%, rgba(253,251,247,0.4) 40%, transparent 55%)'
        }}
      ></div>
      
      {/* Content positioned in the gradient area - higher up */}
      <div className="relative z-20 container mx-auto px-4 pt-32 text-center">
        <p className="text-sm text-gray-600 mb-4">Bakgrunnen for prosjektet</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-dark">
          Lokalt forankret. Helhetlig samarbeid.
        </h2>
        <Link 
          href="/om-prosjekt" 
          className="bg-primary-dark text-white px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity inline-block text-sm"
        >
          Les om prosjektet
        </Link>
      </div>
    </section>
  )
}
