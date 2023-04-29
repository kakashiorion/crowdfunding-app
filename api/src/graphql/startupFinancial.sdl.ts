export const schema = gql`
  type StartupFinancials {
    id: Int!
    startup: Startup!
    currentValuationLacs: Float!
    currentCapTable: [CapTable]!
    currentStage: FundingStage!
    fundraisingRounds: [FundraisingRound]!
    currentRatio: Float
    DERatio: Float
    revenueLastFYLacs: Float
    revenueGrowthRate: Float
    isProfitable: Boolean
    margin: Float
    cashRunwayMonths: Int
    plansForUsingCash: [String]!
    biggestCostHeads: [String]!
    createdAt: DateTime!
    updatedAt: DateTime!
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

  type Query {
    startupFinancial: [StartupFinancials!]! @requireAuth
    startupFinancials(id: Int!): StartupFinancials @requireAuth
  }

  input CreateStartupFinancialsInput {
    currentValuationLacs: Float!
    currentStage: FundingStage!
    currentRatio: Float
    DERatio: Float
    revenueLastFYLacs: Float
    revenueGrowthRate: Float
    isProfitable: Boolean
    margin: Float
    cashRunwayMonths: Int
    plansForUsingCash: [String]!
    biggestCostHeads: [String]!
  }

  input UpdateStartupFinancialsInput {
    currentValuationLacs: Float
    currentStage: FundingStage
    currentRatio: Float
    DERatio: Float
    revenueLastFYLacs: Float
    revenueGrowthRate: Float
    isProfitable: Boolean
    margin: Float
    cashRunwayMonths: Int
    plansForUsingCash: [String]!
    biggestCostHeads: [String]!
  }

  type Mutation {
    createStartupFinancials(
      input: CreateStartupFinancialsInput!
    ): StartupFinancials! @requireAuth
    updateStartupFinancials(
      id: Int!
      input: UpdateStartupFinancialsInput!
    ): StartupFinancials! @requireAuth
    deleteStartupFinancials(id: Int!): StartupFinancials! @requireAuth
  }
`
