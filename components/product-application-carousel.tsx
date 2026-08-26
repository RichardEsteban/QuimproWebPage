"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Slide =
  | {
      type: "producto"
      kicker: "Producto"
      title: string
      description: string
      tags: [string, string]
      image: string
    }
  | {
      type: "aplicacion"
      kicker: "Aplicación"
      title: string
      description: string
    }

// Empieza con un solo producto (Thinner Acrílico NFSC-100): fotos de producto
// reales, fotos de aplicación como placeholder hasta tener material real.
const slides: Slide[] = [
  {
    type: "producto",
    kicker: "Producto",
    title: "Thinner Acrílico NFSC-100",
    description: "Thinner reforzado de alta calidad para dilución de lacas y selladores.",
    tags: ["Secado rápido", "Alta pureza"],
    image: "/products/ThinnerNFSC100-1.jpeg",
  },
  {
    type: "aplicacion",
    kicker: "Aplicación",
    title: "Dilución de lacas y selladores",
    description:
      "Diseñado para reducir la viscosidad de pinturas alquílicas, nitrocelulosas y esmaltes acrílicos sin afectar el brillo del acabado.",
  },
  {
    type: "producto",
    kicker: "Producto",
    title: "Thinner Acrílico NFSC-100",
    description: "Disponible en cilindro, bidón, galonera y botella, según el volumen que necesites.",
    tags: ["Uso industrial", "Sin residuos"],
    image: "/products/ThinnerNFSC100-2.jpeg",
  },
  {
    type: "aplicacion",
    kicker: "Aplicación",
    title: "Acabado limpio en taller",
    description:
      "Secado rápido y uniforme que permite continuar el trabajo sin retrasos ni residuos visibles.",
  },
]

export function ProductApplicationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const slide = slides[currentIndex]

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-sm font-semibold tracking-widest text-primary">
            PRODUCTO + APLICACIÓN
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            De la fórmula al resultado terminado
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid min-h-[420px] lg:grid-cols-2">
            <div className="relative order-1 min-h-[260px] lg:min-h-full">
              {slide.type === "producto" ? (
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain bg-muted p-8"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary/25 to-secondary/5 p-8 text-center">
                  <ImageOff className="h-10 w-10 text-secondary" aria-hidden="true" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Foto de aplicación pendiente
                  </span>
                </div>
              )}
            </div>

            <div className="order-2 flex flex-col justify-center gap-4 p-8 sm:p-12">
              <span
                className={cn(
                  "w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
                  slide.type === "producto"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/15 text-secondary-foreground",
                )}
              >
                {slide.kicker.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
                {slide.title}
              </h3>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                {slide.description}
              </p>
              {slide.type === "producto" && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 shadow-sm hover:bg-background"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Anterior</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 shadow-sm hover:bg-background"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                currentIndex === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50",
              )}
            >
              <span className="sr-only">Ir a la diapositiva {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
