/*
  Warnings:

  - You are about to drop the column `projectNumber` on the `Issues` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Issues` DROP COLUMN `projectNumber`,
    ADD COLUMN `children` INTEGER NOT NULL DEFAULT 0;
