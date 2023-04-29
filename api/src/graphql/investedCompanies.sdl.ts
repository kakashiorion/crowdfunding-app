export const schema = gql`
  type InvestedCompany {
    id: Int!
    investor: InvestorExperience!
    investorID: Int!
    companyName: String!
    industrySectorID: Int!
    fundingStage: FundingStage!
    fundingAmountLacs: AmountRange
    fundingReason: String
    hasExited: Boolean!
    expectedReturnsMult: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum FundingStage {
    SEED
    SERIES_A
    SERIES_B
    SERIES_C
    SERIES_D
    SERIES_E
    SERIES_F
    LATER
  }

  enum AmountRange {
    LESS_THAN_1_LAC
    LACS_1_TO_5
    LACS_5_TO_20
    LACS_20_TO_99
    MORE_THAN_1_CRORE
  }

  type Query {
    investedCompanies: [InvestedCompany!]! @requireAuth
    investedCompany(id: Int!): InvestedCompany @requireAuth
  }

  input CreateInvestedCompanyInput {
    investorID: Int!
    companyName: String!
    industrySectorID: Int!
    fundingStage: FundingStage!
    fundingAmountLacs: AmountRange
    fundingReason: String
    hasExited: Boolean!
    expectedReturnsMult: Int
  }

  input UpdateInvestedCompanyInput {
    investorID: Int
    companyName: String
    industrySectorID: Int
    fundingStage: FundingStage
    fundingAmountLacs: AmountRange
    fundingReason: String
    hasExited: Boolean
    expectedReturnsMult: Int
  }

  type Mutation {
    createInvestedCompany(input: CreateInvestedCompanyInput!): InvestedCompany!
      @requireAuth
    updateInvestedCompany(
      id: Int!
      input: UpdateInvestedCompanyInput!
    ): InvestedCompany! @requireAuth
    deleteInvestedCompany(id: Int!): InvestedCompany! @requireAuth
  }
`
