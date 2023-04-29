import type {
  QueryResolvers,
  MutationResolvers,
  BidQuestionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bidQuestions: QueryResolvers['bidQuestions'] = () => {
  return db.bidQuestion.findMany()
}

export const bidQuestion: QueryResolvers['bidQuestion'] = ({ id }) => {
  return db.bidQuestion.findUnique({
    where: { id },
  })
}

export const createBidQuestion: MutationResolvers['createBidQuestion'] = ({
  input,
}) => {
  return db.bidQuestion.create({
    data: input,
  })
}

export const updateBidQuestion: MutationResolvers['updateBidQuestion'] = ({
  id,
  input,
}) => {
  return db.bidQuestion.update({
    data: input,
    where: { id },
  })
}

export const deleteBidQuestion: MutationResolvers['deleteBidQuestion'] = ({
  id,
}) => {
  return db.bidQuestion.delete({
    where: { id },
  })
}

export const BidQuestion: BidQuestionRelationResolvers = {
  bid: (_obj, { root }) => {
    return db.bidQuestion.findUnique({ where: { id: root?.id } }).bid()
  },
}
