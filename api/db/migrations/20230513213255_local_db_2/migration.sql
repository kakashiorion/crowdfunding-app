/*
  Warnings:

  - You are about to drop the column `startupID` on the `FundraisingRound` table. All the data in the column will be lost.
  - Added the required column `startupFinancialsID` to the `FundraisingRound` table without a default value. This is not possible if the table is not empty.
  - Made the column `eduBG` on table `Investor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `yearsOfWorkEx` on table `Investor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberOfCompanies` on table `Investor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `investedAmountLacs` on table `InvestorExperience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `successfulExits` on table `InvestorExperience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `preferredAmountToInvest` on table `InvestorObjective` required. This step will fail if there are existing NULL values in that column.
  - Made the column `riskApetite` on table `InvestorObjective` required. This step will fail if there are existing NULL values in that column.
  - Made the column `foundedBefore` on table `StartupBackground` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startupTeamSize` on table `StartupBackground` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberUsers` on table `StartupBusiness` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberCities` on table `StartupBusiness` required. This step will fail if there are existing NULL values in that column.
  - Made the column `distributionType` on table `StartupBusiness` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hasOnlineBusiness` on table `StartupBusiness` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latestFundingStage` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `currentRatio` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `debtEquityRatio` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `revenueLastFY` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `revenueGrowthRate` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `margin` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cashRunway` on table `StartupFinancials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shortTermPlan` on table `StartupMarket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marketSizeInCr` on table `StartupMarket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marketGrowthRate` on table `StartupMarket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `expectedTimeline` on table `StartupObjective` required. This step will fail if there are existing NULL values in that column.
  - Made the column `promisingReturns` on table `StartupObjective` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "FundraisingRound" DROP CONSTRAINT "FundraisingRound_startupID_fkey";

-- AlterTable
ALTER TABLE "FundraisingRound" DROP COLUMN "startupID",
ADD COLUMN     "startupFinancialsID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Investor" ALTER COLUMN "eduBG" SET NOT NULL,
ALTER COLUMN "yearsOfWorkEx" SET NOT NULL,
ALTER COLUMN "numberOfCompanies" SET NOT NULL;

-- AlterTable
ALTER TABLE "InvestorExperience" ALTER COLUMN "investedAmountLacs" SET NOT NULL,
ALTER COLUMN "successfulExits" SET NOT NULL;

-- AlterTable
ALTER TABLE "InvestorObjective" ALTER COLUMN "preferredAmountToInvest" SET NOT NULL,
ALTER COLUMN "riskApetite" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupBackground" ALTER COLUMN "foundedBefore" SET NOT NULL,
ALTER COLUMN "startupTeamSize" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupBusiness" ALTER COLUMN "numberUsers" SET NOT NULL,
ALTER COLUMN "numberCities" SET NOT NULL,
ALTER COLUMN "distributionType" SET NOT NULL,
ALTER COLUMN "hasOnlineBusiness" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupFinancials" ALTER COLUMN "latestFundingStage" SET NOT NULL,
ALTER COLUMN "currentRatio" SET NOT NULL,
ALTER COLUMN "debtEquityRatio" SET NOT NULL,
ALTER COLUMN "revenueLastFY" SET NOT NULL,
ALTER COLUMN "revenueGrowthRate" SET NOT NULL,
ALTER COLUMN "margin" SET NOT NULL,
ALTER COLUMN "cashRunway" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupMarket" ALTER COLUMN "shortTermPlan" SET NOT NULL,
ALTER COLUMN "marketSizeInCr" SET NOT NULL,
ALTER COLUMN "marketGrowthRate" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupObjective" ALTER COLUMN "expectedTimeline" SET NOT NULL,
ALTER COLUMN "promisingReturns" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "hashedPassword" SET DEFAULT '',
ALTER COLUMN "salt" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "FundraisingRound" ADD CONSTRAINT "FundraisingRound_startupFinancialsID_fkey" FOREIGN KEY ("startupFinancialsID") REFERENCES "StartupFinancials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
