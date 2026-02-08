import { PrismaClient } from "@prisma/client"
import { products } from "../lib/products-data"

const prisma = new PrismaClient()

async function main() {
  // Clear existing products
  await prisma.product.deleteMany()

  // Insert products from static data
  for (const product of products) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        shortDescription: product.shortDescription,
        fullDescription: product.fullDescription,
        category: product.category,
        image: product.image,
        images: JSON.stringify(product.images),
        features: JSON.stringify(product.features),
        highlights: JSON.stringify(product.highlights),
        presentations: JSON.stringify(product.presentations),
        characteristics: JSON.stringify(product.characteristics),
        youtubeVideoId: product.youtubeVideoId,
      },
    })
  }

  console.log(`Seeded ${products.length} products`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
