import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'QUIMPRO — Thinner y solventes químicos | Lima Este, Perú',
  description:
    'QUIMPRO: 20+ años ofreciendo thinner acrílico, aguarrás, alcohol isopropílico y solventes industriales. ISO 9001:2015. Entrega en Lima Este y envío a todo Perú.',
  keywords: [
    'comprar thinner Lima',
    'solventes químicos Perú',
    'productos químicos Lima Este',
    'thinner acrílico Lima',
    'alcohol isopropílico Perú',
  ],
  authors: [{ name: 'QUIMPRO' }],
  openGraph: {
    title: 'QUIMPRO — Thinner y solventes químicos | Lima Este, Perú',
    description:
      'QUIMPRO: 20+ años ofreciendo thinner acrílico, aguarrás, alcohol isopropílico y solventes industriales. ISO 9001:2015.',
    siteName: 'QUIMPRO',
    type: 'website',
    url: 'https://quimicaproceres.com',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'QUIMPRO Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUIMPRO — Thinner y solventes químicos',
    description:
      '20+ años de experiencia en solventes químicos. Compra thinner en Lima Este y recibe asesoría técnica.',
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {/* Organization JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QUIMPRO",
              url: "https://quimicaproceres.com",
              logo: "https://quimicaproceres.com/logo.jpg",
              sameAs: [
                "https://www.facebook.com/quimicaproceres",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lima Este",
                addressLocality: "Lima",
                addressCountry: "PE"
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+51 992360331",
                  contactType: "sales",
                  areaServed: "PE"
                }
              ]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
