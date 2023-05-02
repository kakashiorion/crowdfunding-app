/*
  Warnings:

  - You are about to drop the `InvestorPreferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StartupPreferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "VisibilityLevel" ADD VALUE 'FOLLOWERS';

-- DropForeignKey
ALTER TABLE "InvestorPreferences" DROP CONSTRAINT "InvestorPreferences_id_fkey";

-- DropForeignKey
ALTER TABLE "StartupPreferences" DROP CONSTRAINT "StartupPreferences_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activityVisbility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
ADD COLUMN     "financialVisbility" "VisibilityLevel" NOT NULL DEFAULT 'CONNECTIONS',
ADD COLUMN     "notificationLevel" "NotificationLevel" NOT NULL DEFAULT 'HIGH',
ADD COLUMN     "prefersLightTheme" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "profileHiddenFromStrangers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "receiveMessageFromStrangers" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "InvestorPreferences";

-- DropTable
DROP TABLE "StartupPreferences";
