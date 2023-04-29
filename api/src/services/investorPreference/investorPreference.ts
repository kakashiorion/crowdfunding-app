import type {
  QueryResolvers,
  MutationResolvers,
  InvestorPreferencesRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investorPreference: QueryResolvers['investorPreference'] = () => {
  return db.investorPreferences.findMany()
}

export const investorPreferences: QueryResolvers['investorPreferences'] = ({
  id,
}) => {
  return db.investorPreferences.findUnique({
    where: { id },
  })
}

export const createInvestorPreferences: MutationResolvers['createInvestorPreferences'] =
  ({ input }) => {
    return db.investorPreferences.create({
      data: input,
    })
  }

export const updateInvestorPreferences: MutationResolvers['updateInvestorPreferences'] =
  ({ id, input }) => {
    return db.investorPreferences.update({
      data: input,
      where: { id },
    })
  }

export const deleteInvestorPreferences: MutationResolvers['deleteInvestorPreferences'] =
  ({ id }) => {
    return db.investorPreferences.delete({
      where: { id },
    })
  }

export const InvestorPreferences: InvestorPreferencesRelationResolvers = {
  investor: (_obj, { root }) => {
    return db.investorPreferences
      .findUnique({ where: { id: root?.id } })
      .investor()
  },
}
