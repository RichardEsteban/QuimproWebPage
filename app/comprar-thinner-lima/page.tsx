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
  title: "Comprar thinner en Lima — Thinner acrílico industrial | QUIMPRO",
  description:
    "Compra thinner acrílico en Lima Este. QUIMPRO ofrece solventes industriales de calidad, entrega rápida, ISO 9001:2015. Cotiza ahora.",
  keywords: "comprar thinner lima, thinner acrílico lima, thinner lima este, solventes lima, thinner industrial perú",
  openGraph: {
    title: "Comprar thinner en Lima — Thinner acrílico industrial | QUIMPRO",
    description: "Compra thinner acrílico en Lima Este con entrega rápida. QUIMPRO: 20+ años, ISO 9001:2015.",
    url: "https://quimpro.example/comprar-thinner-lima",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "QUIMPRO Thinner en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprar thinner en Lima — QUIMPRO",
    description: "Thinner acrílico industrial con entrega en Lima Este.",
  },
  canonical: "https://quimpro.example/comprar-thinner-lima",
}

export default async function ComprarThinner() {
  const products = await getProducts()
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <section className="w-full bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-6 flex items-center gap-4">
          <Image src="/logo.jpg" alt="QUIMPRO" width={84} height={84} className="rounded-md" />
          <div>
            <h1 className="text-2xl font-bold mb-1 text-foreground">Comprar thinner en Lima — Thinner acrílico industrial</h1>
            <p className="text-sm text-muted-foreground">Entrega rápida desde Lima Este · 20+ años · ISO 9001:2015</p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Comprar thinner en Lima — Thinner acrílico industrial",
            description:
              "Compra thinner acrílico en Lima Este con entrega rápida. QUIMPRO: solventes de calidad, 20+ años, ISO 9001:2015.",
            url: "https://quimpro.example/comprar-thinner-lima",
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
          <h1 className="text-3xl font-bold mb-4">Comprar thinner en Lima — Thinner acrílico y soluciones para talleres</h1>

          <p className="mb-4">
            Si buscas comprar thinner en Lima con entrega rápida en Lima Este, QUIMPRO ofrece thinner acrílico y
            soluciones de disolventes diseñadas para talleres automotrices, ferreterías y uso industrial. Con más de 20
            años en el mercado y certificación ISO 9001:2015, garantizamos calidad, trazabilidad y respaldo técnico.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Por qué elegir nuestro thinner acrílico</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Formulación balanceada para flujo y nivelación.</li>
            <li>Evaporación controlada para evitar marcas y mejorar brillo.</li>
            <li>Presentaciones comerciales desde 0.45 L hasta cilindros industriales.</li>
            <li>Fichas técnicas y MSDS disponibles por lote.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Aplicaciones</h2>
          <p className="mb-4">Uso en repintado automotriz, recubrimientos industriales y preparación de superficies.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Cómo solicitar</h2>
          <p className="mb-6">
            Solicita una cotización o muestra técnica. Ofrecemos asesoría para seleccionar el thinner correcto según la
            pintura y las condiciones de trabajo. Entregas en Lima Este y envíos a todo Perú.
          </p>

          <div className="flex gap-4 mb-12">
            <a
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg"
              href="https://wa.me/992360331?text=Hola,%20quiero%20comprar%20thinner%20en%20Lima"
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>
            <a
              className="inline-block border border-border px-6 py-3 rounded-lg"
              href="/#contact"
            >
              Contacto técnico
            </a>
          </div>

          {/* Product Grid */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Nuestros productos de thinner</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.filter(p => p.id.includes('thinner')).map((product) => (
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
