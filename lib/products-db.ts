import { products as staticProducts } from "./products-data"
import { prisma } from "./db"

export type ProductCharacteristic = {
  title: string
  description: string
}

export type ProductTechnicalSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  category: string
  image: string | null
  images: string[]
  features: string[]
  highlights: string[]
  presentations: string[]
  characteristics: ProductCharacteristic[]
  youtubeVideoId: string | null
  fichaTecnicaUrl?: string | null
  hojaSeguridad?: string | null
  technicalSpecs: ProductTechnicalSpec[]
}

function parseProductRow(row: {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  category: string
  image: string | null
  images: string
  features: string
  highlights: string
  presentations: string
  characteristics: string
  youtubeVideoId: string | null
  fichaTecnicaUrl?: string | null
  hojaSeguridad?: string | null
  technicalSpecs?: string | null
}): Product {
  return {
    id: row.id,
    name: row.name,
    shortDescription: row.shortDescription,
    fullDescription: row.fullDescription,
    category: row.category,
    image: row.image,
    images: JSON.parse(row.images) as string[],
    features: JSON.parse(row.features) as string[],
    highlights: JSON.parse(row.highlights) as string[],
    presentations: JSON.parse(row.presentations) as string[],
    characteristics: JSON.parse(row.characteristics) as ProductCharacteristic[],
    youtubeVideoId: row.youtubeVideoId,
    fichaTecnicaUrl: row.fichaTecnicaUrl || null,
    hojaSeguridad: row.hojaSeguridad || null,
    technicalSpecs: row.technicalSpecs ? (JSON.parse(row.technicalSpecs) as ProductTechnicalSpec[]) : [],
  }
}

function fromStatic(product: (typeof staticProducts)[number]): Product {
  return { ...product, technicalSpecs: product.technicalSpecs ?? [] }
}

// La base de datos (Prisma) es la fuente principal en desarrollo/preview.
// Si no hay conexión (por ejemplo, DATABASE_URL sin configurar en un deploy),
// se usa la data estática como respaldo para no romper producción.
export async function getProducts(): Promise<Product[]> {
  try {
    if (!prisma) throw new Error("DATABASE_URL no configurado")
    const rows = await prisma.product.findMany({ orderBy: { createdAt: "asc" } })
    if (rows.length === 0) return staticProducts.map(fromStatic)
    return rows.map(parseProductRow)
  } catch {
    return staticProducts.map(fromStatic)
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    if (!prisma) throw new Error("DATABASE_URL no configurado")
    const row = await prisma.product.findUnique({ where: { id } })
    if (row) return parseProductRow(row)
  } catch {
    // ignora y cae al respaldo estático
  }
  const fallback = staticProducts.find((product) => product.id === id)
  return fallback ? fromStatic(fallback) : null
}
