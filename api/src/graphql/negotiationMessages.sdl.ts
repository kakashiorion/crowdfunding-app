export const schema = gql`
  type NegotiationMessage {
    id: Int!
    negotiationTable: NegotiationTable!
    negotiationTableID: Int!
    sender: User!
    senderID: Int!
    content: String!
    attachmentURL: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    negotiationMessages: [NegotiationMessage!]! @requireAuth
    negotiationMessage(id: Int!): NegotiationMessage @requireAuth
  }

  input CreateNegotiationMessageInput {
    negotiationTableID: Int!
    senderID: Int!
    content: String!
    attachmentURL: String
  }

  input UpdateNegotiationMessageInput {
    negotiationTableID: Int
    senderID: Int
    content: String
    attachmentURL: String
  }

  type Mutation {
    createNegotiationMessage(
      input: CreateNegotiationMessageInput!
    ): NegotiationMessage! @requireAuth
    updateNegotiationMessage(
      id: Int!
      input: UpdateNegotiationMessageInput!
    ): NegotiationMessage! @requireAuth
    deleteNegotiationMessage(id: Int!): NegotiationMessage! @requireAuth
  }
`
