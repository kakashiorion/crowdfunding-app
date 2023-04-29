import type {
  QueryResolvers,
  MutationResolvers,
  StartupBusinessRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupBusinesses: QueryResolvers['startupBusinesses'] = () => {
  return db.startupBusiness.findMany()
}

export const startupBusiness: QueryResolvers['startupBusiness'] = ({ id }) => {
  return db.startupBusiness.findUnique({
    where: { id },
  })
}

export const createStartupBusiness: MutationResolvers['createStartupBusiness'] =
  ({ input }) => {
    return db.startupBusiness.create({
      data: input,
    })
  }

export const updateStartupBusiness: MutationResolvers['updateStartupBusiness'] =
  ({ id, input }) => {
    return db.startupBusiness.update({
      data: input,
      where: { id },
    })
  }

export const deleteStartupBusiness: MutationResolvers['deleteStartupBusiness'] =
  ({ id }) => {
    return db.startupBusiness.delete({
      where: { id },
    })
  }

export const StartupBusiness: StartupBusinessRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupBusiness.findUnique({ where: { id: root?.id } }).startup()
  },
}
