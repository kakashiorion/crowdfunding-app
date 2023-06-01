-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_locationID_fkey" FOREIGN KEY ("locationID") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_locationID_fkey" FOREIGN KEY ("locationID") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_sectorCategoryID_fkey" FOREIGN KEY ("sectorCategoryID") REFERENCES "SectorCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
