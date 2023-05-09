import type {
  QueryResolvers,
  MutationResolvers,
  StartupFinancialsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupFinancialses: QueryResolvers['startupFinancialses'] =
  () => {
    return db.startupFinancials.findMany()
  }

export const startupFinancials: QueryResolvers['startupFinancials'] = ({
  id,
}) => {
  return db.startupFinancials.findUnique({
    where: { id },
  })
}

export const createStartupFinancials: MutationResolvers['createStartupFinancials'] =
  ({ input }) => {
    return db.startupFinancials.create({
      data: input,
    })
  }

export const updateStartupFinancials: MutationResolvers['updateStartupFinancials'] =
  ({ id, input }) => {
    return db.startupFinancials.update({
      data: input,
      where: { id },
    })
  }

export const deleteStartupFinancials: MutationResolvers['deleteStartupFinancials'] =
  ({ id }) => {
    return db.startupFinancials.delete({
      where: { id },
    })
  }

export const StartupFinancials: StartupFinancialsRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupFinancials
      .findUnique({ where: { id: root?.id } })
      .startup()
  },
  latestCapTable: (_obj, { root }) => {
    return db.startupFinancials
      .findUnique({ where: { id: root?.id } })
      .latestCapTable()
  },
  fundraisingRounds: (_obj, { root }) => {
    return db.startupFinancials
      .findUnique({ where: { id: root?.id } })
      .fundraisingRounds()
  },
}
