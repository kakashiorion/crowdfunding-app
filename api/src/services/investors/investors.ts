import type {
  QueryResolvers,
  MutationResolvers,
  InvestorRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investors: QueryResolvers['investors'] = () => {
  return db.investor.findMany()
}

export const investor: QueryResolvers['investor'] = ({ id }) => {
  return db.investor.findUnique({
    where: { id },
  })
}

export const createInvestor: MutationResolvers['createInvestor'] = ({
  input,
}) => {
  return db.investor.create({
    data: input,
  })
}

export const updateInvestor: MutationResolvers['updateInvestor'] = ({
  id,
  input,
}) => {
  return db.investor.update({
    data: input,
    where: { id },
  })
}

export const deleteInvestor: MutationResolvers['deleteInvestor'] = ({ id }) => {
  return db.investor.delete({
    where: { id },
  })
}

export const Investor: InvestorRelationResolvers = {
  user: (_obj, { root }) => {
    return db.investor.findUnique({ where: { id: root?.id } }).user()
  },
  investorExp: (_obj, { root }) => {
    return db.investor.findUnique({ where: { id: root?.id } }).investorExp()
  },
  investorMotive: (_obj, { root }) => {
    return db.investor.findUnique({ where: { id: root?.id } }).investorMotive()
  },
  investorPref: (_obj, { root }) => {
    return db.investor.findUnique({ where: { id: root?.id } }).investorPref()
  },
  bids: (_obj, { root }) => {
    return db.investor.findUnique({ where: { id: root?.id } }).bids()
  },
  successfulOffers: (_obj, { root }) => {
    return db.investor
      .findUnique({ where: { id: root?.id } })
      .successfulOffers()
  },
}
