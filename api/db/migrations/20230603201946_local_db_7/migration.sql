/*
  Warnings:

  - Added the required column `requesterID` to the `Connection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Connection" ADD COLUMN     "requesterID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_requesterID_fkey" FOREIGN KEY ("requesterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
