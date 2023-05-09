import type {
  QueryResolvers,
  MutationResolvers,
  InvestorObjectiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const investorObjectives: QueryResolvers['investorObjectives'] = () => {
  return db.investorObjective.findMany()
}

export const investorObjective: QueryResolvers['investorObjective'] = ({
  id,
}) => {
  return db.investorObjective.findUnique({
    where: { id },
  })
}

export const createInvestorObjective: MutationResolvers['createInvestorObjective'] =
  ({ input }) => {
    return db.investorObjective.create({
      data: input,
    })
  }

export const updateInvestorObjective: MutationResolvers['updateInvestorObjective'] =
  ({ id, input }) => {
    return db.investorObjective.update({
      data: input,
      where: { id },
    })
  }

export const deleteInvestorObjective: MutationResolvers['deleteInvestorObjective'] =
  ({ id }) => {
    return db.investorObjective.delete({
      where: { id },
    })
  }

export const InvestorObjective: InvestorObjectiveRelationResolvers = {
  investor: (_obj, { root }) => {
    return db.investorObjective
      .findUnique({ where: { id: root?.id } })
      .investor()
  },
}
