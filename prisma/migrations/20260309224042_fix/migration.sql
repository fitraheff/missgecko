/*
  Warnings:

  - Made the column `visi` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `misi` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alamat` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `instagram` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tiktok` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tentangkami` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `whatsapp` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "visi" SET NOT NULL,
ALTER COLUMN "misi" SET NOT NULL,
ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "alamat" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "instagram" SET NOT NULL,
ALTER COLUMN "tiktok" SET NOT NULL,
ALTER COLUMN "tentangkami" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "whatsapp" SET NOT NULL;
