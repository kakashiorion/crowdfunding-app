export const schema = gql`
  type InvestorObjective {
    id: Int!
    investor: Investor!
    preferredAmountToInvest: AmountRange!
    preferredFundingStages: [FundingStage]!
    preferredStartupTeamSizes: [StartupTeamSize]!
    preferredTimelines: [TimelineRange]!
    riskApetite: RiskApetite!
    preferredSectors: [Sector]!
    preferredLocations: [Int]!
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum AmountRange {
    NONE
    LESS_THAN_ONE_LAC
    ONE_TO_FIVE_LACS
    FIVE_TO_TWENTY_LACS
    TWENTY_LACS_TO_ONE_CRORE
    MORE_THAN_1_CRORE
  }

  enum FundingStage {
    PRE_SEED
    SEED
    SERIES_A
    SERIES_B
    SERIES_C
    SERIES_D
    SERIES_E
    LATER
  }

  enum StartupTeamSize {
    ONE
    BETWEEN_1_AND_10
    BETWEEN_10_AND_50
    BETWEEN_50_AND_200
    BETWEEN_200_AND_1000
    OVER_1000
  }

  enum TimelineRange {
    LESS_THAN_SIX_MONTHS
    SIX_TO_TWELVE_MONTHS
    ONE_TO_TWO_YEARS
    TWO_TO_FIVE_YEARS
    FIVE_TO_TEN_YEARS
    MORE_THAN_TEN_YEARS
  }

  enum RiskApetite {
    LOW
    MEDIUM
    HIGH
  }

  enum Sector {
    EDUCATION
    HEALTHCARE
    PHARMACEUTICALS
    BANKING_AND_FINANCE
    ENERGY
    CONSUMER_GOODS
    RETAIL_ECOMMERCE
    REAL_ESTATE
    FOOD_AND_BEVERAGE
    IT
    IOT
    AGRICULTURE
    MANUFACTURING
    FASHION
    MEDIA
    GAMING
    ENTERTAINMENT
    TELECOM
    LOGISTICS
    TRANSPORTATION
    AUTOMOTIVE
    AVIATION
    HEAVY_MACHINERY
    CHEMICAL
    CONSTRUCTION
    DEFENCE
    ELECTRONICS
    FISHERIES
    MINING
    BIOTECHNOLOGY
    LEGAL
    SPORTS_AND_FITNESS
    WASTE_MANAGEMENT
    WATER_MANAGEMENT
    TRAVEL_AND_HOSPITALITY
    SECURITY
    SOCIAL_SERVICE
    MARKETING
    HUMAN_RESOURCES
    BUSINESS_MANAGEMENT
    AUTOMATION
  }

  enum InvestorPlatformGoal {
    INVESTING
    CONNECTING
    LEARNING
    EXPLORING
    CONSULTING
    RESEARCHING
    OTHER
  }

  enum ReferSource {
    WORD_OF_MOUTH
    SOCIAL_MEDIA
    BROWSING
    REFERRAL
    ADVERTISEMENT
    OTHER
  }

  type Query {
    investorObjectives: [InvestorObjective!]! @requireAuth
    investorObjective(id: Int!): InvestorObjective @requireAuth
  }

  input CreateInvestorObjectiveInput {
    id: Int!
    preferredAmountToInvest: AmountRange!
    preferredFundingStages: [FundingStage]!
    preferredStartupTeamSizes: [StartupTeamSize]!
    preferredTimelines: [TimelineRange]!
    riskApetite: RiskApetite!
    preferredSectors: [Sector]!
    preferredLocations: [Int]!
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
  }

  input UpdateInvestorObjectiveInput {
    preferredAmountToInvest: AmountRange
    preferredFundingStages: [FundingStage]!
    preferredStartupTeamSizes: [StartupTeamSize]!
    preferredTimelines: [TimelineRange]!
    riskApetite: RiskApetite
    preferredSectors: [Sector]!
    preferredLocations: [Int]!
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
  }

  type Mutation {
    createInvestorObjective(
      input: CreateInvestorObjectiveInput!
    ): InvestorObjective! @requireAuth
    updateInvestorObjective(
      id: Int!
      input: UpdateInvestorObjectiveInput!
    ): InvestorObjective! @requireAuth
    deleteInvestorObjective(id: Int!): InvestorObjective! @requireAuth
  }
`
