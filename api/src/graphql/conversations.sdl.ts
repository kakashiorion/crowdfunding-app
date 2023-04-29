export const schema = gql`
  type Conversation {
    id: Int!
    conversationStarter: User!
    conversationStarterID: Int!
    conversationResponder: User!
    conversationResponderID: Int!
    messages: [Message]!
    isFavoriteByStarter: Boolean!
    isFavoriteByResponder: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    conversations: [Conversation!]! @requireAuth
    conversation(id: Int!): Conversation @requireAuth
  }

  input CreateConversationInput {
    conversationStarterID: Int!
    conversationResponderID: Int!
    isFavoriteByStarter: Boolean!
    isFavoriteByResponder: Boolean!
  }

  input UpdateConversationInput {
    conversationStarterID: Int
    conversationResponderID: Int
    isFavoriteByStarter: Boolean
    isFavoriteByResponder: Boolean
  }

  type Mutation {
    createConversation(input: CreateConversationInput!): Conversation!
      @requireAuth
    updateConversation(
      id: Int!
      input: UpdateConversationInput!
    ): Conversation! @requireAuth
    deleteConversation(id: Int!): Conversation! @requireAuth
  }
`
