export const schema = gql`
  type Location {
    id: Int!
    state: String!
    city: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: Int!): Location @requireAuth
  }

  input CreateLocationInput {
    state: String!
    city: String!
  }

  input UpdateLocationInput {
    state: String
    city: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: Int!): Location! @requireAuth
  }
`
