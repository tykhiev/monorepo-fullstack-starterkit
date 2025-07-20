import { pagination } from "prisma-extension-pagination";
import { PrismaClient } from "../generated/client/index.js";

const createPrismaClient = () => {
  return new PrismaClient().$extends(pagination());
};

type ExtendedPrismaClient = ReturnType<typeof createPrismaClient>;

const globalForPrisma = global as unknown as {
  prisma: ExtendedPrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
