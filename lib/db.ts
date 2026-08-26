import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

// Si DATABASE_URL no esta configurado (por ejemplo, en produccion antes de
// terminar de conectar la base de datos), no se instancia PrismaClient para
// evitar que el modulo falle al cargarse. products-db.ts revisa `prisma`
// antes de usarlo y cae a la data estatica en ese caso.
export const prisma: PrismaClient | null = process.env.DATABASE_URL
  ? globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
  : null

if (process.env.NODE_ENV !== "production" && prisma) globalForPrisma.prisma = prisma
