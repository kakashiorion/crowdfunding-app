export const schema = gql`
  type User {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    lastLogin: DateTime!
    profilePicURL: String
    mobile: String!
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    # credentials: [UserCredential]!
    type: UserType!
    investor: Investor
    startup: Startup
    isLoggedIn: Boolean!
    isOnboarded: Boolean!
    likedOnboarding: Boolean
    sentMessages: [Message]!
    receivedMessages: [Message]!
    startedConversations: [Conversation]!
    respondedConversations: [Conversation]!
    posts: [Post]!
    comments: [Comment]!
    likedPosts: [Post]!
    likedComments: [Comment]!
    connectionsRequested: [Connection]!
    connectionsAccepted: [Connection]!
    followedBy: [User]!
    following: [User]!
    messageVisibility: VisibilityLevel!
    activityVisbility: VisibilityLevel!
    profileVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
    prefersTheme: UITheme!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum UserType {
    INVESTOR
    STARTUP
    ADMIN
    GUEST
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    FOLLOWERS
    PUBLIC
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    FOLLOWERS
    PUBLIC
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    FOLLOWERS
    PUBLIC
  }

  enum NotificationLevel {
    NONE
    LOW
    MEDIUM
    HIGH
  }

  enum UITheme {
    SYSTEM
    LIGHT
    DARK
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    userByEmail(email: String!): User @requireAuth
    userByMobile(mobile: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    lastLogin: DateTime!
    profilePicURL: String
    mobile: String!
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    type: UserType!
    isLoggedIn: Boolean!
    isOnboarded: Boolean!
    likedOnboarding: Boolean
    messageVisibility: VisibilityLevel!
    activityVisbility: VisibilityLevel!
    profileVisbility: VisibilityLevel!
    notificationLevel: NotificationLevel!
    prefersTheme: UITheme!
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    lastLogin: DateTime
    profilePicURL: String
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    type: UserType
    isLoggedIn: Boolean
    isOnboarded: Boolean
    likedOnboarding: Boolean
    messageVisibility: VisibilityLevel
    activityVisbility: VisibilityLevel
    profileVisbility: VisibilityLevel
    notificationLevel: NotificationLevel
    prefersTheme: UITheme
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
    loginPwdLessUser(email: String!): User! @requireAuth
  }
`
