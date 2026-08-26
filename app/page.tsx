import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/products-db"

export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Products products={products} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
