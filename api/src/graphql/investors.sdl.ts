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
    NONE
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
