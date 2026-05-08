import type { Metadata } from 'next'
import { Inter, Syne, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OREN — Premium Digital Agency | Websites, Branding & CRM Solutions',
  description:
    'OREN is a modern digital agency from Kanpur, India, building premium websites, e-commerce platforms, CRM systems, branding, and digital growth solutions for startups and modern businesses.',
  keywords: [
    'digital agency India',
    'web development Kanpur',
    'startup website',
    'CRM solutions',
    'branding agency',
    'SEO India',
    'e-commerce development',
    'OREN agency',
  ],
  authors: [{ name: 'OREN Digital Agency' }],
  creator: 'OREN',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oren.agency',
    title: 'OREN — Premium Digital Agency',
    description:
      'Building Modern Digital Experiences That Grow Businesses. Premium websites, e-commerce, CRM, branding & SEO.',
    siteName: 'OREN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OREN — Premium Digital Agency',
    description: 'Building Modern Digital Experiences That Grow Businesses.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0d0d0d',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
