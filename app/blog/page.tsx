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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --ink: #1a1410;
          --ink-muted: #5a4f46;
          --ink-light: #9c8f85;
          --paper: #faf8f5;
          --paper-warm: #f4f0ea;
          --accent: #1a56db;
          --accent-muted: #dbeafe;
          --rule: #d4cdc5;
          --gold: #3b82f6;
        }

        .blog-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Source Serif 4', Georgia, serif;
        }

        /* ── MASTHEAD ── */
        .masthead {
          border-bottom: 3px double var(--rule);
          padding: 28px 0 0;
          background: var(--paper);
        }
        .masthead-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .masthead-top {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .logo-wrap {
          border: 2px solid var(--ink);
          padding: 6px;
          flex-shrink: 0;
        }
        .brand-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 28px;
          letter-spacing: 0.12em;
          color: var(--ink);
          text-transform: uppercase;
        }
        .brand-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-top: 2px;
        }
        .section-bar {
          background: var(--ink);
          color: var(--paper);
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 7px 32px;
          max-width: none;
        }

        /* ── HERO ── */
        .hero {
          background: var(--paper-warm);
          border-bottom: 1px solid var(--rule);
          padding: 64px 32px 52px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(200,66,42,0.05) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 50%);
        }
        .hero-kicker {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          border-top: 1px solid var(--accent);
          border-bottom: 1px solid var(--accent);
          padding: 4px 12px;
          margin-bottom: 28px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.1;
          max-width: 760px;
          margin: 0 auto 20px;
          color: var(--ink);
        }
        .hero h1 em {
          font-style: italic;
          color: var(--accent);
        }
        .hero-deck {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.65;
          max-width: 580px;
          margin: 0 auto 36px;
          color: var(--ink-muted);
        }
        .hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: var(--ink-light);
        }
        .hero-meta span { display: flex; align-items: center; gap: 6px; }
        .meta-dot {
          width: 3px; height: 3px;
          background: var(--rule);
          border-radius: 50%;
        }

        /* ── LAYOUT ── */
        .content-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 32px;
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 720px) {
          .content-wrap { grid-template-columns: 1fr; gap: 48px; }
          .sidebar { order: -1; }
        }

        /* ── ARTICLE PROSE ── */
        .article-prose p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--ink);
          margin: 0 0 24px;
        }
        .article-prose p:first-of-type::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 900;
          line-height: 0.75;
          float: left;
          margin: 8px 10px 0 0;
          color: var(--accent);
        }
        .article-prose h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 30px;
          line-height: 1.2;
          color: var(--ink);
          margin: 56px 0 20px;
          padding-top: 24px;
          border-top: 2px solid var(--ink);
        }
        .article-prose h3 {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 40px 0 16px;
        }
        .article-prose strong {
          font-weight: 600;
          color: var(--ink);
        }
        .article-prose a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Pull quote */
        .pull-quote {
          border-left: 4px solid var(--accent);
          background: var(--paper-warm);
          padding: 24px 28px;
          margin: 40px 0;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.5;
          color: var(--ink);
        }

        /* Checklist */
        .checklist {
          list-style: none;
          padding: 0;
          margin: 24px 0;
          border: 1px solid var(--rule);
        }
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--rule);
          font-size: 16px;
          line-height: 1.6;
        }
        .checklist li:last-child { border-bottom: none; }
        .check-num {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 22px;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
          width: 24px;
        }

        /* Feature list */
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--rule);
          font-size: 16px;
          line-height: 1.6;
        }
        .feature-list li::before {
          content: '→';
          color: var(--accent);
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* FAQ */
        .faq-item {
          border-top: 1px solid var(--rule);
          padding: 24px 0;
        }
        .faq-q {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 18px;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .faq-a {
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-muted);
          margin: 0;
        }

        /* Divider ornament */
        .divider {
          text-align: center;
          color: var(--gold);
          font-size: 18px;
          letter-spacing: 0.5em;
          margin: 48px 0;
          user-select: none;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          position: sticky;
          top: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .sidebar-card {
          border: 1px solid var(--rule);
          background: var(--paper-warm);
          padding: 24px;
        }
        .sidebar-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--ink-light);
          border-bottom: 1px solid var(--rule);
          padding-bottom: 12px;
          margin-bottom: 16px;
        }
        .sidebar-card p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-muted);
          margin: 0 0 16px;
        }
        .sidebar-stat {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1px dotted var(--rule);
        }
        .stat-row:last-child { border-bottom: none; padding-bottom: 0; }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: var(--ink-muted);
        }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--accent);
        }
        .cta-btn {
          display: block;
          width: 100%;
          background: var(--accent);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          padding: 14px 20px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cta-btn:hover { background: #a53520; }
        .cta-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: var(--ink-light);
          text-align: center;
          margin-top: 8px !important;
        }

        /* ── INLINE CTA BANNER ── */
        .cta-banner {
          background: var(--ink);
          color: var(--paper);
          padding: 40px;
          margin: 48px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          content: '';
          position: absolute;
          top: -1px; left: 40px; right: 40px;
          height: 3px;
          background: var(--gold);
        }
        .cta-banner h4 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 24px;
          margin: 0 0 10px;
          color: var(--paper);
        }
        .cta-banner p {
          font-size: 15px;
          color: rgba(250,248,245,0.7);
          margin: 0 0 24px;
        }
        .cta-banner a {
          display: inline-block;
          background: var(--accent);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 28px;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .cta-banner a:hover {
          background: transparent;
          border-color: var(--paper);
          color: var(--paper);
        }

        /* ── MAIN ── */
        main { flex: 1; }
      `}</style>

      <div className="blog-root">
        <Header />

        {/* ── MASTHEAD ── */}
        <div className="masthead">
          <div className="masthead-inner">
            <div className="masthead-top">
              <div className="logo-wrap">
                <Image src="/logo.jpg" alt="QUIMPRO" width={60} height={60} />
              </div>
              <div>
                <div className="brand-name">QUIMPRO</div>
                <div className="brand-tagline">Soluciones químicas industriales · Lima, Perú</div>
              </div>
            </div>
          </div>
          <div className="section-bar">Guías técnicas · Solventes &amp; Recubrimientos</div>
        </div>

        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-kicker">Guía de compra · Edición Lima 2025</div>
          <h1>
            ¿Dónde comprar <em>thinner</em> en Lima?<br />
            La guía definitiva
          </h1>
          <p className="hero-deck">
            Criterios técnicos, checklist de compra y por qué el proveedor correcto
            marca la diferencia entre un acabado perfecto y un reproceso costoso.
          </p>
          <div className="hero-meta">
            <span>Por el equipo técnico de QUIMPRO</span>
            <span className="meta-dot" />
            <span>8 min de lectura</span>
            <span className="meta-dot" />
            <span>Talleres · Ferreterías · Industria</span>
          </div>
        </div>

        {/* ── BODY ── */}
        <main>
          <div className="content-wrap">

            {/* ── ARTICLE ── */}
            <article className="article-prose">

              <p>
                Para talleres, ferreterías y empresas industriales en Lima, elegir y <strong>comprar thinner en Lima</strong> no
                es solo cuestión de precio: es asegurar calidad, compatibilidad con el sistema de pintura y seguridad operativa.
                Un producto mal especificado puede causar problemas de nivelación, pérdidas de brillo y paros costosos en
                la producción. En esta guía encontrarás los criterios técnicos que necesitas para tomar la mejor decisión.
              </p>

              <div className="pull-quote">
                "Un thinner mal especificado no solo arruina el acabado — puede costarte horas de reproceso y material desperdiciado."
              </div>

              <h2>Tipos de solventes y sus usos</h2>

              <p>
                Los solventes más habituales en el mercado peruano son el <strong>thinner acrílico</strong> (para pinturas y
                lacas de base acrílica), el <strong>aguarrás mineral</strong> (para esmaltes y barnices base aceite),
                el <strong>alcohol isopropílico</strong> IPA 70% o 99% para limpieza y desengrase electrónico,
                y los <strong>solventes industriales a medida</strong> como mezclas de cetonas e hidrocarburos.
              </p>
              <p>
                Cada tipo tiene propiedades determinantes: poder de disolución, velocidad de evaporación,
                residuos al secar y compatibilidad con resinas. Conocer esas propiedades antes de comprar
                evita errores costosos.
              </p>

              <h3>Factores técnicos a evaluar</h3>

              <ul className="feature-list">
                <li><span><strong>Poder solvente:</strong> determina la capacidad de disolución de la pintura o la suciedad objetivo.</span></li>
                <li><span><strong>Velocidad de evaporación:</strong> afecta directamente la nivelación del film y la aparición de marcas.</span></li>
                <li><span><strong>Residuos secos:</strong> los solventes puros dejan menos residuos; crítico en electrónica y acabados finos.</span></li>
                <li><span><strong>Compatibilidad de sistema:</strong> verifica que el solvente sea apto para acrílico, poliuretano o epóxico según tu proceso.</span></li>
              </ul>

              <div className="divider">✦ ✦ ✦</div>

              <h2>Checklist antes de comprar</h2>

              <ol className="checklist">
                <li>
                  <span className="check-num">1</span>
                  <span>Exige la <strong>ficha técnica</strong> y la <strong>hoja de seguridad (MSDS)</strong> por número de lote — no por versión genérica.</span>
                </li>
                <li>
                  <span className="check-num">2</span>
                  <span>Solicita muestras para prueba en panel bajo las condiciones reales de aplicación de tu proceso.</span>
                </li>
                <li>
                  <span className="check-num">3</span>
                  <span>Verifica certificaciones del proveedor.</span>
                </li>
                <li>
                  <span className="check-num">4</span>
                  <span>Evalúa logística: entregas en Lima Este, envío a provincia y opciones de suministro a granel según tu volumen.</span>
                </li>
              </ol>

              <h3>Por qué comprar a un proveedor local en Lima Este</h3>

              <p>
                Trabajar con un distribuidor con presencia local reduce tiempos de entrega, elimina costos de flete
                internacional y acorta los plazos de respuesta ante un problema técnico. Para talleres y plantas de
                producción, recibir soporte in situ y muestras en 24 horas puede ser la diferencia entre mantener
                el flujo productivo o enfrentar un paro de línea.
              </p>

              <h2>Caso práctico: thinner acrílico para taller automotriz</h2>

              <p>
                En repintado automotriz, un <strong>thinner acrílico de alta calidad</strong> favorece el flujo y la
                nivelación del film. La mezcla exacta varía según la pintura base y la temperatura ambiente, pero
                siempre es recomendable seguir la ficha técnica del fabricante y realizar pruebas en panel antes
                de aplicar en el vehículo. El uso de un thinner incorrecto puede causar ampollas, nubes de disolvente
                o pérdida de brillo prematuro.
              </p>

              <div className="cta-banner">
                <h4>¿Listo para cotizar?</h4>
                <p>Solicita muestras y asesoría técnica sin compromiso. Respondemos en menos de 2 horas.</p>
                <a href="https://wa.me/992360331">Cotizar por WhatsApp →</a>
              </div>

              <h3>Certificaciones y seguridad</h3>

              <p>
                Trabajar con proveedores certificados bajo ISO 9001:2015 aporta trazabilidad y procesos
                documentados en cada lote. Asegúrate de recibir las hojas MSDS, las recomendaciones de
                almacenamiento con ventilación adecuada y EPP, y las instrucciones de transporte para cumplir
                la normativa local vigente y evitar riesgos innecesarios.
              </p>

              <h3>Por qué más de 20 años respaldan a QUIMPRO</h3>

              <ul className="feature-list">
                <li><span>Más de dos décadas en formulación y suministro de solventes industriales en Perú.</span></li>
                <li><span>Asesoría técnica especializada para seleccionar el thinner o solvente exacto para tu proceso.</span></li>
                <li><span>Fichas técnicas y hojas de seguridad disponibles.</span></li>
                <li><span>Despacho desde Lima Este y programa de entregas para empresas industriales.</span></li>
              </ul>

              <div className="divider">✦ ✦ ✦</div>

              <h2>Preguntas frecuentes</h2>

              <div className="faq-item">
                <div className="faq-q">¿Dónde puedo comprar thinner en Lima?</div>
                <p className="faq-a">En distribuidoras autorizadas o directamente con fabricantes que dispongan de stock local en Lima Este. Verifica siempre que cuenten con documentación técnica por lote.</p>
              </div>
              <div className="faq-item">
                <div className="faq-q">¿Qué thinner es mejor para pintura acrílica?</div>
                <p className="faq-a">Utiliza un thinner acrílico formulado específicamente para el sistema; la velocidad de evaporación debe ajustarse a la temperatura del entorno. Realiza siempre una prueba previa en panel.</p>
              </div>

            </article>

            {/* ── SIDEBAR ── */}
            <aside className="sidebar">

              <div className="sidebar-card">
                <div className="sidebar-card-title">QUIMPRO en números</div>
                <div className="sidebar-stat">
                  <div className="stat-row">
                    <span className="stat-label">Años de experiencia</span>
                    <span className="stat-value">20+</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Certificación</span>
                    <span className="stat-value" style={{fontSize:'14px', fontFamily:'DM Sans, sans-serif', letterSpacing:'0.05em'}}>ISO 9001:2015</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Cobertura</span>
                    <span className="stat-value" style={{fontSize:'14px', fontFamily:'DM Sans, sans-serif'}}>Lima + Nacional</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-card-title">Cotiza ahora</div>
                <p>Recibe atención técnica personalizada y muestras en Lima.</p>
                <a className="cta-btn" href="https://wa.me/992360331">
                  Escribir por WhatsApp
                </a>
                <p className="cta-note">Respuesta en menos de 2 horas</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-card-title">Lo que recibirás</div>
                <ul className="feature-list" style={{margin: 0}}>
                  <li><span>Ficha técnica </span></li>
                  <li><span>Hoja de seguridad MSDS</span></li>
                  <li><span>Asesoría técnica gratuita</span></li>
                  <li><span>Muestra de producto</span></li>
                </ul>
              </div>

            </aside>

          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}