export const schema = gql`
  type Bid {
    id: Int!
    offer: Offer!
    offerID: Int!
    investor: Investor!
    investorID: Int!
    status: BidStatus!
    rebid: Boolean!
    capitalAvailable: Float!
    equityNeeded: Float!
    counterCapital: Float
    counterEquity: Float
    canHelpWith: [String]!
    questions: [BidQuestion]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum BidStatus {
    CREATED
    COUNTER
    ACCEPTED
    DECLINED
  }

  type Query {
    bids: [Bid!]! @requireAuth
    bid(id: Int!): Bid @requireAuth
  }

  input CreateBidInput {
    offerID: Int!
    investorID: Int!
    status: BidStatus!
    rebid: Boolean!
    capitalAvailable: Float!
    equityNeeded: Float!
    counterCapital: Float
    counterEquity: Float
    canHelpWith: [String]!
  }

  input UpdateBidInput {
    offerID: Int
    investorID: Int
    status: BidStatus
    rebid: Boolean
    capitalAvailable: Float
    equityNeeded: Float
    counterCapital: Float
    counterEquity: Float
    canHelpWith: [String]!
  }

  type Mutation {
    createBid(input: CreateBidInput!): Bid! @requireAuth
    updateBid(id: Int!, input: UpdateBidInput!): Bid! @requireAuth
    deleteBid(id: Int!): Bid! @requireAuth
  }
`
