export const schema = gql`
  type StartupPreferences {
    id: Int!
    startup: Startup!
    prefersLightTheme: Boolean!
    profileHiddenFromStrangers: Boolean!
    receiveMessageFromStrangers: Boolean!
    activityVisbility: VisibilityLevel!
    financialVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    PUBLIC
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
    startupPreference: [StartupPreferences!]! @requireAuth
    startupPreferences(id: Int!): StartupPreferences @requireAuth
  }

  input CreateStartupPreferencesInput {
    prefersLightTheme: Boolean!
    profileHiddenFromStrangers: Boolean!
    receiveMessageFromStrangers: Boolean!
    activityVisbility: VisibilityLevel!
    financialVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
  }

  input UpdateStartupPreferencesInput {
    prefersLightTheme: Boolean
    profileHiddenFromStrangers: Boolean
    receiveMessageFromStrangers: Boolean
    activityVisbility: VisibilityLevel
    financialVisbility: VisibilityLevel
    notificationLevel: NotificationLevel
  }

  type Mutation {
    createStartupPreferences(
      input: CreateStartupPreferencesInput!
    ): StartupPreferences! @requireAuth
    updateStartupPreferences(
      id: Int!
      input: UpdateStartupPreferencesInput!
    ): StartupPreferences! @requireAuth
    deleteStartupPreferences(id: Int!): StartupPreferences! @requireAuth
  }
`
