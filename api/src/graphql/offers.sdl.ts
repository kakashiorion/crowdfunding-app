export const schema = gql`
  type Offer {
    id: Int!
    startup: Startup!
    startupID: Int!
    bids: [Bid]!
    status: OfferStatus!
    extended: Boolean!
    capitalTargetLacs: Float!
    equityBeingIssued: Float!
    minTicketSizeLacs: Float!
    maxTicketSizeLacs: Float!
    fundingStage: FundingStage
    numberOfInvestors: Int
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    timelineDays: Int!
    successfulInvestors: [Investor]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum OfferStatus {
    CREATED
    EXCEEDED
    RAISED
    CLOSED
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
    offers: [Offer!]! @requireAuth
    offer(id: Int!): Offer @requireAuth
  }

  input CreateOfferInput {
    startupID: Int!
    status: OfferStatus!
    extended: Boolean!
    capitalTargetLacs: Float!
    equityBeingIssued: Float!
    minTicketSizeLacs: Float!
    maxTicketSizeLacs: Float!
    fundingStage: FundingStage
    numberOfInvestors: Int
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    timelineDays: Int!
  }

  input UpdateOfferInput {
    startupID: Int
    status: OfferStatus
    extended: Boolean
    capitalTargetLacs: Float
    equityBeingIssued: Float
    minTicketSizeLacs: Float
    maxTicketSizeLacs: Float
    fundingStage: FundingStage
    numberOfInvestors: Int
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    timelineDays: Int
  }

  type Mutation {
    createOffer(input: CreateOfferInput!): Offer! @requireAuth
    updateOffer(id: Int!, input: UpdateOfferInput!): Offer! @requireAuth
    deleteOffer(id: Int!): Offer! @requireAuth
  }
`
