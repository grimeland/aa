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
          background: 'linear-gradient(to bottom, #F8F4ED 0%, #F8F4ED 15%, rgba(248,244,237,0.8) 25%, rgba(248,244,237,0.4) 35%, transparent 50%)'
        }}
      ></div>
      
      {/* Content positioned in the gradient area - higher up */}
      <div className="relative z-20 container mx-auto px-4 pt-12 text-center">
        <p className="text-sm text-gray-600 mb-4">Bakgrunnen for prosjektet</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-dark">
          Lokalt forankret. Helhetlig samarbeid.
        </h2>
        <Link 
          href="/bakgrunn" 
          className="bg-primary-dark text-white px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity inline-block text-sm"
        >
          Les om prosjektet
        </Link>
      </div>
    </section>
  )
}
