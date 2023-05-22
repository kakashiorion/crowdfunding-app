export const schema = gql`
  type DirectConversation {
    id: Int!
    users: [User]!
    messages: [DirectMessage]!
    isActive: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    directConversations: [DirectConversation!]! @requireAuth
    directConversation(id: Int!): DirectConversation @requireAuth
  }

  input CreateDirectConversationInput {
    isActive: Boolean!
  }

  input UpdateDirectConversationInput {
    isActive: Boolean
  }

  type Mutation {
    createDirectConversation(
      input: CreateDirectConversationInput!
    ): DirectConversation! @requireAuth
    updateDirectConversation(
      id: Int!
      input: UpdateDirectConversationInput!
    ): DirectConversation! @requireAuth
    deleteDirectConversation(id: Int!): DirectConversation! @requireAuth
  }
`
