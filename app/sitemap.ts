import type { MetadataRoute } from 'next'
import { products } from '@/lib/products-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.quimpro.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productRoutes,
  ]
}
