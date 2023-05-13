export const schema = gql`
  type SectorCategory {
    id: Int!
    sector: Sector!
    category: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Sector {
    EDUCATION
    HEALTHCARE
    PHARMACEUTICALS
    BANKING_AND_FINANCE
    ENERGY
    CONSUMER_GOODS
    RETAIL_ECOMMERCE
    REAL_ESTATE
    FOOD_AND_BEVERAGE
    IT
    IOT
    AGRICULTURE
    MANUFACTURING
    FASHION
    MEDIA
    GAMING
    ENTERTAINMENT
    TELECOM
    LOGISTICS
    TRANSPORTATION
    AUTOMOTIVE
    AVIATION
    HEAVY_MACHINERY
    CHEMICAL
    CONSTRUCTION
    DEFENCE
    ELECTRONICS
    FISHERIES
    MINING
    BIOTECHNOLOGY
    LEGAL
    SPORTS_AND_FITNESS
    WASTE_MANAGEMENT
    WATER_MANAGEMENT
    TRAVEL_AND_HOSPITALITY
    SECURITY
    SOCIAL_SERVICE
    MARKETING
    HUMAN_RESOURCES
    BUSINESS_MANAGEMENT
    AUTOMATION
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
