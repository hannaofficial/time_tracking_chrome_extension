import prisma from '@/lib/prisma'

// the error for this execution was instead of " npx ts-node " I use " npx tsx prisma/seed.ts "
// I got help from stackoverflow current fucking model didn't able to solve the error I got from using npx ts-node they were recommending the same code over and over again

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alicenew21@example.com',
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

  //mthis is my first youtube video I am going to go live to test my aboility man.
