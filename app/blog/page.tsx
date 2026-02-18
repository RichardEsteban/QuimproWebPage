import React from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "¿Dónde comprar thinner en Lima? Guía técnica y práctica | QUIMPRO",
  description:
    "Guía práctica para comprar thinner en Lima y solventes químicos en Perú. QUIMPRO: 20+ años, ISO 9001:2015. Cotiza y pide muestras.",
}

export default function BlogArticle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="w-full bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-6 flex items-center gap-4">
          <Image src="/logo.png" alt="QUIMPRO" width={72} height={72} className="rounded-md" />
          <div>
            <h1 className="text-2xl font-bold mb-1 text-foreground">¿Dónde comprar thinner en Lima? Guía completa</h1>
            <p className="text-sm text-muted-foreground">Consejos técnicos y checklist para ferreterías, talleres automotrices y empresas industriales en Perú.</p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-12">
          <article className="prose lg:prose-xl mx-auto">
            <h2>Introducción</h2>
            <p>
              Para talleres, ferreterías y empresas industriales en Lima, elegir y <strong>comprar thinner en Lima</strong>
              no es solo cuestión de precio: es asegurar calidad, compatibilidad con el sistema de pintura y seguridad
              operativa. Un producto mal especificado puede causar problemas de nivelación, pérdidas de brillo y paros en
              la producción. En esta guía encontrarás criterios técnicos, checklist de compra y las ventajas de trabajar
              con un proveedor local con experiencia.
            </p>

            <h3>Tipos de solventes y usos</h3>
            <p>
              Los solventes más habituales son: thinner acrílico (para pinturas y lacas a base acrílica), aguarrás mineral
              (para esmaltes y barnices base aceite), alcohol isopropílico (IPA 70% o 99% para limpieza y desengrase) y
              solventes industriales a medida (mezclas, cetonas, hidrocarburos). Cada tipo tiene propiedades clave: poder
              de disolución, velocidad de evaporación, residuos y compatibilidad con resinas.
            </p>

            <h3>Factores técnicos a evaluar</h3>
            <ul>
              <li><strong>Poder solvente:</strong> determina capacidad de disolución de la pintura o suciedad.</li>
              <li><strong>Velocidad de evaporación:</strong> afecta la nivelación y la aparición de marcas.</li>
              <li><strong>Residuos:</strong> los solventes puros dejan menos residuos; importante en electrónica y acabados finos.</li>
              <li><strong>Compatibilidad:</strong> confirma que el solvente sea apto para el sistema (acrílico, poliuretano, epóxico).</li>
            </ul>

            <h3>Checklist rápido antes de comprar</h3>
            <ol>
              <li>Pide la <strong>ficha técnica</strong> y la <strong>hoja de seguridad (MSDS)</strong> por lote.</li>
              <li>Solicita muestras para prueba en panel bajo condiciones reales de aplicación.</li>
              <li>Comprueba certificaciones del proveedor (ISO 9001:2015) y control de calidad por lote.</li>
              <li>Evalúa opciones de logística: entregas en Lima Este, envío nacional, y suministro a granel si corresponde.</li>
            </ol>

            <h3>Por qué comprar local en Lima Este</h3>
            <p>
              Comprar a un proveedor con presencia local reduce tiempos de entrega y costos logísticos. Para los talleres
              y empresas, la ventaja de recibir soporte técnico in situ y muestras rápidas puede ser la diferencia entre
              un proceso estable y un reproceso costoso.
            </p>

            <h3>Caso práctico: thinner acrílico para taller automotriz</h3>
            <p>
              En repintado automotriz, un <strong>thinner acrílico</strong> de calidad favorece flujo y nivelación. Una
              mezcla típica varía según la pintura y la temperatura, pero siempre es recomendable seguir la ficha técnica
              y realizar pruebas en panel. El uso de thinner incorrecto puede causar ampollas, nubles o pérdida de brillo.
            </p>

            <h3>Certificaciones y seguridad</h3>
            <p>
              Trabajar con proveedores certificados (por ejemplo ISO 9001:2015) aporta trazabilidad y procesos documentados.
              Asegúrate de recibir MSDS, las recomendaciones de almacenamiento (ventilación, EPP) y las instrucciones de
              transporte para evitar riesgos y cumplir normativa local.
            </p>

            <h3>Beneficios de comprar en QUIMPRO</h3>
            <ul>
              <li>Más de 20 años de experiencia en formulación y suministro de solventes.</li>
              <li>Asesoría técnica para seleccionar thinner y solventes según proceso.</li>
              <li>Fichas técnicas y hojas de seguridad por lote disponibles.</li>
              <li>Entregas desde Lima Este y opciones de suministro a granel.</li>
            </ul>

            <h3>Call to action</h3>
            <p>
              ¿Necesitas comprar thinner en Lima o evaluar solventes químicos en Perú? Solicita una cotización, pide una
              muestra y recibe asesoría técnica de QUIMPRO. <a className="font-semibold text-primary" href="https://wa.me/992360331">Cotiza por WhatsApp</a>.
            </p>

            <h3>Preguntas frecuentes</h3>
            <dl>
              <dt><strong>¿Dónde puedo comprar thinner en Lima?</strong></dt>
              <dd>En distribuidoras autorizadas o directamente con fabricantes que dispongan de stock local en Lima Este.</dd>

              <dt><strong>¿Qué thinner es mejor para pintura acrílica?</strong></dt>
              <dd>Utiliza un thinner acrílico formulado para el sistema; realiza siempre una prueba previa en panel.</dd>

              <dt><strong>¿Puedo pedir entrega a granel?</strong></dt>
              <dd>Sí, ofrecemos suministro a granel y programas de entrega para empresas industriales.</dd>
            </dl>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
