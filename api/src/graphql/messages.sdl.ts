export const schema = gql`
  type Message {
    id: Int!
    conversation: Conversation!
    conversationID: Int!
    sender: User!
    senderID: Int!
    receiver: User!
    receiverID: Int!
    content: String!
    attachmentURL: String
    unread: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    conversationID: Int!
    senderID: Int!
    receiverID: Int!
    content: String!
    attachmentURL: String
    unread: Boolean!
  }

  input UpdateMessageInput {
    conversationID: Int
    senderID: Int
    receiverID: Int
    content: String
    attachmentURL: String
    unread: Boolean
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
