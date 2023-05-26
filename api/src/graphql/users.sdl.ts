export const schema = gql`
  type User {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    profilePicURL: String
    lastActive: DateTime!
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    # credentials: [UserCredential]!
    type: UserType!
    investor: Investor
    startup: Startup
    isOnboarded: Boolean!
    likedOnboarding: Boolean
    offerRoomMessages: [RoomGroupMessage]!
    negotitionMessages: [NegotiationMessage]!
    directMessages: [DirectMessage]!
    directConversations: [DirectConversation]!
    posts: [Post]!
    comments: [Comment]!
    likedPosts: [Post]!
    likedComments: [Comment]!
    connections: [Connection]!
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
    ONLY_CRITICAL
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
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    profilePicURL: String
    lastActive: DateTime!
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    type: UserType!
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
    profilePicURL: String
    lastActive: DateTime
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    type: UserType
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
    # addPostLike(postId: Int!): User! @requireAuth
    # removePostLike(postId: Int!): User! @requireAuth
  }
`
