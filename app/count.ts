import { prisma } from './src/lib/prisma';
prisma.strategy.count().then(c => {
  console.log('Total strategies:', c);
}).catch(e => {
  console.error(e);
}).finally(() => {
  prisma.$disconnect();
});
