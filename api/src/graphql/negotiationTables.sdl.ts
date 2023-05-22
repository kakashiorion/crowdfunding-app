export const schema = gql`
  type NegotiationTable {
    id: Int!
    offerRoom: OfferRoom!
    negotiators: [Investor]!
    negotiationMessages: [NegotiationMessage]!
    isHidden: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    negotiationTables: [NegotiationTable!]! @requireAuth
    negotiationTable(id: Int!): NegotiationTable @requireAuth
  }

  input CreateNegotiationTableInput {
    isHidden: Boolean!
  }

  input UpdateNegotiationTableInput {
    isHidden: Boolean
  }

  type Mutation {
    createNegotiationTable(
      input: CreateNegotiationTableInput!
    ): NegotiationTable! @requireAuth
    updateNegotiationTable(
      id: Int!
      input: UpdateNegotiationTableInput!
    ): NegotiationTable! @requireAuth
    deleteNegotiationTable(id: Int!): NegotiationTable! @requireAuth
  }
`
