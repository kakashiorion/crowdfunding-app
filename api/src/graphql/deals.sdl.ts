export const schema = gql`
  type Deal {
    id: Int!
    offerID: Int!
    offer: Offer!
    investorID: Int!
    investor: Investor!
    fundingAmountLacs: Float!
    isJoining: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    deals: [Deal!]! @requireAuth
    deal(id: Int!): Deal @requireAuth
  }

  input CreateDealInput {
    offerID: Int!
    investorID: Int!
    fundingAmountLacs: Float!
    isJoining: Boolean!
  }

  input UpdateDealInput {
    offerID: Int
    investorID: Int
    fundingAmountLacs: Float
    isJoining: Boolean
  }

  type Mutation {
    createDeal(input: CreateDealInput!): Deal! @requireAuth
    updateDeal(id: Int!, input: UpdateDealInput!): Deal! @requireAuth
    deleteDeal(id: Int!): Deal! @requireAuth
  }
`
