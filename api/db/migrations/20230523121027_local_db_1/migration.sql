-- CreateEnum
CREATE TYPE "UITheme" AS ENUM ('SYSTEM', 'LIGHT', 'DARK');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('INVESTOR', 'STARTUP', 'ADMIN', 'GUEST');

-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "EducationBG" AS ENUM ('NONE', 'HIGH_SCHOOL', 'BACHELORS', 'MASTERS', 'PHD');

-- CreateEnum
CREATE TYPE "SizeRange" AS ENUM ('NONE', 'ONE_TO_THREE', 'THREE_TO_TEN', 'TEN_TO_TWENTY', 'MORE_THAN_TWENTY');

-- CreateEnum
CREATE TYPE "ReturnsRange" AS ENUM ('BREAKEVEN', 'TWO', 'THREE', 'FIVE', 'TEN', 'TWENTY', 'FIFTY', 'HUNDRED');

-- CreateEnum
CREATE TYPE "InvestorLevel" AS ENUM ('NOVICE', 'INTERMEDIATE', 'EXPERIENCED', 'PROFESSIONAL', 'SEASONED');

-- CreateEnum
CREATE TYPE "FundingStage" AS ENUM ('PRE_SEED', 'SEED', 'SERIES_A', 'SERIES_B', 'SERIES_C', 'SERIES_D', 'SERIES_E', 'LATER');

-- CreateEnum
CREATE TYPE "AmountRange" AS ENUM ('NONE', 'LESS_THAN_ONE_LAC', 'ONE_TO_FIVE_LACS', 'FIVE_TO_TWENTY_LACS', 'TWENTY_LACS_TO_ONE_CRORE', 'MORE_THAN_1_CRORE');

-- CreateEnum
CREATE TYPE "TimelineRange" AS ENUM ('LESS_THAN_SIX_MONTHS', 'SIX_TO_TWELVE_MONTHS', 'ONE_TO_TWO_YEARS', 'TWO_TO_FIVE_YEARS', 'FIVE_TO_TEN_YEARS', 'MORE_THAN_TEN_YEARS');

-- CreateEnum
CREATE TYPE "RiskApetite" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "StartupTeamSize" AS ENUM ('ONE', 'BETWEEN_1_AND_10', 'BETWEEN_10_AND_50', 'BETWEEN_50_AND_200', 'BETWEEN_200_AND_1000', 'OVER_1000');

-- CreateEnum
CREATE TYPE "InvestorPlatformGoal" AS ENUM ('INVESTING', 'CONNECTING', 'LEARNING', 'EXPLORING', 'CONSULTING', 'RESEARCHING');

-- CreateEnum
CREATE TYPE "ReferSource" AS ENUM ('WORD_OF_MOUTH', 'SOCIAL_MEDIA', 'BROWSING', 'REFERRAL', 'ADVERTISEMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "VisibilityLevel" AS ENUM ('PRIVATE', 'CONNECTIONS', 'FOLLOWERS', 'PUBLIC');

-- CreateEnum
CREATE TYPE "NotificationLevel" AS ENUM ('NONE', 'ONLY_CRITICAL', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('EDUCATION', 'HEALTHCARE', 'PHARMACEUTICALS', 'BANKING_AND_FINANCE', 'ENERGY', 'CONSUMER_GOODS', 'RETAIL_ECOMMERCE', 'REAL_ESTATE', 'FOOD_AND_BEVERAGE', 'IT', 'IOT', 'AGRICULTURE', 'MANUFACTURING', 'FASHION', 'MEDIA', 'GAMING', 'ENTERTAINMENT', 'TELECOM', 'LOGISTICS', 'TRANSPORTATION', 'AUTOMOTIVE', 'AVIATION', 'HEAVY_MACHINERY', 'CHEMICAL', 'CONSTRUCTION', 'DEFENCE', 'ELECTRONICS', 'FISHERIES', 'MINING', 'BIOTECHNOLOGY', 'LEGAL', 'SPORTS_AND_FITNESS', 'WASTE_MANAGEMENT', 'WATER_MANAGEMENT', 'TRAVEL_AND_HOSPITALITY', 'SECURITY', 'SOCIAL_SERVICE', 'MARKETING', 'HUMAN_RESOURCES', 'BUSINESS_MANAGEMENT', 'AUTOMATION');

-- CreateEnum
CREATE TYPE "OnlineBusiness" AS ENUM ('YES', 'SETTING_UP', 'PLANNED', 'NO');

-- CreateEnum
CREATE TYPE "UserRange" AS ENUM ('LESS_THAN_100', 'BETWEEN_100_AND_1000', 'BETWEEN_1000_AND_10000', 'BETWEEN_10000_AND_1_LAC', 'BETWEEN_1_LAC_AND_10_LACS', 'BETWEEEN_10_LACS_AND_1_CRORE', 'MORE_THAN_1_CRORE');

-- CreateEnum
CREATE TYPE "DistributionType" AS ENUM ('B2B', 'B2C', 'BOTH', 'OTHER');

-- CreateEnum
CREATE TYPE "MarketSize" AS ENUM ('LESS_THAN_10_CR', 'BETWEEN_10_AND_100_CR', 'BETWEEN_100_AND_1000_CR', 'BETWEEN_1000_AND_10000_CR', 'BETWEEN_10000_AND_1_LAC_CR', 'MORE_THAN_1_LAC_CR');

-- CreateEnum
CREATE TYPE "GrowthRate" AS ENUM ('LESS_THAN_5', 'BETWEEN_5_TO_10', 'BETWEEN_10_TO_20', 'BETWEEN_20_TO_50', 'BETWEEN_50_TO_100', 'MORE_THAN_100');

-- CreateEnum
CREATE TYPE "RevenueStreams" AS ENUM ('SELLING_GOODS_OR_SERVICES', 'RENTAL_OR_LEASING', 'ADS_OR_SPONSORS', 'COMMISSION_FEE', 'SUBSCRIPTION_OR_LICENSING', 'DONATIONS', 'PAY_PER_USE', 'OTHER');

-- CreateEnum
CREATE TYPE "CostHeads" AS ENUM ('MATERIAL', 'WAGES', 'RENT', 'INTEREST', 'EQUIPMENT', 'MARKETING', 'ADMIN', 'OTHER');

-- CreateEnum
CREATE TYPE "ShortTermPlan" AS ENUM ('EXPAND_GEOGRAPHICALLY', 'GO_FOR_IPO', 'HIRE_AND_EXPAND_TEAM', 'IMPROVE_PRODUCT_OR_SERVICE', 'BUILD_CUSTOMER_BASE', 'OTHER');

-- CreateEnum
CREATE TYPE "DecimalRange" AS ENUM ('LESS_THAN_HALF', 'BETWEEN_HALF_AND_ONE', 'BETWEEN_ONE_AND_TWO', 'MORE_THAN_TWO');

-- CreateEnum
CREATE TYPE "RevenueRange" AS ENUM ('LESS_THAN_10_LACS', 'BETWEEN_10_TO_20_LACS', 'BETWEEN_20_TO_50_LACS', 'BETWEEN_50_TO_100_LACS', 'BETWEEN_1_TO_10_CR', 'BETWEEN_10_TO_50_CR', 'BETWEEN_50_TO_100_CR', 'MORE_THAN_100_CRORE');

-- CreateEnum
CREATE TYPE "Margin" AS ENUM ('LOSS_OVER_50', 'LOSS_BETWEEN_20_AND_50', 'LOSS_LESS_THAN_20', 'PROFIT_LESS_THAN_20', 'PROFIT_BETWEEN_20_AND_50', 'PROFIT_OVER_50');

-- CreateEnum
CREATE TYPE "StartupPlatformGoal" AS ENUM ('RAISING_FUNDS', 'EXPLORING', 'CONNECTING', 'GETTING_ADVICE');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('CREATED', 'EXCEEDED', 'DISCARDED', 'CLOSED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "profilePicURL" TEXT,
    "lastActive" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mobile" TEXT,
    "otp" TEXT,
    "otpExpiresAt" TIMESTAMP(3),
    "webAuthnChallenge" TEXT,
    "type" "UserType" NOT NULL DEFAULT 'GUEST',
    "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
    "likedOnboarding" BOOLEAN,
    "messageVisibility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "activityVisbility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "profileVisbility" "VisibilityLevel" NOT NULL DEFAULT 'FOLLOWERS',
    "notificationLevel" "NotificationLevel" NOT NULL DEFAULT 'HIGH',
    "prefersTheme" "UITheme" NOT NULL DEFAULT 'SYSTEM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCredential" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "publicKey" BYTEA NOT NULL,
    "transports" TEXT,
    "counter" BIGINT NOT NULL,

    CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "gToken" TEXT NOT NULL,
    "type" "UserType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingContact" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "locationID" INTEGER NOT NULL,
    "linkedInURL" TEXT,
    "websiteURL" TEXT,
    "eduBG" "EducationBG" NOT NULL,
    "yearsOfWorkEx" "SizeRange" NOT NULL,
    "numberOfCompanies" "SizeRange" NOT NULL,
    "workedInSectors" "Sector"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT,
    "lat" DOUBLE PRECISION,
    "long" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorExperience" (
    "id" INTEGER NOT NULL,
    "workedInStartups" "SizeRange" NOT NULL,
    "foundedStartups" "SizeRange" NOT NULL,
    "investedStartups" "SizeRange" NOT NULL,
    "investedStages" "FundingStage"[],
    "investedAmountLacs" "AmountRange" NOT NULL,
    "successfulExits" "SizeRange" NOT NULL,
    "returnsReceived" "ReturnsRange"[],
    "investedSectors" "Sector"[],
    "investorLevel" "InvestorLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorObjective" (
    "id" INTEGER NOT NULL,
    "preferredAmountToInvest" "AmountRange" NOT NULL,
    "preferredFundingStages" "FundingStage"[],
    "preferredStartupTeamSizes" "StartupTeamSize"[],
    "preferredTimelines" "TimelineRange"[],
    "riskApetite" "RiskApetite" NOT NULL,
    "preferredSectors" "Sector"[],
    "preferredLocations" INTEGER[],
    "platformGoal" "InvestorPlatformGoal"[],
    "referSource" "ReferSource"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorObjective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "writeUp" TEXT NOT NULL,
    "dateIncorporated" TIMESTAMP(3) NOT NULL,
    "linkedInURL" TEXT,
    "websiteURL" TEXT,
    "locationID" INTEGER NOT NULL,
    "sectorCategoryID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectorCategory" (
    "id" SERIAL NOT NULL,
    "sector" "Sector" NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SectorCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupBackground" (
    "id" INTEGER NOT NULL,
    "valueProp" TEXT,
    "idea" TEXT,
    "whyThis" TEXT,
    "foundedBefore" "SizeRange" NOT NULL,
    "mission" TEXT,
    "vision" TEXT,
    "coreValues" TEXT[],
    "startupTeamSize" "StartupTeamSize" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupBackground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyPeople" (
    "id" SERIAL NOT NULL,
    "startupBackgroundID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "writeup" TEXT,
    "linkedInURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KeyPeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupBusiness" (
    "id" INTEGER NOT NULL,
    "numberUsers" "UserRange" NOT NULL,
    "numberCities" "SizeRange" NOT NULL,
    "distributionType" "DistributionType" NOT NULL,
    "partners" TEXT[],
    "customers" TEXT[],
    "workedWell" TEXT[],
    "challenges" TEXT[],
    "couldImprove" TEXT[],
    "currentActivities" TEXT[],
    "hasOnlineBusiness" "OnlineBusiness" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupMarket" (
    "id" INTEGER NOT NULL,
    "revenueStreams" "RevenueStreams"[],
    "costHeads" "CostHeads"[],
    "shortTermPlan" "ShortTermPlan" NOT NULL,
    "marketSizeInCr" "MarketSize" NOT NULL,
    "marketGrowthRate" "GrowthRate" NOT NULL,
    "trends" TEXT[],
    "opporunities" TEXT[],
    "threats" TEXT[],
    "competitors" TEXT[],
    "xFactor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupMarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupFinancials" (
    "id" INTEGER NOT NULL,
    "latestFundingStage" "FundingStage" NOT NULL,
    "latestValuationInCr" DOUBLE PRECISION,
    "currentRatio" "DecimalRange" NOT NULL,
    "debtEquityRatio" "DecimalRange" NOT NULL,
    "revenueLastFY" "RevenueRange" NOT NULL,
    "revenueGrowthRate" "GrowthRate" NOT NULL,
    "margin" "Margin" NOT NULL,
    "cashRunway" "TimelineRange" NOT NULL,
    "plansForUsingCash" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupFinancials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FundraisingRound" (
    "id" SERIAL NOT NULL,
    "startupFinancialsID" INTEGER NOT NULL,
    "fundingStage" "FundingStage" NOT NULL,
    "capitalRaisedInCr" DOUBLE PRECISION NOT NULL,
    "valuationInCr" DOUBLE PRECISION NOT NULL,
    "keyInvestors" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FundraisingRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapTable" (
    "id" SERIAL NOT NULL,
    "startupFinancialsID" INTEGER NOT NULL,
    "shareholderName" TEXT NOT NULL,
    "equityShare" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupObjective" (
    "id" INTEGER NOT NULL,
    "preferredInvestorLevels" "InvestorLevel"[],
    "preferredLocations" INTEGER[],
    "expectedTimeline" "TimelineRange" NOT NULL,
    "promisingReturns" "ReturnsRange" NOT NULL,
    "platformGoal" "StartupPlatformGoal"[],
    "referSource" "ReferSource"[],
    "pitchDeckURL" TEXT,
    "demoURL" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupObjective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "startupID" INTEGER NOT NULL,
    "capitalTargetLacs" DOUBLE PRECISION NOT NULL,
    "equityBeingIssued" DOUBLE PRECISION NOT NULL,
    "minTicketSizeLacs" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "maxTicketSizeLacs" DOUBLE PRECISION NOT NULL,
    "fundingStage" "FundingStage" NOT NULL,
    "maxInvestors" INTEGER NOT NULL,
    "willUseFundsFor" TEXT[],
    "needHelpWith" TEXT[],
    "status" "OfferStatus" NOT NULL DEFAULT 'CREATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

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
    "isHidden" BOOLEAN NOT NULL DEFAULT true,
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
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "posterID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "writeup" TEXT,
    "attachmentURL" TEXT,
    "visibility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "commenterID" INTEGER NOT NULL,
    "postID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectConversation" (
    "id" SERIAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
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
CREATE TABLE "_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
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
CREATE TABLE "_UserLikesPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserLikesComment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DM" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_webAuthnChallenge_key" ON "User"("webAuthnChallenge");

-- CreateIndex
CREATE UNIQUE INDEX "Location_state_city_key" ON "Location"("state", "city");

-- CreateIndex
CREATE UNIQUE INDEX "SectorCategory_sector_category_key" ON "SectorCategory"("sector", "category");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

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
CREATE UNIQUE INDEX "_UserLikesPost_AB_unique" ON "_UserLikesPost"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikesPost_B_index" ON "_UserLikesPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikesComment_AB_unique" ON "_UserLikesComment"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikesComment_B_index" ON "_UserLikesComment"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DM_AB_unique" ON "_DM"("A", "B");

-- CreateIndex
CREATE INDEX "_DM_B_index" ON "_DM"("B");

-- AddForeignKey
ALTER TABLE "UserCredential" ADD CONSTRAINT "UserCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorExperience" ADD CONSTRAINT "InvestorExperience_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorObjective" ADD CONSTRAINT "InvestorObjective_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupBackground" ADD CONSTRAINT "StartupBackground_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyPeople" ADD CONSTRAINT "KeyPeople_startupBackgroundID_fkey" FOREIGN KEY ("startupBackgroundID") REFERENCES "StartupBackground"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupBusiness" ADD CONSTRAINT "StartupBusiness_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupMarket" ADD CONSTRAINT "StartupMarket_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupFinancials" ADD CONSTRAINT "StartupFinancials_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundraisingRound" ADD CONSTRAINT "FundraisingRound_startupFinancialsID_fkey" FOREIGN KEY ("startupFinancialsID") REFERENCES "StartupFinancials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CapTable" ADD CONSTRAINT "CapTable_startupFinancialsID_fkey" FOREIGN KEY ("startupFinancialsID") REFERENCES "StartupFinancials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupObjective" ADD CONSTRAINT "StartupObjective_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_startupID_fkey" FOREIGN KEY ("startupID") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Post" ADD CONSTRAINT "Post_posterID_fkey" FOREIGN KEY ("posterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commenterID_fkey" FOREIGN KEY ("commenterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "_UserLikesPost" ADD CONSTRAINT "_UserLikesPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesPost" ADD CONSTRAINT "_UserLikesPost_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesComment" ADD CONSTRAINT "_UserLikesComment_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesComment" ADD CONSTRAINT "_UserLikesComment_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DM" ADD CONSTRAINT "_DM_A_fkey" FOREIGN KEY ("A") REFERENCES "DirectConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DM" ADD CONSTRAINT "_DM_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
