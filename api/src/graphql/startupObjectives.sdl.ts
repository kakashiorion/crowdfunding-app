export const schema = gql`
  type StartupObjective {
    id: Int!
    startup: Startup!
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    expectedTimeline: TimelineRange
    promisingReturns: ReturnsRange
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    pitchDeckURL: String
    demoURL: [String]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum InvestorLevel {
    NOVICE
    INTERMEDIATE
    EXPERIENCED
    PROFESSIONAL
    SEASONED
  }

  enum TimelineRange {
    LESS_THAN_SIX_MONTHS
    SIX_TO_TWELVE_MONTHS
    ONE_TO_TWO_YEARS
    TWO_TO_FIVE_YEARS
    FIVE_TO_TEN_YEARS
    MORE_THAN_TEN_YEARS
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

  enum StartupPlatformGoal {
    RAISING_FUNDS
    EXPLORING
    CONNECTING
    GETTING_ADVICE
  }

  enum ReferSource {
    WORD_OF_MOUTH
    SOCIAL_MEDIA
    BROWSING
    REFERRAL
    ADVERTISEMENT
    OTHER
  }

  type Query {
    startupObjectives: [StartupObjective!]! @requireAuth
    startupObjective(id: Int!): StartupObjective @requireAuth
  }

  input CreateStartupObjectiveInput {
    id: Int!
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    expectedTimeline: TimelineRange
    promisingReturns: ReturnsRange
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    pitchDeckURL: String
    demoURL: [String]!
  }

  input UpdateStartupObjectiveInput {
    preferredInvestorLevels: [InvestorLevel]!
    preferredLocations: [Int]!
    expectedTimeline: TimelineRange
    promisingReturns: ReturnsRange
    platformGoal: [StartupPlatformGoal]!
    referSource: [ReferSource]!
    pitchDeckURL: String
    demoURL: [String]!
  }

  type Mutation {
    createStartupObjective(
      input: CreateStartupObjectiveInput!
    ): StartupObjective! @requireAuth
    updateStartupObjective(
      id: Int!
      input: UpdateStartupObjectiveInput!
    ): StartupObjective! @requireAuth
    deleteStartupObjective(id: Int!): StartupObjective! @requireAuth
  }
`
