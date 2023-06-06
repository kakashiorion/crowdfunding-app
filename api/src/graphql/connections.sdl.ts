export const schema = gql`
  type Connection {
    id: Int!
    users: [User]!
    status: ConnectionStatus!
    requester: User!
    requesterID: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum ConnectionStatus {
    PENDING
    ACCEPTED
    REJECTED
  }

  type Query {
    connections: [Connection!]! @requireAuth
    recentInvestorsConnections: [Connection!]! @requireAuth
    recentStartupInvestorConnections: [Connection!]! @requireAuth
    connection(id: Int!): Connection @requireAuth
    myConnections: [Connection!]! @requireAuth
  }

  input CreateConnectionInput {
    requesterID: Int!
    accepterID: Int!
  }

  input UpdateConnectionInput {
    status: ConnectionStatus
    requesterID: Int
  }

  type Mutation {
    createConnection(input: CreateConnectionInput!): Connection! @requireAuth
    updateConnection(id: Int!, input: UpdateConnectionInput!): Connection!
      @requireAuth
    deleteConnection(id: Int!): Connection! @requireAuth
  }
`
