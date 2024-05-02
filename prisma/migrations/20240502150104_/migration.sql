-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "contactMethod" TEXT,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "newsletter" DROP DEFAULT;
