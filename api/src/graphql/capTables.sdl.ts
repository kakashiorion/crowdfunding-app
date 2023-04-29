export const schema = gql`
  type CapTable {
    id: Int!
    startup: StartupFinancials!
    startupID: Int!
    shareholder: String!
    equityShare: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    capTables: [CapTable!]! @requireAuth
    capTable(id: Int!): CapTable @requireAuth
  }

  input CreateCapTableInput {
    startupID: Int!
    shareholder: String!
    equityShare: Float!
  }

  input UpdateCapTableInput {
    startupID: Int
    shareholder: String
    equityShare: Float
  }

  type Mutation {
    createCapTable(input: CreateCapTableInput!): CapTable! @requireAuth
    updateCapTable(id: Int!, input: UpdateCapTableInput!): CapTable!
      @requireAuth
    deleteCapTable(id: Int!): CapTable! @requireAuth
  }
`
