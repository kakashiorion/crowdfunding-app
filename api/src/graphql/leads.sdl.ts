export const schema = gql`
  type Lead {
    id: Int!
    email: String!
    gToken: String!
    type: UserType!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum UserType {
    INVESTOR
    STARTUP
    ADMIN
    GUEST
  }

  type Query {
    leads: [Lead!]! @requireAuth
    lead(id: Int!): Lead @requireAuth
  }

  input CreateLeadInput {
    email: String!
    gToken: String!
    type: UserType!
  }

  input UpdateLeadInput {
    email: String
    gToken: String
    type: UserType
  }

  type Mutation {
    createLead(input: CreateLeadInput!): Lead! @requireAuth
    updateLead(id: Int!, input: UpdateLeadInput!): Lead! @requireAuth
    deleteLead(id: Int!): Lead! @requireAuth
  }
`
