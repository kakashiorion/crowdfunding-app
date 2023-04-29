-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('INVESTOR', 'STARTUP', 'ADMIN', 'GUEST');

-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "EducationBG" AS ENUM ('HIGH_SCHOOL', 'BACHELORS', 'MASTERS', 'PHD');

-- CreateEnum
CREATE TYPE "InvestorLevel" AS ENUM ('NOVICE', 'INTERMEDIATE', 'EXPERIENCED', 'PROFESSIONAL', 'SEASONED');

-- CreateEnum
CREATE TYPE "FundingStage" AS ENUM ('SEED', 'SERIES_A', 'SERIES_B', 'SERIES_C', 'SERIES_D', 'SERIES_E', 'SERIES_F', 'LATER');

-- CreateEnum
CREATE TYPE "AmountRange" AS ENUM ('LESS_THAN_1_LAC', 'LACS_1_TO_5', 'LACS_5_TO_20', 'LACS_20_TO_99', 'MORE_THAN_1_CRORE');

-- CreateEnum
CREATE TYPE "RiskApetite" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "StartupSize" AS ENUM ('ONE', 'BW_1_AND_10', 'BW_10_AND_50', 'BW_50_AND_200', 'BW_200_AND_1000', 'OVER_1000');

-- CreateEnum
CREATE TYPE "InvestorPlatformGoal" AS ENUM ('INVEST', 'LEARN', 'EXPLORE', 'CONNECT', 'ADVISE');

-- CreateEnum
CREATE TYPE "ReferSource" AS ENUM ('WORD_OF_MOUTH', 'SOCIAL_MEDIA', 'BROWSING', 'REFERRAL', 'ADVERTISEMENT');

-- CreateEnum
CREATE TYPE "VisibilityLevel" AS ENUM ('PRIVATE', 'CONNECTIONS', 'PUBLIC');

-- CreateEnum
CREATE TYPE "NotificationLevel" AS ENUM ('NONE', 'LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('EDUCATION', 'HEALTHCARE', 'PHARMACEUTICALS', 'BANKING_AND_FINANCE', 'ENERGY', 'CONSUMER_GOODS', 'RETAIL_ECOMMERCE', 'REAL_ESTATE', 'FOOD_AND_BEVERAGE', 'IT', 'IOT', 'AGRICULTURE', 'MANUFACTURING', 'FASHION', 'MEDIA', 'GAMING', 'ENTERTAINMENT', 'TELECOM', 'LOGISTICS', 'TRANSPORTATION', 'AUTOMOTIVE', 'AVIATION', 'HEAVY_MACHINERY', 'CHEMICAL', 'CONSTRUCTION', 'DEFENCE', 'ELECTRONICS', 'FISHERIES', 'MINING', 'BIOTECHNOLOGY', 'LEGAL', 'SPORTS_AND_FITNESS', 'WASTE_MANAGEMENT', 'WATER_MANAGEMENT', 'TRAVEL_AND_HOSPITALITY', 'SECURITY', 'SOCIAL_SERVICE', 'MARKETING', 'HUMAN_RESOURCES', 'BUSINESS_MANAGEMENT', 'AUTOMATION');

-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('AI', 'AUTOMATION');

-- CreateEnum
CREATE TYPE "DistributionType" AS ENUM ('B2B', 'B2C', 'BOTH');

-- CreateEnum
CREATE TYPE "ShortTermPlan" AS ENUM ('EXPAND_GEO', 'IPO', 'HIRE_TEAM', 'IMPROVE_PRODUCT_SERVICE', 'BUILD_CUSTOMER_BASE');

-- CreateEnum
CREATE TYPE "StartupPlatformGoal" AS ENUM ('RAISE_FUNDS', 'EXPLORE', 'CONNECT', 'GET_ADVICE');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('CREATED', 'EXCEEDED', 'RAISED', 'CLOSED');

-- CreateEnum
CREATE TYPE "BidStatus" AS ENUM ('CREATED', 'COUNTER', 'ACCEPTED', 'DECLINED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "otp" TEXT,
    "otpExpiresAt" TIMESTAMP(3),
    "type" "UserType" NOT NULL DEFAULT 'GUEST',
    "isLoggedIn" BOOLEAN NOT NULL DEFAULT false,
    "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "requesterID" INTEGER NOT NULL,
    "accepterID" INTEGER NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "linkedInURL" TEXT,
    "websiteURL" TEXT,
    "locationID" INTEGER NOT NULL,
    "eduBG" "EducationBG",
    "yearsOfWorkEx" INTEGER,
    "numberOfCompanies" INTEGER,
    "workedInSectors" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorExperience" (
    "id" INTEGER NOT NULL,
    "hasInvestedBefore" BOOLEAN NOT NULL,
    "hasFoundStartup" BOOLEAN NOT NULL,
    "hasWorkedInStartup" BOOLEAN NOT NULL,
    "riskApetite" "RiskApetite" NOT NULL DEFAULT 'MEDIUM',
    "investorLevel" "InvestorLevel" NOT NULL DEFAULT 'NOVICE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestedCompany" (
    "id" SERIAL NOT NULL,
    "investorID" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "industrySectorID" INTEGER NOT NULL,
    "fundingStage" "FundingStage" NOT NULL,
    "fundingAmountLacs" "AmountRange",
    "fundingReason" TEXT,
    "hasExited" BOOLEAN NOT NULL,
    "expectedReturnsMult" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestedCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorMotive" (
    "id" INTEGER NOT NULL,
    "preferredIndustrySectors" INTEGER[],
    "prefferedCapitalToInvest" "AmountRange"[],
    "preferredFundingStage" "FundingStage"[],
    "preferredStartupTeamSize" "StartupSize"[],
    "preferredTimelineMonths" INTEGER,
    "preferredReturnsMult" INTEGER,
    "preferredLocations" INTEGER[],
    "reasonForInvesting" TEXT,
    "platformGoal" "InvestorPlatformGoal"[],
    "referSource" "ReferSource"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorMotive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorPreferences" (
    "id" INTEGER NOT NULL,
    "prefersLightTheme" BOOLEAN NOT NULL DEFAULT true,
    "profileHiddenFromStrangers" BOOLEAN NOT NULL DEFAULT false,
    "receiveMessageFromStrangers" BOOLEAN NOT NULL DEFAULT true,
    "activityVisbility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "notificationLevel" "NotificationLevel" NOT NULL DEFAULT 'HIGH',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorPreferences_pkey" PRIMARY KEY ("id")
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
    "industrySectorID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustrySector" (
    "id" SERIAL NOT NULL,
    "industry" "Industry" NOT NULL,
    "sector" "Sector" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustrySector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupBasic" (
    "id" INTEGER NOT NULL,
    "valueProp" TEXT NOT NULL,
    "story" TEXT,
    "whyThisBusiness" TEXT,
    "isFirstStartup" BOOLEAN NOT NULL,
    "mission" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "startupSize" "StartupSize" NOT NULL,
    "coreValues" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupBasic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyPeople" (
    "id" SERIAL NOT NULL,
    "startupID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "writeup" TEXT,
    "eduBG" "EducationBG",
    "linkedInURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KeyPeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupBusiness" (
    "id" INTEGER NOT NULL,
    "numberUsersFY" INTEGER NOT NULL,
    "numberCitiesFY" INTEGER NOT NULL,
    "distributionType" "DistributionType" NOT NULL,
    "workedWell" TEXT[],
    "challenges" TEXT[],
    "couldImprove" TEXT[],
    "currentFYActivities" TEXT[],
    "hasOnlineBusiness" BOOLEAN NOT NULL,
    "partners" TEXT[],
    "customers" TEXT[],
    "revenueModel" TEXT,
    "costStructure" TEXT,
    "shortTermPlan" "ShortTermPlan"[],
    "marketSizeLacs" DOUBLE PRECISION,
    "marketGrowthRate" DOUBLE PRECISION,
    "trends" TEXT[],
    "competitors" TEXT[],
    "opporunities" TEXT[],
    "threats" TEXT[],
    "xFactor" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupFinancials" (
    "id" INTEGER NOT NULL,
    "currentValuationLacs" DOUBLE PRECISION NOT NULL,
    "currentStage" "FundingStage" NOT NULL,
    "currentRatio" DOUBLE PRECISION,
    "DERatio" DOUBLE PRECISION,
    "revenueLastFYLacs" DOUBLE PRECISION,
    "revenueGrowthRate" DOUBLE PRECISION,
    "isProfitable" BOOLEAN,
    "margin" DOUBLE PRECISION,
    "cashRunwayMonths" INTEGER,
    "plansForUsingCash" TEXT[],
    "biggestCostHeads" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupFinancials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FundraisingRound" (
    "id" SERIAL NOT NULL,
    "startupID" INTEGER NOT NULL,
    "roundStage" "FundingStage" NOT NULL,
    "capitalRaisedLacs" DOUBLE PRECISION NOT NULL,
    "valuationLacs" DOUBLE PRECISION NOT NULL,
    "keyInvestors" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FundraisingRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapTable" (
    "id" SERIAL NOT NULL,
    "startupID" INTEGER NOT NULL,
    "shareholder" TEXT NOT NULL,
    "equityShare" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupMotive" (
    "id" INTEGER NOT NULL,
    "platformGoal" "StartupPlatformGoal"[],
    "referSource" "ReferSource"[],
    "preferredIndustrySectors" INTEGER[],
    "preferredInvestorLevels" "InvestorLevel"[],
    "preferredLocations" INTEGER[],
    "promisingReturnsMult" INTEGER,
    "promisingTimeline" INTEGER,
    "pitchDeckURL" TEXT,
    "demoURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupMotive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupPreferences" (
    "id" INTEGER NOT NULL,
    "prefersLightTheme" BOOLEAN NOT NULL DEFAULT true,
    "profileHiddenFromStrangers" BOOLEAN NOT NULL DEFAULT false,
    "receiveMessageFromStrangers" BOOLEAN NOT NULL DEFAULT true,
    "activityVisbility" "VisibilityLevel" NOT NULL DEFAULT 'PUBLIC',
    "financialVisbility" "VisibilityLevel" NOT NULL DEFAULT 'CONNECTIONS',
    "notificationLevel" "NotificationLevel" NOT NULL DEFAULT 'HIGH',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "startupID" INTEGER NOT NULL,
    "status" "OfferStatus" NOT NULL DEFAULT 'CREATED',
    "extended" BOOLEAN NOT NULL DEFAULT false,
    "capitalTargetLacs" DOUBLE PRECISION NOT NULL,
    "equityBeingIssued" DOUBLE PRECISION NOT NULL,
    "minTicketSizeLacs" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "maxTicketSizeLacs" DOUBLE PRECISION NOT NULL,
    "numberOfInvestors" INTEGER,
    "willUseFundsFor" TEXT[],
    "needHelpWith" TEXT[],
    "timelineDays" INTEGER NOT NULL DEFAULT 30,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" SERIAL NOT NULL,
    "offerID" INTEGER NOT NULL,
    "investorID" INTEGER NOT NULL,
    "status" "BidStatus" NOT NULL DEFAULT 'CREATED',
    "rebid" BOOLEAN NOT NULL DEFAULT false,
    "capitalAvailable" DOUBLE PRECISION NOT NULL,
    "equityNeeded" DOUBLE PRECISION NOT NULL,
    "counterCapital" DOUBLE PRECISION,
    "counterEquity" DOUBLE PRECISION,
    "canHelpWith" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BidQuestion" (
    "id" SERIAL NOT NULL,
    "bidID" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answered" BOOLEAN NOT NULL DEFAULT false,
    "answer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BidQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "posterID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "writeup" TEXT,
    "attachmentURL" TEXT,
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
CREATE TABLE "Conversation" (
    "id" SERIAL NOT NULL,
    "conversationStarterID" INTEGER NOT NULL,
    "conversationResponderID" INTEGER NOT NULL,
    "isFavoriteByStarter" BOOLEAN NOT NULL DEFAULT false,
    "isFavoriteByResponder" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "conversationID" INTEGER NOT NULL,
    "senderID" INTEGER NOT NULL,
    "receiverID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentURL" TEXT,
    "unread" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SuccessfulDeal" (
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_requesterID_accepterID_key" ON "Connection"("requesterID", "accepterID");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_id_key" ON "Investor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_state_city_key" ON "Location"("state", "city");

-- CreateIndex
CREATE UNIQUE INDEX "InvestorExperience_id_key" ON "InvestorExperience"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InvestorMotive_id_key" ON "InvestorMotive"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InvestorPreferences_id_key" ON "InvestorPreferences"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_id_key" ON "Startup"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_name_key" ON "Startup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StartupBasic_id_key" ON "StartupBasic"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StartupBusiness_id_key" ON "StartupBusiness"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StartupFinancials_id_key" ON "StartupFinancials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StartupMotive_id_key" ON "StartupMotive"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StartupPreferences_id_key" ON "StartupPreferences"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Bid_offerID_investorID_key" ON "Bid"("offerID", "investorID");

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_conversationStarterID_conversationResponderID_key" ON "Conversation"("conversationStarterID", "conversationResponderID");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SuccessfulDeal_AB_unique" ON "_SuccessfulDeal"("A", "B");

-- CreateIndex
CREATE INDEX "_SuccessfulDeal_B_index" ON "_SuccessfulDeal"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikesPost_AB_unique" ON "_UserLikesPost"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikesPost_B_index" ON "_UserLikesPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikesComment_AB_unique" ON "_UserLikesComment"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikesComment_B_index" ON "_UserLikesComment"("B");

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_requesterID_fkey" FOREIGN KEY ("requesterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_accepterID_fkey" FOREIGN KEY ("accepterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorExperience" ADD CONSTRAINT "InvestorExperience_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestedCompany" ADD CONSTRAINT "InvestedCompany_investorID_fkey" FOREIGN KEY ("investorID") REFERENCES "InvestorExperience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorMotive" ADD CONSTRAINT "InvestorMotive_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorPreferences" ADD CONSTRAINT "InvestorPreferences_id_fkey" FOREIGN KEY ("id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupBasic" ADD CONSTRAINT "StartupBasic_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyPeople" ADD CONSTRAINT "KeyPeople_startupID_fkey" FOREIGN KEY ("startupID") REFERENCES "StartupBasic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupBusiness" ADD CONSTRAINT "StartupBusiness_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupFinancials" ADD CONSTRAINT "StartupFinancials_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundraisingRound" ADD CONSTRAINT "FundraisingRound_startupID_fkey" FOREIGN KEY ("startupID") REFERENCES "StartupFinancials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CapTable" ADD CONSTRAINT "CapTable_startupID_fkey" FOREIGN KEY ("startupID") REFERENCES "StartupFinancials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupMotive" ADD CONSTRAINT "StartupMotive_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupPreferences" ADD CONSTRAINT "StartupPreferences_id_fkey" FOREIGN KEY ("id") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_startupID_fkey" FOREIGN KEY ("startupID") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_offerID_fkey" FOREIGN KEY ("offerID") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_investorID_fkey" FOREIGN KEY ("investorID") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BidQuestion" ADD CONSTRAINT "BidQuestion_bidID_fkey" FOREIGN KEY ("bidID") REFERENCES "Bid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_posterID_fkey" FOREIGN KEY ("posterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commenterID_fkey" FOREIGN KEY ("commenterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_conversationStarterID_fkey" FOREIGN KEY ("conversationStarterID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_conversationResponderID_fkey" FOREIGN KEY ("conversationResponderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationID_fkey" FOREIGN KEY ("conversationID") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverID_fkey" FOREIGN KEY ("receiverID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SuccessfulDeal" ADD CONSTRAINT "_SuccessfulDeal_A_fkey" FOREIGN KEY ("A") REFERENCES "Investor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SuccessfulDeal" ADD CONSTRAINT "_SuccessfulDeal_B_fkey" FOREIGN KEY ("B") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesPost" ADD CONSTRAINT "_UserLikesPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesPost" ADD CONSTRAINT "_UserLikesPost_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesComment" ADD CONSTRAINT "_UserLikesComment_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikesComment" ADD CONSTRAINT "_UserLikesComment_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
