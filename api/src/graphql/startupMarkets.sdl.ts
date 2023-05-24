export const schema = gql`
  type StartupMarket {
    id: Int!
    startup: Startup!
    revenueStreams: [RevenueStreams]!
    costHeads: [CostHeads]!
    shortTermPlan: ShortTermPlan!
    marketSizeInCr: MarketSize!
    marketGrowthRate: GrowthRate!
    trends: [String]!
    opporunities: [String]!
    threats: [String]!
    competitors: [String]!
    xFactor: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum RevenueStreams {
    SELLING_GOODS_OR_SERVICES
    RENTAL_OR_LEASING
    ADS_OR_SPONSORS
    COMMISSION_FEE
    SUBSCRIPTION_OR_LICENSING
    DONATIONS
    PAY_PER_USE
    OTHER
  }

  enum CostHeads {
    MATERIAL
    WAGES
    RENT
    INTEREST
    EQUIPMENT
    MARKETING
    ADMIN
    OTHER
  }

  enum ShortTermPlan {
    EXPAND_GEOGRAPHICALLY
    GO_FOR_IPO
    HIRE_AND_EXPAND_TEAM
    IMPROVE_PRODUCT_OR_SERVICE
    BUILD_CUSTOMER_BASE
    OTHER
  }

  enum MarketSize {
    LESS_THAN_10_CR
    BETWEEN_10_AND_100_CR
    BETWEEN_100_AND_1000_CR
    BETWEEN_1000_AND_10000_CR
    BETWEEN_10000_AND_1_LAC_CR
    MORE_THAN_1_LAC_CR
  }

  enum GrowthRate {
    LESS_THAN_5
    BETWEEN_5_TO_10
    BETWEEN_10_TO_20
    BETWEEN_20_TO_50
    BETWEEN_50_TO_100
    MORE_THAN_100
  }

  type Query {
    startupMarkets: [StartupMarket!]! @requireAuth
    startupMarket(id: Int!): StartupMarket @requireAuth
  }

  input CreateStartupMarketInput {
    id: Int!
    revenueStreams: [RevenueStreams]!
    costHeads: [CostHeads]!
    shortTermPlan: ShortTermPlan!
    marketSizeInCr: MarketSize!
    marketGrowthRate: GrowthRate!
    trends: [String]!
    opporunities: [String]!
    threats: [String]!
    competitors: [String]!
    xFactor: String
  }

  input UpdateStartupMarketInput {
    revenueStreams: [RevenueStreams]!
    costHeads: [CostHeads]!
    shortTermPlan: ShortTermPlan
    marketSizeInCr: MarketSize
    marketGrowthRate: GrowthRate
    trends: [String]!
    opporunities: [String]!
    threats: [String]!
    competitors: [String]!
    xFactor: String
  }

  type Mutation {
    createStartupMarket(input: CreateStartupMarketInput!): StartupMarket!
      @requireAuth
    updateStartupMarket(
      id: Int!
      input: UpdateStartupMarketInput!
    ): StartupMarket! @requireAuth
    deleteStartupMarket(id: Int!): StartupMarket! @requireAuth
  }
`
