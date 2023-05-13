export const schema = gql`
  type StartupBusiness {
    id: Int!
    startup: Startup!
    numberUsers: UserRange
    numberCities: SizeRange
    distributionType: DistributionType
    partners: [String]!
    customers: [String]!
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentActivities: [String]!
    hasOnlineBusiness: OnlineBusiness
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum UserRange {
    LESS_THAN_100
    BETWEEN_100_AND_1000
    BETWEEN_1000_AND_10000
    BETWEEN_10000_AND_1_LAC
    BETWEEN_1_LAC_AND_10_LACS
    BETWEEEN_10_LACS_AND_1_CRORE
    MORE_THAN_1_CRORE
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
  }

  enum DistributionType {
    B2B
    B2C
    BOTH
    OTHER
  }

  enum OnlineBusiness {
    YES
    SETTING_UP
    PLANNED
    NO
  }

  type Query {
    startupBusinesses: [StartupBusiness!]! @requireAuth
    startupBusiness(id: Int!): StartupBusiness @requireAuth
  }

  input CreateStartupBusinessInput {
    id: Int!
    numberUsers: UserRange
    numberCities: SizeRange
    distributionType: DistributionType
    partners: [String]!
    customers: [String]!
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentActivities: [String]!
    hasOnlineBusiness: OnlineBusiness
  }

  input UpdateStartupBusinessInput {
    numberUsers: UserRange
    numberCities: SizeRange
    distributionType: DistributionType
    partners: [String]!
    customers: [String]!
    workedWell: [String]!
    challenges: [String]!
    couldImprove: [String]!
    currentActivities: [String]!
    hasOnlineBusiness: OnlineBusiness
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
