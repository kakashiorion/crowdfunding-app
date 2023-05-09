export const schema = gql`
  type Startup {
    id: Int!
    user: User!
    name: String!
    writeUp: String!
    dateIncorporated: DateTime!
    linkedInURL: String
    websiteURL: String
    locationID: Int!
    sectorCategoryID: Int!
    startupBackground: StartupBackground
    startupBusiness: StartupBusiness
    startupMarket: StartupMarket
    startupFinancials: StartupFinancials
    startupObjective: StartupObjective
    offers: [Offer]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    startups: [Startup!]! @requireAuth
    startup(id: Int!): Startup @requireAuth
  }

  input CreateStartupInput {
    name: String!
    writeUp: String!
    dateIncorporated: DateTime!
    linkedInURL: String
    websiteURL: String
    locationID: Int!
    sectorCategoryID: Int!
  }

  input UpdateStartupInput {
    name: String
    writeUp: String
    dateIncorporated: DateTime
    linkedInURL: String
    websiteURL: String
    locationID: Int
    sectorCategoryID: Int
  }

  type Mutation {
    createStartup(input: CreateStartupInput!): Startup! @requireAuth
    updateStartup(id: Int!, input: UpdateStartupInput!): Startup! @requireAuth
    deleteStartup(id: Int!): Startup! @requireAuth
  }
`
