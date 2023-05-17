import type {
  QueryResolvers,
  MutationResolvers,
  BidRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bids: QueryResolvers['bids'] = () => {
  return db.bid.findMany()
}

export const bid: QueryResolvers['bid'] = ({ id }) => {
  return db.bid.findUnique({
    where: { id },
  })
}

export const bidsByUserId = () => {
  return db.bid.findMany({
    where: {
      investorID: context.currentUser?.id,
    },
  })
}

export const createBid: MutationResolvers['createBid'] = ({ input }) => {
  return db.bid.create({
    data: input,
  })
}

export const updateBid: MutationResolvers['updateBid'] = ({ id, input }) => {
  return db.bid.update({
    data: input,
    where: { id },
  })
}

export const deleteBid: MutationResolvers['deleteBid'] = ({ id }) => {
  return db.bid.delete({
    where: { id },
  })
}

export const Bid: BidRelationResolvers = {
  offer: (_obj, { root }) => {
    return db.bid.findUnique({ where: { id: root?.id } }).offer()
  },
  investor: (_obj, { root }) => {
    return db.bid.findUnique({ where: { id: root?.id } }).investor()
  },
  questions: (_obj, { root }) => {
    return db.bid.findUnique({ where: { id: root?.id } }).questions()
  },
}
