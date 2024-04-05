/*
  Warnings:

  - You are about to alter the column `status` on the `Issues` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Issues` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'NOT_STARTED';
