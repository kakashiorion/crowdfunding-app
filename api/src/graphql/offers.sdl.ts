export const schema = gql`
  type Offer {
    id: Int!
    startupID: Int!
    startup: Startup!
    capitalTargetLacs: Float!
    equityBeingIssued: Float!
    minTicketSizeLacs: Float!
    maxTicketSizeLacs: Float!
    fundingStage: FundingStage
    numberOfInvestors: Int!
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    offerRoom: OfferRoom
    successfulDealers: [Deal]!
    status: OfferStatus!
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

  enum OfferStatus {
    CREATED
    EXCEEDED
    DISCARDED
    CLOSED
  }

  type Query {
    offers: [Offer!]! @requireAuth
    offer(id: Int!): Offer @requireAuth
  }

  input CreateOfferInput {
    startupID: Int!
    capitalTargetLacs: Float!
    equityBeingIssued: Float!
    minTicketSizeLacs: Float!
    maxTicketSizeLacs: Float!
    fundingStage: FundingStage
    numberOfInvestors: Int!
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    status: OfferStatus!
  }

  input UpdateOfferInput {
    startupID: Int
    capitalTargetLacs: Float
    equityBeingIssued: Float
    minTicketSizeLacs: Float
    maxTicketSizeLacs: Float
    fundingStage: FundingStage
    numberOfInvestors: Int
    willUseFundsFor: [String]!
    needHelpWith: [String]!
    status: OfferStatus
  }

  type Mutation {
    createOffer(input: CreateOfferInput!): Offer! @requireAuth
    updateOffer(id: Int!, input: UpdateOfferInput!): Offer! @requireAuth
    deleteOffer(id: Int!): Offer! @requireAuth
  }
`
