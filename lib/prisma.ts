import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient(); // No need to pass provider or URL here
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
