export const schema = gql`
  type RoomGroupMessage {
    id: Int!
    offerRoom: OfferRoom!
    offerRoomId: Int!
    sender: User!
    senderID: Int!
    content: String!
    attachmentURL: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    roomGroupMessages: [RoomGroupMessage!]! @requireAuth
    roomGroupMessage(id: Int!): RoomGroupMessage @requireAuth
  }

  input CreateRoomGroupMessageInput {
    offerRoomId: Int!
    senderID: Int!
    content: String!
    attachmentURL: String
  }

  input UpdateRoomGroupMessageInput {
    offerRoomId: Int
    senderID: Int
    content: String
    attachmentURL: String
  }

  type Mutation {
    createRoomGroupMessage(
      input: CreateRoomGroupMessageInput!
    ): RoomGroupMessage! @requireAuth
    updateRoomGroupMessage(
      id: Int!
      input: UpdateRoomGroupMessageInput!
    ): RoomGroupMessage! @requireAuth
    deleteRoomGroupMessage(id: Int!): RoomGroupMessage! @requireAuth
  }
`
