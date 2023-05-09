export const schema = gql`
  type FundraisingRound {
    id: Int!
    startup: StartupFinancials!
    startupID: Int!
    fundingStage: FundingStage!
    capitalRaisedInCr: Float!
    valuationInCr: Float!
    keyInvestors: String
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

  type Query {
    fundraisingRounds: [FundraisingRound!]! @requireAuth
    fundraisingRound(id: Int!): FundraisingRound @requireAuth
  }

  input CreateFundraisingRoundInput {
    startupID: Int!
    fundingStage: FundingStage!
    capitalRaisedInCr: Float!
    valuationInCr: Float!
    keyInvestors: String
  }

  input UpdateFundraisingRoundInput {
    startupID: Int
    fundingStage: FundingStage
    capitalRaisedInCr: Float
    valuationInCr: Float
    keyInvestors: String
  }

  type Mutation {
    createFundraisingRound(
      input: CreateFundraisingRoundInput!
    ): FundraisingRound! @requireAuth
    updateFundraisingRound(
      id: Int!
      input: UpdateFundraisingRoundInput!
    ): FundraisingRound! @requireAuth
    deleteFundraisingRound(id: Int!): FundraisingRound! @requireAuth
  }
`
