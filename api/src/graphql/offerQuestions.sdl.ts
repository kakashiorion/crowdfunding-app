export const schema = gql`
  type OfferQuestion {
    id: Int!
    offerRoom: OfferRoom!
    offerRoomID: Int!
    asker: Investor!
    askerID: Int!
    question: String!
    answered: Boolean!
    answer: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    offerQuestions: [OfferQuestion!]! @requireAuth
    offerQuestion(id: Int!): OfferQuestion @requireAuth
  }

  input CreateOfferQuestionInput {
    offerRoomID: Int!
    askerID: Int!
    question: String!
    answered: Boolean!
    answer: String
  }

  input UpdateOfferQuestionInput {
    offerRoomID: Int
    askerID: Int
    question: String
    answered: Boolean
    answer: String
  }

  type Mutation {
    createOfferQuestion(input: CreateOfferQuestionInput!): OfferQuestion!
      @requireAuth
    updateOfferQuestion(
      id: Int!
      input: UpdateOfferQuestionInput!
    ): OfferQuestion! @requireAuth
    deleteOfferQuestion(id: Int!): OfferQuestion! @requireAuth
  }
`
