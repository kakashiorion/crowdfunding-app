export const schema = gql`
  type BidQuestion {
    id: Int!
    bid: Bid!
    bidID: Int!
    question: String!
    answered: Boolean!
    answer: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    bidQuestions: [BidQuestion!]! @requireAuth
    bidQuestion(id: Int!): BidQuestion @requireAuth
  }

  input CreateBidQuestionInput {
    bidID: Int!
    question: String!
    answered: Boolean!
    answer: String
  }

  input UpdateBidQuestionInput {
    bidID: Int
    question: String
    answered: Boolean
    answer: String
  }

  type Mutation {
    createBidQuestion(input: CreateBidQuestionInput!): BidQuestion! @requireAuth
    updateBidQuestion(id: Int!, input: UpdateBidQuestionInput!): BidQuestion!
      @requireAuth
    deleteBidQuestion(id: Int!): BidQuestion! @requireAuth
  }
`
