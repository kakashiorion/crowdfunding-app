export const schema = gql`
  type StartupFinancials {
    id: Int!
    startup: Startup!
    latestFundingStage: FundingStage!
    latestValuationInCr: Float
    latestCapTable: [CapTable]!
    fundraisingRounds: [FundraisingRound]!
    currentRatio: DecimalRange!
    debtEquityRatio: DecimalRange!
    revenueLastFY: RevenueRange!
    revenueGrowthRate: GrowthRate!
    margin: Margin!
    cashRunway: TimelineRange!
    plansForUsingCash: [String]!
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

  enum DecimalRange {
    LESS_THAN_HALF
    BETWEEN_HALF_AND_ONE
    BETWEEN_ONE_AND_TWO
    MORE_THAN_TWO
  }

  enum DecimalRange {
    LESS_THAN_HALF
    BETWEEN_HALF_AND_ONE
    BETWEEN_ONE_AND_TWO
    MORE_THAN_TWO
  }

  enum RevenueRange {
    LESS_THAN_10_LACS
    BETWEEN_10_TO_20_LACS
    BETWEEN_20_TO_50_LACS
    BETWEEN_50_TO_100_LACS
    BETWEEN_1_TO_10_CR
    BETWEEN_10_TO_50_CR
    BETWEEN_50_TO_100_CR
    MORE_THAN_100_CRORE
  }

  enum GrowthRate {
    LESS_THAN_5
    BETWEEN_5_TO_10
    BETWEEN_10_TO_20
    BETWEEN_20_TO_50
    BETWEEN_50_TO_100
    MORE_THAN_100
  }

  enum Margin {
    LOSS_OVER_50
    LOSS_BETWEEN_20_AND_50
    LOSS_LESS_THAN_20
    PROFIT_LESS_THAN_20
    PROFIT_BETWEEN_20_AND_50
    PROFIT_OVER_50
  }

  enum TimelineRange {
    LESS_THAN_SIX_MONTHS
    SIX_TO_TWELVE_MONTHS
    ONE_TO_TWO_YEARS
    TWO_TO_FIVE_YEARS
    FIVE_TO_TEN_YEARS
    MORE_THAN_TEN_YEARS
  }

  type Query {
    startupFinancialses: [StartupFinancials!]! @requireAuth
    startupFinancials(id: Int!): StartupFinancials @requireAuth
  }

  input CreateStartupFinancialsInput {
    id: Int!
    latestFundingStage: FundingStage!
    latestValuationInCr: Float
    currentRatio: DecimalRange!
    debtEquityRatio: DecimalRange!
    revenueLastFY: RevenueRange!
    revenueGrowthRate: GrowthRate!
    margin: Margin!
    cashRunway: TimelineRange!
    plansForUsingCash: [String]!
  }

  input UpdateStartupFinancialsInput {
    latestFundingStage: FundingStage
    latestValuationInCr: Float
    currentRatio: DecimalRange
    debtEquityRatio: DecimalRange
    revenueLastFY: RevenueRange
    revenueGrowthRate: GrowthRate
    margin: Margin
    cashRunway: TimelineRange
    plansForUsingCash: [String]!
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
