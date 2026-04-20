import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingElements from '@/components/FloatingElements'
import Loader from '@/components/Loader'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'JCode | Digital Growth Partners',
  description: 'We build digital systems that drive measurable business growth. From strategy to execution—we scale your digital presence.',
  keywords: ['digital agency', 'web development', 'digital marketing', 'branding', 'growth partners'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'JCode | Digital Growth Partners',
    description: 'We build digital systems that drive measurable business growth.',
    url: 'https://jcode.agency',
    siteName: 'JCode',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JCode | Digital Growth Partners',
    description: 'We build digital systems that drive measurable business growth.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Loader />
        <FloatingElements />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
