import type {
  QueryResolvers,
  MutationResolvers,
  OfferQuestionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offerQuestions: QueryResolvers['offerQuestions'] = () => {
  return db.offerQuestion.findMany()
}

export const offerQuestion: QueryResolvers['offerQuestion'] = ({ id }) => {
  return db.offerQuestion.findUnique({
    where: { id },
  })
}

export const createOfferQuestion: MutationResolvers['createOfferQuestion'] = ({
  input,
}) => {
  return db.offerQuestion.create({
    data: input,
  })
}

export const updateOfferQuestion: MutationResolvers['updateOfferQuestion'] = ({
  id,
  input,
}) => {
  return db.offerQuestion.update({
    data: input,
    where: { id },
  })
}

export const deleteOfferQuestion: MutationResolvers['deleteOfferQuestion'] = ({
  id,
}) => {
  return db.offerQuestion.delete({
    where: { id },
  })
}

export const OfferQuestion: OfferQuestionRelationResolvers = {
  offerRoom: (_obj, { root }) => {
    return db.offerQuestion.findUnique({ where: { id: root?.id } }).offerRoom()
  },
  asker: (_obj, { root }) => {
    return db.offerQuestion.findUnique({ where: { id: root?.id } }).asker()
  },
}
