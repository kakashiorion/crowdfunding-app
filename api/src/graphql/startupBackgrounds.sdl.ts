export const schema = gql`
  type StartupBackground {
    id: Int!
    startup: Startup!
    valueProp: String
    idea: String
    whyThis: String
    foundedBefore: SizeRange
    mission: String
    vision: String
    coreValues: [String]!
    startupTeamSize: StartupTeamSize
    keyPeople: [KeyPeople]!
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

  enum StartupTeamSize {
    ONE
    BETWEEN_1_AND_10
    BETWEEN_10_AND_50
    BETWEEN_50_AND_200
    BETWEEN_200_AND_1000
    OVER_1000
  }

  type Query {
    startupBackgrounds: [StartupBackground!]! @requireAuth
    startupBackground(id: Int!): StartupBackground @requireAuth
  }

  input CreateStartupBackgroundInput {
    id: Int!
    valueProp: String
    idea: String
    whyThis: String
    foundedBefore: SizeRange
    mission: String
    vision: String
    coreValues: [String]!
    startupTeamSize: StartupTeamSize
  }

  input UpdateStartupBackgroundInput {
    valueProp: String
    idea: String
    whyThis: String
    foundedBefore: SizeRange
    mission: String
    vision: String
    coreValues: [String]!
    startupTeamSize: StartupTeamSize
  }

  type Mutation {
    createStartupBackground(
      input: CreateStartupBackgroundInput!
    ): StartupBackground! @requireAuth
    updateStartupBackground(
      id: Int!
      input: UpdateStartupBackgroundInput!
    ): StartupBackground! @requireAuth
    deleteStartupBackground(id: Int!): StartupBackground! @requireAuth
  }
`
