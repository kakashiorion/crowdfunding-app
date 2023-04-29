import type {
  QueryResolvers,
  MutationResolvers,
  InvestorMotiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investorMotives: QueryResolvers['investorMotives'] = () => {
  return db.investorMotive.findMany()
}

export const investorMotive: QueryResolvers['investorMotive'] = ({ id }) => {
  return db.investorMotive.findUnique({
    where: { id },
  })
}

export const createInvestorMotive: MutationResolvers['createInvestorMotive'] =
  ({ input }) => {
    return db.investorMotive.create({
      data: input,
    })
  }

export const updateInvestorMotive: MutationResolvers['updateInvestorMotive'] =
  ({ id, input }) => {
    return db.investorMotive.update({
      data: input,
      where: { id },
    })
  }

export const deleteInvestorMotive: MutationResolvers['deleteInvestorMotive'] =
  ({ id }) => {
    return db.investorMotive.delete({
      where: { id },
    })
  }

export const InvestorMotive: InvestorMotiveRelationResolvers = {
  investor: (_obj, { root }) => {
    return db.investorMotive.findUnique({ where: { id: root?.id } }).investor()
  },
}
