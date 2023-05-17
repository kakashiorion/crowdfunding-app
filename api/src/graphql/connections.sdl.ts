export const schema = gql`
  type Connection {
    id: Int!
    requestingUser: User!
    requesterID: Int!
    acceptingUser: User!
    accepterID: Int!
    status: ConnectionStatus!
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
    connectionsByUserId: [Connection!]! @requireAuth
    connection(id: Int!): Connection @requireAuth
  }

  input CreateConnectionInput {
    requesterID: Int!
    accepterID: Int!
    status: ConnectionStatus!
  }

  input UpdateConnectionInput {
    requesterID: Int
    accepterID: Int
    status: ConnectionStatus
  }

  type Mutation {
    createConnection(input: CreateConnectionInput!): Connection! @requireAuth
    updateConnection(id: Int!, input: UpdateConnectionInput!): Connection!
      @requireAuth
    deleteConnection(id: Int!): Connection! @requireAuth
  }
`
