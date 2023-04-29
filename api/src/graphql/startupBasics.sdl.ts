export const schema = gql`
  type StartupBasic {
    id: Int!
    startup: Startup!
    valueProp: String!
    story: String
    whyThisBusiness: String
    isFirstStartup: Boolean!
    mission: String!
    vision: String!
    startupSize: StartupSize!
    leadingTeam: [KeyPeople]!
    coreValues: [String]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum StartupSize {
    ONE
    BW_1_AND_10
    BW_10_AND_50
    BW_50_AND_200
    BW_200_AND_1000
    OVER_1000
  }

  type Query {
    startupBasics: [StartupBasic!]! @requireAuth
    startupBasic(id: Int!): StartupBasic @requireAuth
  }

  input CreateStartupBasicInput {
    valueProp: String!
    story: String
    whyThisBusiness: String
    isFirstStartup: Boolean!
    mission: String!
    vision: String!
    startupSize: StartupSize!
    coreValues: [String]!
  }

  input UpdateStartupBasicInput {
    valueProp: String
    story: String
    whyThisBusiness: String
    isFirstStartup: Boolean
    mission: String
    vision: String
    startupSize: StartupSize
    coreValues: [String]!
  }

  type Mutation {
    createStartupBasic(input: CreateStartupBasicInput!): StartupBasic!
      @requireAuth
    updateStartupBasic(
      id: Int!
      input: UpdateStartupBasicInput!
    ): StartupBasic! @requireAuth
    deleteStartupBasic(id: Int!): StartupBasic! @requireAuth
  }
`
