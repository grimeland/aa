'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

interface CarouselItem {
  tag: string
  title: string
  image: string
  href: string
}

interface CarouselProps {
  items: CarouselItem[]
  bgColor?: string
}

export default function Carousel({ items, bgColor = '#FDFBF7' }: CarouselProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden mx-8 md:mx-16 lg:mx-24 rounded-2xl">
      {/* Left fade */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
      ></div>
      
      {/* Right fade */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
      ></div>
      
      {/* Animated container */}
      <div 
        className="flex gap-4 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: `scroll 80s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          width: 'max-content'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="group relative flex-shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[380px] rounded-2xl overflow-hidden select-none"
            draggable={false}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('${item.image}')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-normal rounded-full self-start">
                {item.tag}
              </span>
              <h3 className="text-lg md:text-xl font-normal text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
