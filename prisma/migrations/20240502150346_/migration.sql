/*
  Warnings:

  - Made the column `contactMethod` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "contactMethod" SET NOT NULL;
