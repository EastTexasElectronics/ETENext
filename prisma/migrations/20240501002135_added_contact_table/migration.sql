-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT NOT NULL,
    "contactReason" TEXT NOT NULL,
    "contactMethod" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "newsletter" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
