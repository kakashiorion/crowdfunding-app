export const schema = gql`
  type Post {
    id: Int!
    poster: User!
    posterID: Int!
    comments: [Comment]!
    likedByUsers: [User]!
    title: String!
    writeup: String
    attachmentURL: String
    visibility: VisibilityLevel!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum VisibilityLevel {
    PRIVATE
    CONNECTIONS
    FOLLOWERS
    PUBLIC
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    posterID: Int!
    title: String!
    writeup: String
    attachmentURL: String
    visibility: VisibilityLevel!
  }

  input UpdatePostInput {
    posterID: Int
    title: String
    writeup: String
    attachmentURL: String
    visibility: VisibilityLevel
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
    addUserLike(id: Int!): Post! @requireAuth
    removeUserLike(id: Int!): Post! @requireAuth
  }
`
