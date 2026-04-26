import { Award, Clock, Package, ShieldCheck, Download, FileText } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "20+",
    label: "Años de experiencia",
    description: "Atendiendo a la industria desde 2002",
  },
  {
    icon: Package,
    value: "20+",
    label: "Productos químicos",
    description: "Amplia gama de solventes de calidad",
  },
  {
    icon: ShieldCheck,
    value: "ISO 9001:2015",
    label: "Certificación",
    description: "Sistema de gestión de calidad",
  },
]

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-6">
              <Award className="h-4 w-4" />
              Sobre nosotros
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              Nuestra experiencia nos respalda
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">QUIMPRO</strong> es una empresa química peruana con sólida presencia en el mercado desde 2002, especializada en la fabricación, comercialización y distribución de solventes químicos de alta calidad para los sectores industrial, automotriz y comercial.
              </p>
              <p>
                Nos caracterizamos por nuestro compromiso con la calidad, la seguridad y la mejora continua. Nuestros productos se desarrollan bajo estrictos estándares de calidad para garantizar confiabilidad y desempeño óptimo.
              </p>
              <p>
                Brindamos un servicio personalizado y soporte técnico especializado, convirtiéndonos en un aliado estratégico para los proyectos de nuestros clientes.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Alcance y Políticas de la Empresa</h3>
              <div className="grid gap-3">
                <a 
                  href="/REG-GG-004 - ALCANCE DEL SIG (1).pdf" 
                  download
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Alcance de la Empresa</div>
                    <div className="text-sm text-muted-foreground">Descarga nuestro PDF con información sobre el alcance de nuestros servicios</div>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground" />
                </a>
                
                <a 
                  href="/POL-SIG-001 POLITICA SIG.pdf" 
                  download
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Política de la Empresa</div>
                    <div className="text-sm text-muted-foreground">Descarga nuestro PDF con las políticas de la empresa</div>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-4 rounded-xl bg-background p-6 shadow-sm border border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-medium text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
