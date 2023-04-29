export const schema = gql`
  type StartupMotive {
    id: Int!
    startup: Startup!
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    preferredIndustrySectors: [Int]!
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    promisingReturnsMult: Int
    promisingTimeline: Int
    pitchDeckURL: String
    demoURL: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum StartupPlatformGoal {
    RAISE_FUNDS
    EXPLORE
    CONNECT
    GET_ADVICE
  }

  enum ReferSource {
    WORD_OF_MOUTH
    SOCIAL_MEDIA
    BROWSING
    REFERRAL
    ADVERTISEMENT
  }

  enum InvestorLevel {
    NOVICE
    INTERMEDIATE
    EXPERIENCED
    PROFESSIONAL
    SEASONED
  }

  type Query {
    startupMotives: [StartupMotive!]! @requireAuth
    startupMotive(id: Int!): StartupMotive @requireAuth
  }

  input CreateStartupMotiveInput {
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    preferredIndustrySectors: [Int]!
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    promisingReturnsMult: Int
    promisingTimeline: Int
    pitchDeckURL: String
    demoURL: String
  }

  input UpdateStartupMotiveInput {
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    preferredIndustrySectors: [Int]!
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    promisingReturnsMult: Int
    promisingTimeline: Int
    pitchDeckURL: String
    demoURL: String
  }

  type Mutation {
    createStartupMotive(input: CreateStartupMotiveInput!): StartupMotive!
      @requireAuth
    updateStartupMotive(
      id: Int!
      input: UpdateStartupMotiveInput!
    ): StartupMotive! @requireAuth
    deleteStartupMotive(id: Int!): StartupMotive! @requireAuth
  }
`
