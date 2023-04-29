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
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    # credentials: [UserCredential]!
    type: UserType!
    investor: Investor
    startup: Startup
    isLoggedIn: Boolean!
    isOnboarded: Boolean!
    messagesSent: [Message]!
    messagesReceived: [Message]!
    conversationsStarted: [Conversation]!
    conversationsResponded: [Conversation]!
    posts: [Post]!
    comments: [Comment]!
    likedPosts: [Post]!
    likedComments: [Comment]!
    connectionsRequested: [Connection]!
    connectionsAccepted: [Connection]!
    followedBy: [User]!
    following: [User]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum UserType {
    INVESTOR
    STARTUP
    ADMIN
    GUEST
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    lastLogin: DateTime!
    profilePicURL: String
    mobile: String
    otp: String
    otpExpiresAt: DateTime
    webAuthnChallenge: String
    type: UserType!
    isLoggedIn: Boolean!
    isOnboarded: Boolean!
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
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
