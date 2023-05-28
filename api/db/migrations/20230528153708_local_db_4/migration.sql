/*
  Warnings:

  - The values [PHARMACEUTICALS,CONSUMER_GOODS,RETAIL_ECOMMERCE,FOOD_AND_BEVERAGE,IT,IOT,FASHION,MEDIA,GAMING,ENTERTAINMENT,TELECOM,LOGISTICS,AUTOMOTIVE,AVIATION,HEAVY_MACHINERY,CHEMICAL,CONSTRUCTION,DEFENCE,ELECTRONICS,FISHERIES,MINING,BIOTECHNOLOGY,LEGAL,SPORTS_AND_FITNESS,WASTE_MANAGEMENT,WATER_MANAGEMENT,TRAVEL_AND_HOSPITALITY,SECURITY,SOCIAL_SERVICE,MARKETING,HUMAN_RESOURCES,BUSINESS_MANAGEMENT,AUTOMATION] on the enum `Sector` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Sector_new" AS ENUM ('EDUCATION', 'HEALTHCARE', 'BANKING_AND_FINANCE', 'ENERGY', 'RETAIL', 'REAL_ESTATE', 'INFORMATION_TECHNOLOGY', 'SCIENCE_AND_TECHNOLOGY', 'AGRICULTURE', 'MANUFACTURING', 'MEDIA_AND_ENTERTAINMENT', 'TELECOMMUNICATIONS', 'TRANSPORTATION', 'FOOD_AND_TOURISM', 'OTHER');
ALTER TABLE "Investor" ALTER COLUMN "workedInSectors" TYPE "Sector_new"[] USING ("workedInSectors"::text::"Sector_new"[]);
ALTER TABLE "InvestorExperience" ALTER COLUMN "investedSectors" TYPE "Sector_new"[] USING ("investedSectors"::text::"Sector_new"[]);
ALTER TABLE "InvestorObjective" ALTER COLUMN "preferredSectors" TYPE "Sector_new"[] USING ("preferredSectors"::text::"Sector_new"[]);
ALTER TABLE "SectorCategory" ALTER COLUMN "sector" TYPE "Sector_new" USING ("sector"::text::"Sector_new");
ALTER TYPE "Sector" RENAME TO "Sector_old";
ALTER TYPE "Sector_new" RENAME TO "Sector";
DROP TYPE "Sector_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "hashedPassword" DROP DEFAULT,
ALTER COLUMN "salt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "_UserBlocked" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserSavedPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserBlocked_AB_unique" ON "_UserBlocked"("A", "B");

-- CreateIndex
CREATE INDEX "_UserBlocked_B_index" ON "_UserBlocked"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserSavedPost_AB_unique" ON "_UserSavedPost"("A", "B");

-- CreateIndex
CREATE INDEX "_UserSavedPost_B_index" ON "_UserSavedPost"("B");

-- AddForeignKey
ALTER TABLE "_UserBlocked" ADD CONSTRAINT "_UserBlocked_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserBlocked" ADD CONSTRAINT "_UserBlocked_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSavedPost" ADD CONSTRAINT "_UserSavedPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserSavedPost" ADD CONSTRAINT "_UserSavedPost_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
