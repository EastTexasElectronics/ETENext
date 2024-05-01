/*
  Warnings:

  - You are about to drop the column `contactMethod` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `contactReason` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "contactMethod",
DROP COLUMN "contactReason",
ALTER COLUMN "newsletter" SET DEFAULT true;
