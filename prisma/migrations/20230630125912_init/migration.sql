-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "description" VARCHAR(500),
    "price" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
