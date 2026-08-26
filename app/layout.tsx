import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.quimpro.com'
const siteName = 'QUIMPRO'
const title = 'QUIMPRO | Fabricante y distribuidor de solventes químicos en Perú'
const description =
  'QUIMPRO (Química Proceres) fabrica y distribuye solventes químicos de alta calidad para uso industrial, automotriz y comercial. Certificación ISO 9001:2015. Más de 20 años de experiencia.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | QUIMPRO',
  },
  description,
  keywords: [
    'solventes químicos',
    'thinner',
    'diluyente',
    'disolventes industriales',
    'química industrial Perú',
    'QUIMPRO',
    'Química Proceres',
    'ISO 9001:2015',
  ],
  authors: [{ name: 'QUIMPRO' }],
  generator: '',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'QUIMPRO - Solventes químicos de alta calidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.jpg' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QUIMPRO',
  legalName: 'Química Proceres',
  alternateName: 'Química Proceres',
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  description,
  foundingDate: '2002',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Industrial 1234',
    addressLocality: 'Lima',
    addressCountry: 'PE',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+51-1-555-0123',
      contactType: 'sales',
      email: 'sales@quimpro.com',
      areaServed: 'PE',
      availableLanguage: ['es'],
    },
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
