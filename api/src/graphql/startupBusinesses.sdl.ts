export const schema = gql`
  type StartupBusiness {
    id: Int!
    startup: Startup!
    numberUsersFY: Int!
    numberCitiesFY: Int!
    distributionType: DistributionType!
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentFYActivities: [String]!
    hasOnlineBusiness: Boolean!
    partners: [String]!
    customers: [String]!
    revenueModel: String
    costStructure: String
    shortTermPlan: [ShortTermPlan]!
    marketSizeLacs: Float
    marketGrowthRate: Float
    trends: [String]!
    competitors: [String]!
    opporunities: [String]!
    threats: [String]!
    xFactor: [String]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum DistributionType {
    B2B
    B2C
    BOTH
  }

  enum ShortTermPlan {
    EXPAND_GEO
    IPO
    HIRE_TEAM
    IMPROVE_PRODUCT_SERVICE
    BUILD_CUSTOMER_BASE
  }

  type Query {
    startupBusinesses: [StartupBusiness!]! @requireAuth
    startupBusiness(id: Int!): StartupBusiness @requireAuth
  }

  input CreateStartupBusinessInput {
    numberUsersFY: Int!
    numberCitiesFY: Int!
    distributionType: DistributionType!
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentFYActivities: [String]!
    hasOnlineBusiness: Boolean!
    partners: [String]!
    customers: [String]!
    revenueModel: String
    costStructure: String
    shortTermPlan: [ShortTermPlan]!
    marketSizeLacs: Float
    marketGrowthRate: Float
    trends: [String]!
    competitors: [String]!
    opporunities: [String]!
    threats: [String]!
    xFactor: [String]!
  }

  input UpdateStartupBusinessInput {
    numberUsersFY: Int
    numberCitiesFY: Int
    distributionType: DistributionType
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentFYActivities: [String]!
    hasOnlineBusiness: Boolean
    partners: [String]!
    customers: [String]!
    revenueModel: String
    costStructure: String
    shortTermPlan: [ShortTermPlan]!
    marketSizeLacs: Float
    marketGrowthRate: Float
    trends: [String]!
    competitors: [String]!
    opporunities: [String]!
    threats: [String]!
    xFactor: [String]!
  }

  type Mutation {
    createStartupBusiness(input: CreateStartupBusinessInput!): StartupBusiness!
      @requireAuth
    updateStartupBusiness(
      id: Int!
      input: UpdateStartupBusinessInput!
    ): StartupBusiness! @requireAuth
    deleteStartupBusiness(id: Int!): StartupBusiness! @requireAuth
  }
`
