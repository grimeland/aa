import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Folk, fuggel og fesk - Å i Lofoten',
  description: 'Prinsipper og tiltak for besøksforvaltning på Å',
}

const moderat = localFont({
  src: [
    {
      path: './fonts/Moderat-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Moderat-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-moderat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={moderat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
