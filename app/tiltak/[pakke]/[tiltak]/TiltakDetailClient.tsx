'use client'

import { useState, useEffect } from 'react'

interface TiltakDetailClientProps {
  tiltakSlug: string
  tiltakTitle: string
}

export default function TiltakDetailClient({ tiltakSlug, tiltakTitle }: TiltakDetailClientProps) {
  const [supportCount, setSupportCount] = useState(0)
  const [hasSupported, setHasSupported] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`/api/tiltak/${tiltakSlug}/support`)
      .then(res => res.json())
      .then(data => {
        setSupportCount(data.count)
        setHasSupported(data.hasSupported)
      })
      .catch(console.error)
  }, [tiltakSlug])

  const handleSupport = async () => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      const res = await fetch(`/api/tiltak/${tiltakSlug}/support`, {
        method: 'POST',
      })
      const data = await res.json()
      setSupportCount(data.count)
      setHasSupported(data.hasSupported)
    } catch (error) {
      console.error('Failed to support:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    try {
      const shareData = {
        title: tiltakTitle,
        text: `Se tiltaket "${tiltakTitle}"`,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      }

      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard && shareData.url) {
        await navigator.clipboard.writeText(shareData.url)
      }
    } catch (err) {
      console.error('Kunne ikke dele tiltaket', err)
    }
  }

  return (
    <div className="mb-8 pt-6 border-t border-gray-200">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {/* Like / støtte */}
          <button
            onClick={handleSupport}
            disabled={isLoading}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border ${
              hasSupported
                ? 'border-transparent text-[#D56554]'
                : 'border-gray-300 text-gray-800 bg-white'
            }`}
            style={
              hasSupported
                ? { backgroundColor: '#F9EAEA' }
                : undefined
            }
          >
            <span
              className={`flex items-center transition-all duration-150 ${
                hasSupported
                  ? 'text-[#D56554]'
                  : 'text-[#B8A88A]'
              }`}
            >
              <svg
                className="h-4 w-4 transform transition-transform duration-150 active:scale-125"
                viewBox="0 0 32 32"
                fill={hasSupported ? 'currentColor' : 'none'}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66699 12.6664C2.66702 11.1827 3.11712 9.73384 3.95784 8.51128C4.79856 7.28872 5.99035 6.34994 7.3758 5.81893C8.76126 5.28792 10.2752 5.18965 11.7177 5.53712C13.1601 5.88459 14.4633 6.66143 15.455 7.76506C15.5248 7.83975 15.6093 7.89929 15.7031 7.93999C15.7969 7.9807 15.8981 8.00171 16.0003 8.00171C16.1026 8.00171 16.2038 7.9807 16.2976 7.93999C16.3914 7.89929 16.4758 7.83975 16.5457 7.76506C17.5342 6.65426 18.8377 5.87088 20.2825 5.5192C21.7273 5.16751 23.245 5.26419 24.6335 5.79637C26.022 6.32856 27.2155 7.271 28.0551 8.49826C28.8948 9.72553 29.3407 11.1794 29.3337 12.6664C29.3337 15.7197 27.3337 17.9997 25.3337 19.9997L18.011 27.0837C17.7625 27.3691 17.4562 27.5983 17.1124 27.7561C16.7685 27.914 16.395 27.9969 16.0167 27.9993C15.6384 28.0017 15.2639 27.9235 14.918 27.77C14.5722 27.6165 14.263 27.3912 14.011 27.1091L6.66699 19.9997C4.66699 17.9997 2.66699 15.7331 2.66699 12.6664Z"
                  stroke="currentColor"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={`transition-colors duration-150 ${
                hasSupported ? 'text-[#D56554]' : 'text-gray-800'
              }`}
            >
              {supportCount}
            </span>
          </button>

          {/* Del tiltak */}
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
          >
            <span>↗</span>
            <span>Del tiltak</span>
          </button>
        </div>

        {/* Ta kontakt */}
        <a
          href={`mailto:erlend@travers.as?subject=Innspill til ${tiltakTitle}`}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 md:ml-auto"
        >
          <span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 0 1 12 20.5a8.38 8.38 0 0 1-5.4-1.9L3 21l1.4-3.6A8.38 8.38 0 0 1 2.5 12 8.5 8.5 0 0 1 7.1 4.4 8.38 8.38 0 0 1 12 2.5h.5A8.48 8.48 0 0 1 21 11v.5z" />
            </svg>
          </span>
          <span>Ta kontakt</span>
        </a>
      </div>
    </div>
  )
}
