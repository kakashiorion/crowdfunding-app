export const schema = gql`
  type FundraisingRound {
    id: Int!
    startupFinancials: StartupFinancials!
    startupFinancialsID: Int!
    fundingStage: FundingStage!
    capitalRaisedInCr: Float!
    valuationInCr: Float!
    keyInvestors: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum FundingStage {
    PRE_SEED
    SEED
    SERIES_A
    SERIES_B
    SERIES_C
    SERIES_D
    SERIES_E
    LATER
  }

  type Query {
    fundraisingRounds: [FundraisingRound!]! @requireAuth
    fundraisingRound(id: Int!): FundraisingRound @requireAuth
  }

  input CreateFundraisingRoundInput {
    startupFinancialsID: Int!
    fundingStage: FundingStage!
    capitalRaisedInCr: Float!
    valuationInCr: Float!
    keyInvestors: String
  }

  input UpdateFundraisingRoundInput {
    startupFinancialsID: Int
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
