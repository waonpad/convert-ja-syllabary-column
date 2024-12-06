import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const processSeed = async () => {};

const main = async () => {
  try {
    await processSeed();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

main();
