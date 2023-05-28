export const schema = gql`
  type Comment {
    id: Int!
    commenter: User!
    commenterID: Int!
    post: Post!
    postID: Int!
    content: String!
    likedByUsers: [User]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    commenterID: Int!
    postID: Int!
    content: String!
  }

  input UpdateCommentInput {
    commenterID: Int
    postID: Int
    content: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
    addCommentLike(id: Int!): Comment! @requireAuth
    removeCommentLike(id: Int!): Comment! @requireAuth
  }
`
