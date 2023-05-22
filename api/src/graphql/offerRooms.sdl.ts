export const schema = gql`
  type OfferRoom {
    id: Int!
    offer: Offer!
    isPublic: Boolean!
    passcode: String
    roomGroupMessages: [RoomGroupMessage]!
    participants: [Investor]!
    waitingList: [Investor]!
    kickedList: [Investor]!
    negotiationTable: NegotiationTable
    questions: [OfferQuestion]!
    resourceLinks: [String]!
    joinLimit: Int!
    timelineDays: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    offerRooms: [OfferRoom!]! @requireAuth
    offerRoom(id: Int!): OfferRoom @requireAuth
  }

  input CreateOfferRoomInput {
    isPublic: Boolean!
    passcode: String
    resourceLinks: [String]!
    joinLimit: Int!
    timelineDays: Int!
  }

  input UpdateOfferRoomInput {
    isPublic: Boolean
    passcode: String
    resourceLinks: [String]!
    joinLimit: Int
    timelineDays: Int
  }

  type Mutation {
    createOfferRoom(input: CreateOfferRoomInput!): OfferRoom! @requireAuth
    updateOfferRoom(id: Int!, input: UpdateOfferRoomInput!): OfferRoom!
      @requireAuth
    deleteOfferRoom(id: Int!): OfferRoom! @requireAuth
  }
`
