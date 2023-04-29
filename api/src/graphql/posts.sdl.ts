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
    createdAt: DateTime!
    updatedAt: DateTime!
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
  }

  input UpdatePostInput {
    posterID: Int
    title: String
    writeup: String
    attachmentURL: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
