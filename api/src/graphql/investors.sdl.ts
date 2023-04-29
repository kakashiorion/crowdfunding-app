export const schema = gql`
  type Investor {
    id: Int!
    user: User!
    firstName: String!
    lastName: String!
    dateOfBirth: DateTime!
    linkedInURL: String
    websiteURL: String
    locationID: Int!
    eduBG: EducationBG
    yearsOfWorkEx: Int
    numberOfCompanies: Int
    workedInSectors: [Int]!
    investorExp: InvestorExperience
    investorMotive: InvestorMotive
    investorPref: InvestorPreferences
    bids: [Bid]!
    successfulOffers: [Offer]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum EducationBG {
    HIGH_SCHOOL
    BACHELORS
    MASTERS
    PHD
  }

  type Query {
    investors: [Investor!]! @requireAuth
    investor(id: Int!): Investor @requireAuth
  }

  input CreateInvestorInput {
    firstName: String!
    lastName: String!
    dateOfBirth: DateTime!
    linkedInURL: String
    websiteURL: String
    locationID: Int!
    eduBG: EducationBG
    yearsOfWorkEx: Int
    numberOfCompanies: Int
    workedInSectors: [Int]!
  }

  input UpdateInvestorInput {
    firstName: String
    lastName: String
    dateOfBirth: DateTime
    linkedInURL: String
    websiteURL: String
    locationID: Int
    eduBG: EducationBG
    yearsOfWorkEx: Int
    numberOfCompanies: Int
    workedInSectors: [Int]!
  }

  type Mutation {
    createInvestor(input: CreateInvestorInput!): Investor! @requireAuth
    updateInvestor(id: Int!, input: UpdateInvestorInput!): Investor!
      @requireAuth
    deleteInvestor(id: Int!): Investor! @requireAuth
  }
`
