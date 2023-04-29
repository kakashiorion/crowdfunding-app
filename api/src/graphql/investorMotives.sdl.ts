export const schema = gql`
  type InvestorMotive {
    id: Int!
    investor: Investor!
    preferredIndustrySectors: [Int]!
    prefferedCapitalToInvest: [AmountRange]!
    preferredFundingStage: [FundingStage]!
    preferredStartupTeamSize: [StartupSize]!
    preferredTimelineMonths: Int
    preferredReturnsMult: Int
    preferredLocations: [Int]!
    reasonForInvesting: String
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum AmountRange {
    LESS_THAN_1_LAC
    LACS_1_TO_5
    LACS_5_TO_20
    LACS_20_TO_99
    MORE_THAN_1_CRORE
  }

  enum FundingStage {
    SEED
    SERIES_A
    SERIES_B
    SERIES_C
    SERIES_D
    SERIES_E
    SERIES_F
    LATER
  }

  enum StartupSize {
    ONE
    BW_1_AND_10
    BW_10_AND_50
    BW_50_AND_200
    BW_200_AND_1000
    OVER_1000
  }

  enum InvestorPlatformGoal {
    INVEST
    LEARN
    EXPLORE
    CONNECT
    ADVISE
  }

  enum ReferSource {
    WORD_OF_MOUTH
    SOCIAL_MEDIA
    BROWSING
    REFERRAL
    ADVERTISEMENT
  }

  type Query {
    investorMotives: [InvestorMotive!]! @requireAuth
    investorMotive(id: Int!): InvestorMotive @requireAuth
  }

  input CreateInvestorMotiveInput {
    preferredIndustrySectors: [Int]!
    prefferedCapitalToInvest: [AmountRange]!
    preferredFundingStage: [FundingStage]!
    preferredStartupTeamSize: [StartupSize]!
    preferredTimelineMonths: Int
    preferredReturnsMult: Int
    preferredLocations: [Int]!
    reasonForInvesting: String
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
  }

  input UpdateInvestorMotiveInput {
    preferredIndustrySectors: [Int]!
    prefferedCapitalToInvest: [AmountRange]!
    preferredFundingStage: [FundingStage]!
    preferredStartupTeamSize: [StartupSize]!
    preferredTimelineMonths: Int
    preferredReturnsMult: Int
    preferredLocations: [Int]!
    reasonForInvesting: String
    platformGoal: [InvestorPlatformGoal]!
    referSource: [ReferSource]!
  }

  type Mutation {
    createInvestorMotive(input: CreateInvestorMotiveInput!): InvestorMotive!
      @requireAuth
    updateInvestorMotive(
      id: Int!
      input: UpdateInvestorMotiveInput!
    ): InvestorMotive! @requireAuth
    deleteInvestorMotive(id: Int!): InvestorMotive! @requireAuth
  }
`
