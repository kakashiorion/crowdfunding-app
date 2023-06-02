/*
  Warnings:

  - You are about to drop the column `isActive` on the `DirectConversation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DirectConversation" DROP COLUMN "isActive";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "profileVisbility" SET DEFAULT 'PUBLIC';
