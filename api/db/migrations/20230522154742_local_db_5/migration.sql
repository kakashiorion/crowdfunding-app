/*
  Warnings:

  - The values [RAISED] on the enum `OfferStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `accepterID` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `requesterID` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `extended` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `timelineDays` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `isLoggedIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Bid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BidQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conversation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SuccessfulDeal` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `numberOfInvestors` on table `Offer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OfferStatus_new" AS ENUM ('CREATED', 'EXCEEDED', 'DISCARDED', 'CLOSED');
ALTER TABLE "Offer" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Offer" ALTER COLUMN "status" TYPE "OfferStatus_new" USING ("status"::text::"OfferStatus_new");
ALTER TYPE "OfferStatus" RENAME TO "OfferStatus_old";
ALTER TYPE "OfferStatus_new" RENAME TO "OfferStatus";
DROP TYPE "OfferStatus_old";
ALTER TABLE "Offer" ALTER COLUMN "status" SET DEFAULT 'CREATED';
COMMIT;

-- DropForeignKey
ALTER TABLE "Bid" DROP CONSTRAINT "Bid_investorID_fkey";

-- DropForeignKey
ALTER TABLE "Bid" DROP CONSTRAINT "Bid_offerID_fkey";

-- DropForeignKey
ALTER TABLE "BidQuestion" DROP CONSTRAINT "BidQuestion_bidID_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_accepterID_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_requesterID_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_conversationResponderID_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_conversationStarterID_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_conversationID_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiverID_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderID_fkey";

-- DropForeignKey
ALTER TABLE "_SuccessfulDeal" DROP CONSTRAINT "_SuccessfulDeal_A_fkey";

-- DropForeignKey
ALTER TABLE "_SuccessfulDeal" DROP CONSTRAINT "_SuccessfulDeal_B_fkey";

-- DropIndex
DROP INDEX "Connection_requesterID_accepterID_key";

-- DropIndex
DROP INDEX "Investor_id_key";

-- DropIndex
DROP INDEX "InvestorExperience_id_key";

-- DropIndex
DROP INDEX "InvestorObjective_id_key";

-- DropIndex
DROP INDEX "Startup_id_key";

-- DropIndex
DROP INDEX "StartupBackground_id_key";

-- DropIndex
DROP INDEX "StartupBusiness_id_key";

-- DropIndex
DROP INDEX "StartupFinancials_id_key";

-- DropIndex
DROP INDEX "StartupMarket_id_key";

-- DropIndex
DROP INDEX "StartupObjective_id_key";

-- DropIndex
DROP INDEX "User_mobile_key";

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "accepterID",
DROP COLUMN "requesterID";

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "extended",
DROP COLUMN "timelineDays",
ALTER COLUMN "numberOfInvestors" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isLoggedIn",
DROP COLUMN "lastLogin",
ADD COLUMN     "lastActive" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "mobile" DROP NOT NULL;

-- DropTable
DROP TABLE "Bid";

-- DropTable
DROP TABLE "BidQuestion";

-- DropTable
DROP TABLE "Conversation";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "_SuccessfulDeal";

-- DropEnum
DROP TYPE "BidStatus";

-- CreateTable
CREATE TABLE "OfferRoom" (
    "id" INTEGER NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "passcode" TEXT,
    "resourceLinks" TEXT[],
    "joinLimit" INTEGER NOT NULL DEFAULT 50,
    "timelineDays" INTEGER NOT NULL DEFAULT 15,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfferRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NegotiationTable" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NegotiationTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deal" (
    "id" SERIAL NOT NULL,
    "offerID" INTEGER NOT NULL,
    "investorID" INTEGER NOT NULL,
    "fundingAmountLacs" DOUBLE PRECISION NOT NULL,
    "isJoining" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferQuestion" (
    "id" SERIAL NOT NULL,
    "offerRoomID" INTEGER NOT NULL,
    "askerID" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answered" BOOLEAN NOT NULL DEFAULT false,
    "answer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfferQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectConversation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectMessage" (
    "id" SERIAL NOT NULL,
    "conversationID" INTEGER NOT NULL,
    "senderID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentURL" TEXT,
    "unread" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomGroupMessage" (
    "id" SERIAL NOT NULL,
    "offerRoomId" INTEGER NOT NULL,
    "senderID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoomGroupMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NegotiationMessage" (
    "id" SERIAL NOT NULL,
    "negotiationTableID" INTEGER NOT NULL,
    "senderID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NegotiationMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Connection" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Participant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Waiting" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Kicked" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Negotiator" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DM" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Connection_AB_unique" ON "_Connection"("A", "B");

-- CreateIndex
CREATE INDEX "_Connection_B_index" ON "_Connection"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Participant_AB_unique" ON "_Participant"("A", "B");

-- CreateIndex
CREATE INDEX "_Participant_B_index" ON "_Participant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Waiting_AB_unique" ON "_Waiting"("A", "B");

-- CreateIndex
CREATE INDEX "_Waiting_B_index" ON "_Waiting"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Kicked_AB_unique" ON "_Kicked"("A", "B");

-- CreateIndex
CREATE INDEX "_Kicked_B_index" ON "_Kicked"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Negotiator_AB_unique" ON "_Negotiator"("A", "B");

-- CreateIndex
CREATE INDEX "_Negotiator_B_index" ON "_Negotiator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DM_AB_unique" ON "_DM"("A", "B");

-- CreateIndex
CREATE INDEX "_DM_B_index" ON "_DM"("B");

-- AddForeignKey
ALTER TABLE "OfferRoom" ADD CONSTRAINT "OfferRoom_id_fkey" FOREIGN KEY ("id") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NegotiationTable" ADD CONSTRAINT "NegotiationTable_id_fkey" FOREIGN KEY ("id") REFERENCES "OfferRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_offerID_fkey" FOREIGN KEY ("offerID") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_investorID_fkey" FOREIGN KEY ("investorID") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferQuestion" ADD CONSTRAINT "OfferQuestion_offerRoomID_fkey" FOREIGN KEY ("offerRoomID") REFERENCES "OfferRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferQuestion" ADD CONSTRAINT "OfferQuestion_askerID_fkey" FOREIGN KEY ("askerID") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_conversationID_fkey" FOREIGN KEY ("conversationID") REFERENCES "DirectConversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomGroupMessage" ADD CONSTRAINT "RoomGroupMessage_offerRoomId_fkey" FOREIGN KEY ("offerRoomId") REFERENCES "OfferRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomGroupMessage" ADD CONSTRAINT "RoomGroupMessage_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NegotiationMessage" ADD CONSTRAINT "NegotiationMessage_negotiationTableID_fkey" FOREIGN KEY ("negotiationTableID") REFERENCES "NegotiationTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NegotiationMessage" ADD CONSTRAINT "NegotiationMessage_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Connection" ADD CONSTRAINT "_Connection_A_fkey" FOREIGN KEY ("A") REFERENCES "Connection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Connection" ADD CONSTRAINT "_Connection_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Participant" ADD CONSTRAINT "_Participant_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Participant" ADD CONSTRAINT "_Participant_B_fkey" FOREIGN KEY ("B") REFERENCES "OfferRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Waiting" ADD CONSTRAINT "_Waiting_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Waiting" ADD CONSTRAINT "_Waiting_B_fkey" FOREIGN KEY ("B") REFERENCES "OfferRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Kicked" ADD CONSTRAINT "_Kicked_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Kicked" ADD CONSTRAINT "_Kicked_B_fkey" FOREIGN KEY ("B") REFERENCES "OfferRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Negotiator" ADD CONSTRAINT "_Negotiator_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Negotiator" ADD CONSTRAINT "_Negotiator_B_fkey" FOREIGN KEY ("B") REFERENCES "NegotiationTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DM" ADD CONSTRAINT "_DM_A_fkey" FOREIGN KEY ("A") REFERENCES "DirectConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DM" ADD CONSTRAINT "_DM_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
