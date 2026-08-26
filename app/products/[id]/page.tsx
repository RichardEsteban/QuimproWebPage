import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductById, getProducts } from "@/lib/products-db"
import {
  Check,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Zap,
  Factory,
  Layers,
  Droplets,
  Shield,
  Award,
} from "lucide-react"

const characteristicIcons: Record<string, React.ElementType> = {
  "Alta pureza": Sparkles,
  Ultrapura: Sparkles,
  "Secado rápido": Zap,
  "Evaporación rápida": Zap,
  "Acción rápida": Zap,
  "Uso industrial": Factory,
  "Calidad profesional": Factory,
  "Grado laboratorio": Factory,
  Compatibilidad: Layers,
  Compatible: Layers,
  "Poder solvente": Droplets,
  "Alto poder": Droplets,
  "Sin residuos": Shield,
  "Bajo residuo": Shield,
  Ecológico: Shield,
  Seguro: Shield,
  "Almacenamiento seguro": Shield,
  Concentrado: Layers,
  Versátil: Layers,
  "Bajo olor": Shield,
  "Protección UV": Shield,
  "Excelente flujo": Droplets,
  Refinado: Sparkles,
  Económico: Award,
  "Grado médico": Award,
  Desinfectante: Shield,
  "Calidad garantizada": Award,
  Consistente: Award,
  "Certificada en calidad": Award,
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found - Quimpro",
    }
  }

  return {
    title: `${product.name} - Quimpro Chemical Solvents`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Product JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: (product.images || []).map((p) => `https://quimpro.example${p}`),
            description: product.shortDescription,
            sku: product.id,
            brand: {
              "@type": "Brand",
              name: "QUIMPRO",
            },
            url: `https://quimpro.example/products/${product.id}`,
            category: product.category,
          })
        }}
      />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-primary transition-colors">
                Productos
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Image Carousel */}
              <div>
                <ProductImageCarousel
                  images={product.images}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Presentations */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Presentaciones disponibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.presentations.map((presentation) => (
                      <Badge
                        key={presentation}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium"
                      >
                        {presentation}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Downloads */}
                {(product.fichaTecnicaUrl || product.hojaSeguridad) && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Documentos</h3>
                    <div className="flex flex-col gap-2">
                      {product.fichaTecnicaUrl && (
                        <Button asChild variant="outline" className="justify-start">
                          <a
                            href={product.fichaTecnicaUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            📄 Descargar Ficha Técnica
                          </a>
                        </Button>
                      )}
                      {product.hojaSeguridad && (
                        <Button asChild variant="outline" className="justify-start">
                          <a
                            href={product.hojaSeguridad}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            🛡️ Descargar Hoja de Seguridad
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <a
                    href={`https://wa.me/920016148?text=Hola, estoy interesado en ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/#products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a productos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modo de uso */}
        {product.usageSteps.length > 0 && (
          <section className="py-12 sm:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-widest text-primary">
                    MODO DE USO
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                    ¿Cómo usar {product.name}?
                  </h2>
                  <ol className="space-y-4">
                    {product.usageSteps.map((step, index) => (
                      <li key={step} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={product.images[1] || product.images[0] || "/placeholder.svg"}
                    alt={`Aplicación de ${product.name}`}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Complete Characteristics */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                Características completas
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.characteristics.map((characteristic, index) => {
                const IconComponent = characteristicIcons[characteristic.title] || Sparkles
                const colors = [
                  "text-primary",
                  "text-orange-500",
                  "text-secondary",
                  "text-blue-500",
                  "text-amber-500",
                  "text-cyan-500",
                ]
                const color = colors[index % colors.length]

                return (
                  <div
                    key={characteristic.title}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className={`shrink-0 ${color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${color} mb-1`}>
                        {characteristic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {characteristic.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        {product.technicalSpecs.length > 0 && (
          <section className="py-12 sm:py-16">
            <div className="mx-auto max-w-4xl px-4 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                  Especificaciones técnicas
                </h2>
                <p className="text-muted-foreground">
                  Propiedades físicas según la ficha técnica de {product.name}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-sm">
                  <tbody>
                    {product.technicalSpecs.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={index % 2 === 1 ? "bg-muted/40" : undefined}
                      >
                        <td className="px-6 py-3.5 text-muted-foreground w-1/2 sm:w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-6 py-3.5 font-medium text-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Product Description */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Descripción del producto
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              ¿Interesado en {product.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy para solicitar una cotización o para obtener más información sobre nuestros productos y servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/#contact">Contáctanos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a
                  href={`https://wa.me/992360331?text=Hola, estoy interesado en ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
