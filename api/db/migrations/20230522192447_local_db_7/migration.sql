/*
  Warnings:

  - You are about to drop the column `numberOfInvestors` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `maxInvestors` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NegotiationTable" ADD COLUMN     "isHidden" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "numberOfInvestors",
ADD COLUMN     "maxInvestors" INTEGER NOT NULL;
