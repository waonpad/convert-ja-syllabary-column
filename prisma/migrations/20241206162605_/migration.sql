-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "converted" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
