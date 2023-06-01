export const schema = gql`
  type Location {
    id: Int!
    state: String!
    city: String
    lat: Float
    long: Float
    startups: [Startup]!
    investors: [Investor]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: Int!): Location @requireAuth
    getLocationID(state: String!, city: String): Location @requireAuth
  }

  input CreateLocationInput {
    state: String!
    city: String
    lat: Float
    long: Float
  }

  input UpdateLocationInput {
    state: String
    city: String
    lat: Float
    long: Float
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: Int!): Location! @requireAuth
  }
`
