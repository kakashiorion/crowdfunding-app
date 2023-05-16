export const schema = gql`
  type LandingContact {
    id: Int!
    email: String!
    query: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    landingContacts: [LandingContact!]! @requireAuth
    landingContact(id: Int!): LandingContact @requireAuth
  }

  input CreateLandingContactInput {
    email: String!
    query: String!
  }

  input UpdateLandingContactInput {
    email: String
    query: String
  }

  type Mutation {
    createLandingContact(input: CreateLandingContactInput!): LandingContact!
      @requireAuth
    updateLandingContact(
      id: Int!
      input: UpdateLandingContactInput!
    ): LandingContact! @requireAuth
    deleteLandingContact(id: Int!): LandingContact! @requireAuth
  }
`
