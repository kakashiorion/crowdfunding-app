export const schema = gql`
  type InvestorExperience {
    id: Int!
    investor: Investor!
    workedInStartups: SizeRange!
    foundedStartups: SizeRange!
    investedStartups: SizeRange!
    investedStages: [FundingStage]!
    investedAmountLacs: AmountRange!
    successfulExits: SizeRange!
    returnsReceived: [ReturnsRange]!
    investedSectors: [Sector]!
    investorLevel: InvestorLevel!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
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

  enum AmountRange {
    NONE
    LESS_THAN_ONE_LAC
    ONE_TO_FIVE_LACS
    FIVE_TO_TWENTY_LACS
    TWENTY_LACS_TO_ONE_CRORE
    MORE_THAN_1_CRORE
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
  }

  enum ReturnsRange {
    BREAKEVEN
    TWO
    THREE
    FIVE
    TEN
    TWENTY
    FIFTY
    HUNDRED
  }

  enum Sector {
    EDUCATION
    HEALTHCARE
    BANKING_AND_FINANCE
    ENERGY
    RETAIL
    REAL_ESTATE
    INFORMATION_TECHNOLOGY
    SCIENCE_AND_TECHNOLOGY
    AGRICULTURE
    MANUFACTURING
    MEDIA_AND_ENTERTAINMENT
    TELECOMMUNICATIONS
    TRANSPORTATION
    FOOD_AND_TOURISM
    OTHER
  }

  enum InvestorLevel {
    NOVICE
    INTERMEDIATE
    EXPERIENCED
    PROFESSIONAL
    SEASONED
  }

  type Query {
    investorExperiences: [InvestorExperience!]! @requireAuth
    investorExperience(id: Int!): InvestorExperience @requireAuth
  }

  input CreateInvestorExperienceInput {
    id: Int!
    workedInStartups: SizeRange!
    foundedStartups: SizeRange!
    investedStartups: SizeRange!
    investedStages: [FundingStage]!
    investedAmountLacs: AmountRange!
    successfulExits: SizeRange!
    returnsReceived: [ReturnsRange]!
    investedSectors: [Sector]!
    investorLevel: InvestorLevel!
  }

  input UpdateInvestorExperienceInput {
    workedInStartups: SizeRange
    foundedStartups: SizeRange
    investedStartups: SizeRange
    investedStages: [FundingStage]!
    investedAmountLacs: AmountRange
    successfulExits: SizeRange
    returnsReceived: [ReturnsRange]!
    investedSectors: [Sector]!
    investorLevel: InvestorLevel
  }

  type Mutation {
    createInvestorExperience(
      input: CreateInvestorExperienceInput!
    ): InvestorExperience! @requireAuth
    updateInvestorExperience(
      id: Int!
      input: UpdateInvestorExperienceInput!
    ): InvestorExperience! @requireAuth
    deleteInvestorExperience(id: Int!): InvestorExperience! @requireAuth
  }
`
