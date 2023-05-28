export const schema = gql`
  type Post {
    id: Int!
    poster: User!
    posterID: Int!
    comments: [Comment]!
    likedByUsers: [User]!
    savedByUsers: [User]!
    title: String!
    writeup: String
    attachmentURL: String
    imageURL: String
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
    imageURL: String
    visibility: VisibilityLevel!
  }

  input UpdatePostInput {
    posterID: Int
    title: String
    writeup: String
    attachmentURL: String
    imageURL: String
    visibility: VisibilityLevel
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
    addPostLike(id: Int!): Post! @requireAuth
    removePostLike(id: Int!): Post! @requireAuth
    savePost(id: Int!): Post! @requireAuth
    unsavePost(id: Int!): Post! @requireAuth
  }
`
