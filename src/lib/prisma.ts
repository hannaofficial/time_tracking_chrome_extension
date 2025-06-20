// src/lib/prisma.ts
// this code is used to manage the Prisma Client instance insure that it is not duplicated
import { PrismaClient } from '../generated/client';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    // Optional: Log Prisma operations during development
    // log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : [],
    log: ['query'],
  });

console.log('Prisma Client initialized');

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;