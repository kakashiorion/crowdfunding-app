export const schema = gql`
  type InvestorPreferences {
    id: Int!
    investor: Investor!
    prefersLightTheme: Boolean!
    profileHiddenFromStrangers: Boolean!
    receiveMessageFromStrangers: Boolean!
    activityVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    PUBLIC
  }

  enum NotificationLevel {
    NONE
    LOW
    MEDIUM
    HIGH
  }

  type Query {
    investorPreference: [InvestorPreferences!]! @requireAuth
    investorPreferences(id: Int!): InvestorPreferences @requireAuth
  }

  input CreateInvestorPreferencesInput {
    prefersLightTheme: Boolean!
    profileHiddenFromStrangers: Boolean!
    receiveMessageFromStrangers: Boolean!
    activityVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
  }

  input UpdateInvestorPreferencesInput {
    prefersLightTheme: Boolean
    profileHiddenFromStrangers: Boolean
    receiveMessageFromStrangers: Boolean
    activityVisbility: VisibilityLevel
    notificationLevel: NotificationLevel
  }

  type Mutation {
    createInvestorPreferences(
      input: CreateInvestorPreferencesInput!
    ): InvestorPreferences! @requireAuth
    updateInvestorPreferences(
      id: Int!
      input: UpdateInvestorPreferencesInput!
    ): InvestorPreferences! @requireAuth
    deleteInvestorPreferences(id: Int!): InvestorPreferences! @requireAuth
  }
`
