/*
  Warnings:

  - You are about to drop the column `attachmentURL` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "attachmentURL";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "imageURL" TEXT;
