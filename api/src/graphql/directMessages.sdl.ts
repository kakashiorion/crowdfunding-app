export const schema = gql`
  type DirectMessage {
    id: Int!
    conversation: DirectConversation!
    conversationID: Int!
    sender: User!
    senderID: Int!
    content: String!
    attachmentURL: String
    unread: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    directMessages: [DirectMessage!]! @requireAuth
    directMessage(id: Int!): DirectMessage @requireAuth
  }

  input CreateDirectMessageInput {
    conversationID: Int!
    senderID: Int!
    content: String!
    attachmentURL: String
    unread: Boolean!
  }

  input UpdateDirectMessageInput {
    conversationID: Int
    senderID: Int
    content: String
    attachmentURL: String
    unread: Boolean
  }

  type Mutation {
    createDirectMessage(input: CreateDirectMessageInput!): DirectMessage!
      @requireAuth
    updateDirectMessage(
      id: Int!
      input: UpdateDirectMessageInput!
    ): DirectMessage! @requireAuth
    deleteDirectMessage(id: Int!): DirectMessage! @requireAuth
  }
`
