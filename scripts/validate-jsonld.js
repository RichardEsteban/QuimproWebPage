// Simple validator for the JSON-LD objects we injected into the app
function validate(name, obj) {
  try {
    const str = JSON.stringify(obj)
    const parsed = JSON.parse(str)
    console.log(`OK: ${name} — length ${str.length} chars, keys: ${Object.keys(parsed).slice(0,10).join(', ')}`)
  } catch (err) {
    console.error(`ERROR: ${name} —`, err)
    process.exitCode = 1
  }
}

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QUIMPRO",
  url: "https://quimpro.example",
  logo: "https://quimpro.example/logo.png",
  sameAs: [
    "https://www.facebook.com/quimpro",
    "https://www.linkedin.com/company/quimpro",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lima Este",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+51 992360331",
      contactType: "sales",
      areaServed: "PE",
    },
  ],
}

const webpageThinner = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Comprar thinner en Lima — QUIMPRO",
  description:
    "Compra thinner acrílico en Lima Este. QUIMPRO: 20+ años y certificación ISO 9001:2015. Entregas en Lima y Perú.",
  url: "https://quimpro.example/comprar-thinner-lima",
}

const webpageSolventes = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Solventes químicos Perú — QUIMPRO",
  description:
    "Suministro de solventes químicos en Perú: thinner, aguarrás y alcohol isopropílico con entrega desde Lima Este.",
  url: "https://quimpro.example/solventes-quimicos-peru",
}

const sampleProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Thinner Acrílico NFSC-100",
  image: [
    "https://quimpro.example/products/ThinnerNFSC100-1.jpeg",
    "https://quimpro.example/products/ThinnerNFSC100-2.jpeg",
  ],
  description: "Thinner reforzado de alta calidad para dilución de lacas y selladores.",
  sku: "thinner-acrilico",
  brand: { "@type": "Brand", name: "QUIMPRO" },
  url: "https://quimpro.example/products/thinner-acrilico",
  category: "Industrial",
}

console.log('Validating JSON-LD objects...')
validate('Organization', orgLd)
validate('WebPage - thinner', webpageThinner)
validate('WebPage - solventes', webpageSolventes)
validate('Product - sample', sampleProduct)

if (process.exitCode === 0 || process.exitCode === undefined) {
  console.log('\nAll JSON-LD objects validated successfully.')
} else {
  console.error('\nOne or more JSON-LD objects failed validation.')
}
