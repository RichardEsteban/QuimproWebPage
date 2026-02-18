import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProducts } from "@/lib/products-db"

export const metadata: Metadata = {
  title: "Solventes químicos Perú — Thinner, aguarrás e industria | QUIMPRO",
  description:
    "Solventes químicos Perú: QUIMPRO ofrece thinner, aguarrás, alcohol isopropílico con entrega desde Lima Este. 20+ años, ISO 9001:2015.",
  keywords: "solventes químicos perú, thinner perú, aguarrás perú, alcohol isopropílico, solventes industriales",
  openGraph: {
    title: "Solventes químicos Perú — Thinner, aguarrás e industria | QUIMPRO",
    description: "Solventes químicos de calidad: thinner, aguarrás y alcohol isopropílico con entrega en todo Perú.",
    url: "https://quimpro.example/solventes-quimicos-peru",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "QUIMPRO Solventes en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solventes químicos Perú — QUIMPRO",
    description: "Thinner, aguarrás y solventes industriales con entrega en todo Perú.",
  },
  canonical: "https://quimpro.example/solventes-quimicos-peru",
}

export default async function SolventesPeru() {
  const products = await getProducts()
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <section className="w-full bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-6 flex items-center gap-4">
          <Image src="/logo.jpg" alt="QUIMPRO" width={84} height={84} className="rounded-md" />
          <div>
            <h1 className="text-2xl font-bold mb-1 text-foreground">Solventes químicos Perú — Suministro industrial</h1>
            <p className="text-sm text-muted-foreground">Suministro desde Lima Este · 20+ años · ISO 9001:2015</p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Solventes químicos Perú — Suministro industrial",
            description:
              "Solventes químicos de calidad: thinner, aguarrás y alcohol isopropílico con entrega desde Lima Este.",
            url: "https://quimpro.example/solventes-quimicos-peru",
            publisher: {
              "@type": "Organization",
              name: "QUIMPRO",
              logo: {
                "@type": "ImageObject",
                url: "https://quimpro.example/logo.jpg",
              },
            },
          })
        }}
      />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-4">Solventes químicos Perú — Suministro y asesoría técnica</h1>

          <p className="mb-4">
            QUIMPRO provee una gama de solventes químicos para industrias, talleres y ferreterías en todo Perú. Desde
            thinner acrílico y aguarrás hasta alcohol isopropílico y formulaciones industriales a granel, garantizamos
            calidad y entrega desde Lima Este.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Nuestros productos clave</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Thinner acrílico y automotriz (diferentes grados).</li>
            <li>Aguarrás mineral refinado para limpieza y dilución.</li>
            <li>Alcohol isopropílico 70% y 99% para limpieza técnica.</li>
            <li>Solventes industriales a medida y suministro a granel.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Servicios para empresas</h2>
          <p className="mb-4">Asesoría técnica, fichas por lote (MSDS), programas de suministro y entregas programadas.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Confianza y calidad</h2>
          <p className="mb-6">20+ años en el mercado, procesos certificados ISO 9001:2015 y control de calidad por lote.</p>

          <div className="flex gap-4 mb-12">
            <a
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg"
              href="https://wa.me/992360331?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20solventes%20qu%C3%ADmicos%20Per%C3%BA"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
            <a
              className="inline-block border border-border px-6 py-3 rounded-lg"
              href="/#contact"
            >
              Hablar con un técnico
            </a>
          </div>

          {/* Product Grid */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Catálogo completo de solventes</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer h-full">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
