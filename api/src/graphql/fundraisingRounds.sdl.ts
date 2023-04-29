export const schema = gql`
  type FundraisingRound {
    id: Int!
    startup: StartupFinancials!
    startupID: Int!
    roundStage: FundingStage!
    capitalRaisedLacs: Float!
    valuationLacs: Float!
    keyInvestors: [String]!
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
    roundStage: FundingStage!
    capitalRaisedLacs: Float!
    valuationLacs: Float!
    keyInvestors: [String]!
  }

  input UpdateFundraisingRoundInput {
    startupID: Int
    roundStage: FundingStage
    capitalRaisedLacs: Float
    valuationLacs: Float
    keyInvestors: [String]!
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
