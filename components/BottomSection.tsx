import Link from 'next/link'
import { images } from '@/lib/images'

interface BottomSectionProps {
  bgColor?: string
}

export default function BottomSection({ bgColor = '#FDFBF7' }: BottomSectionProps) {
  // Convert hex to rgba for gradient
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r},${g},${b},${alpha})`
  }

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
          background: `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 10%, ${hexToRgba(bgColor, 0.9)} 20%, ${hexToRgba(bgColor, 0.7)} 30%, ${hexToRgba(bgColor, 0.4)} 40%, transparent 55%)`
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
