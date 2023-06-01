export const schema = gql`
  type SectorCategory {
    id: Int!
    sector: Sector!
    category: String!
    startup: [Startup]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Sector {
    EDUCATION
    HEALTHCARE
    BANKING_AND_FINANCE
    ENERGY
    RETAIL
    REAL_ESTATE
    INFORMATION_TECHNOLOGY
    SCIENCE_AND_TECHNOLOGY
    AGRICULTURE
    MANUFACTURING
    MEDIA_AND_ENTERTAINMENT
    TELECOMMUNICATIONS
    TRANSPORTATION
    FOOD_AND_TOURISM
    OTHER
  }

  type Query {
    sectorCategories: [SectorCategory!]! @requireAuth
    sectorCategory(id: Int!): SectorCategory @requireAuth
    getSectorCategoryID(sector: Sector!, category: String!): SectorCategory
      @requireAuth
  }

  input CreateSectorCategoryInput {
    sector: Sector!
    category: String!
  }

  input UpdateSectorCategoryInput {
    sector: Sector
    category: String
  }

  type Mutation {
    createSectorCategory(input: CreateSectorCategoryInput!): SectorCategory!
      @requireAuth
    updateSectorCategory(
      id: Int!
      input: UpdateSectorCategoryInput!
    ): SectorCategory! @requireAuth
    deleteSectorCategory(id: Int!): SectorCategory! @requireAuth
  }
`
