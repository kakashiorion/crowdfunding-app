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

export const getStartupActiveOffer = () => {
  return db.offer.findFirst({
    where: {
      OR: [{ status: 'CREATED' }, { status: 'EXCEEDED' }],
      startupID: context.currentUser?.id,
    },
  })
}

export const getInvestorCurrentOffers = () => {
  return db.offer.findMany({
    where: {
      OR: [{ status: 'CREATED' }, { status: 'EXCEEDED' }],
      offerRoom: {
        OR: [
          {
            participants: {
              some: { id: context.currentUser?.id },
            },
          },
          {
            waitingList: {
              some: { id: context.currentUser?.id },
            },
          },
        ],
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })
}

export const getStartupPreviousOffers = () => {
  return db.offer.findMany({
    where: {
      OR: [{ status: 'CLOSED' }, { status: 'DISCARDED' }],
      startupID: context.currentUser?.id,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })
}

export const getInvestorPreviousOffers = () => {
  return db.offer.findMany({
    where: {
      OR: [{ status: 'CLOSED' }],
      successfulDealers: {
        some: { investorID: context.currentUser?.id },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })
}

export const createOffer: MutationResolvers['createOffer'] = ({ input }) => {
  return db.offer.create({
    data: { ...input, startupID: context.currentUser?.id, status: 'CREATED' },
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
  offerRoom: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).offerRoom()
  },
  successfulDealers: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).successfulDealers()
  },
}
