export const schema = gql`
  type CapTable {
    id: Int!
    startupFinancials: StartupFinancials!
    startupFinancialsID: Int!
    shareholderName: String!
    equityShare: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    capTables: [CapTable!]! @requireAuth
    capTable(id: Int!): CapTable @requireAuth
  }

  input CreateCapTableInput {
    startupFinancialsID: Int!
    shareholderName: String!
    equityShare: Float!
  }

  input UpdateCapTableInput {
    startupFinancialsID: Int
    shareholderName: String
    equityShare: Float
  }

  type Mutation {
    createCapTable(input: CreateCapTableInput!): CapTable! @requireAuth
    updateCapTable(id: Int!, input: UpdateCapTableInput!): CapTable!
      @requireAuth
    deleteCapTable(id: Int!): CapTable! @requireAuth
  }
`
