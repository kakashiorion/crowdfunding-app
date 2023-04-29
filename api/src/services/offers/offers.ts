import type {
  QueryResolvers,
  MutationResolvers,
  OfferRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offers: QueryResolvers['offers'] = () => {
  return db.offer.findMany()
}

export const offer: QueryResolvers['offer'] = ({ id }) => {
  return db.offer.findUnique({
    where: { id },
  })
}

export const createOffer: MutationResolvers['createOffer'] = ({ input }) => {
  return db.offer.create({
    data: input,
  })
}

export const updateOffer: MutationResolvers['updateOffer'] = ({
  id,
  input,
}) => {
  return db.offer.update({
    data: input,
    where: { id },
  })
}

export const deleteOffer: MutationResolvers['deleteOffer'] = ({ id }) => {
  return db.offer.delete({
    where: { id },
  })
}

export const Offer: OfferRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).startup()
  },
  bids: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).bids()
  },
  successfulInvestors: (_obj, { root }) => {
    return db.offer
      .findUnique({ where: { id: root?.id } })
      .successfulInvestors()
  },
}
