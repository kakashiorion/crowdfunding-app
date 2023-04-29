export const schema = gql`
  type IndustrySector {
    id: Int!
    industry: Industry!
    sector: Sector!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Industry {
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

  enum Sector {
    AI
    AUTOMATION
  }

  type Query {
    industrySectors: [IndustrySector!]! @requireAuth
    industrySector(id: Int!): IndustrySector @requireAuth
  }

  input CreateIndustrySectorInput {
    industry: Industry!
    sector: Sector!
  }

  input UpdateIndustrySectorInput {
    industry: Industry
    sector: Sector
  }

  type Mutation {
    createIndustrySector(input: CreateIndustrySectorInput!): IndustrySector!
      @requireAuth
    updateIndustrySector(
      id: Int!
      input: UpdateIndustrySectorInput!
    ): IndustrySector! @requireAuth
    deleteIndustrySector(id: Int!): IndustrySector! @requireAuth
  }
`
