import type {
  QueryResolvers,
  MutationResolvers,
  DealRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const deals: QueryResolvers['deals'] = () => {
  return db.deal.findMany()
}

export const deal: QueryResolvers['deal'] = ({ id }) => {
  return db.deal.findUnique({
    where: { id },
  })
}

export const createDeal: MutationResolvers['createDeal'] = ({ input }) => {
  return db.deal.create({
    data: input,
  })
}

export const updateDeal: MutationResolvers['updateDeal'] = ({ id, input }) => {
  return db.deal.update({
    data: input,
    where: { id },
  })
}

export const deleteDeal: MutationResolvers['deleteDeal'] = ({ id }) => {
  return db.deal.delete({
    where: { id },
  })
}

export const Deal: DealRelationResolvers = {
  offer: (_obj, { root }) => {
    return db.deal.findUnique({ where: { id: root?.id } }).offer()
  },
  investor: (_obj, { root }) => {
    return db.deal.findUnique({ where: { id: root?.id } }).investor()
  },
}
