import { prisma } from "@/lib/db"

export type ProductCharacteristic = {
  title: string
  description: string
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
  }
}

export async function getProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({
    orderBy: { name: "asc" },
  })
  return rows.map(parseProductRow)
}

export async function getProductById(id: string): Promise<Product | null> {
  const row = await prisma.product.findUnique({
    where: { id },
  })
  return row ? parseProductRow(row) : null
}
