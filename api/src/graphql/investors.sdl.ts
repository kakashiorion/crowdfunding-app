export const schema = gql`
  type Investor {
    id: Int!
    user: User!
    name: String!
    dateOfBirth: DateTime
    locationID: Int!
    linkedInURL: String
    websiteURL: String
    eduBG: EducationBG!
    yearsOfWorkEx: SizeRange!
    numberOfCompanies: SizeRange!
    workedInSectors: [Sector]!
    investorExp: InvestorExperience
    investorObjective: InvestorObjective
    participatingInOffers: [OfferRoom]!
    waitingInRoomQueues: [OfferRoom]!
    kickedFromOffers: [OfferRoom]!
    negotiatingOffers: [NegotiationTable]!
    dealsJoined: [Deal]!
    askedQuestions: [OfferQuestion]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum EducationBG {
    HIGH_SCHOOL
    BACHELORS
    MASTERS
    PHD
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
  }

  enum SizeRange {
    NONE
    ONE_TO_THREE
    THREE_TO_TEN
    TEN_TO_TWENTY
    MORE_THAN_TWENTY
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
    investors: [Investor!]! @requireAuth
    investor(id: Int!): Investor @requireAuth
  }

  input CreateInvestorInput {
    id: Int!
    name: String!
    dateOfBirth: DateTime
    locationID: Int!
    linkedInURL: String
    websiteURL: String
    eduBG: EducationBG!
    yearsOfWorkEx: SizeRange!
    numberOfCompanies: SizeRange!
    workedInSectors: [Sector]!
  }

  input UpdateInvestorInput {
    name: String
    dateOfBirth: DateTime
    locationID: Int
    linkedInURL: String
    websiteURL: String
    eduBG: EducationBG
    yearsOfWorkEx: SizeRange
    numberOfCompanies: SizeRange
    workedInSectors: [Sector]!
  }

  type Mutation {
    createInvestor(input: CreateInvestorInput!): Investor! @requireAuth
    updateInvestor(id: Int!, input: UpdateInvestorInput!): Investor!
      @requireAuth
    deleteInvestor(id: Int!): Investor! @requireAuth
  }
`
