-- AlterTable
ALTER TABLE `Issues` ADD COLUMN `assignedTo` VARCHAR(255) NOT NULL DEFAULT 'no one';
