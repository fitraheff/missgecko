/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `wa` on the `Company` table. All the data in the column will be lost.
  - The `id` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "wa",
ADD COLUMN     "name" VARCHAR(100),
ADD COLUMN     "whatsapp" VARCHAR(50),
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "visi" DROP NOT NULL,
ALTER COLUMN "misi" DROP NOT NULL,
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "alamat" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "instagram" DROP NOT NULL,
ALTER COLUMN "tiktok" DROP NOT NULL,
ALTER COLUMN "tentangkami" DROP NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
