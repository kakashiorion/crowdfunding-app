import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const industrySectors: QueryResolvers['industrySectors'] = () => {
  return db.industrySector.findMany()
}

export const industrySector: QueryResolvers['industrySector'] = ({ id }) => {
  return db.industrySector.findUnique({
    where: { id },
  })
}

export const createIndustrySector: MutationResolvers['createIndustrySector'] =
  ({ input }) => {
    return db.industrySector.create({
      data: input,
    })
  }

export const updateIndustrySector: MutationResolvers['updateIndustrySector'] =
  ({ id, input }) => {
    return db.industrySector.update({
      data: input,
      where: { id },
    })
  }

export const deleteIndustrySector: MutationResolvers['deleteIndustrySector'] =
  ({ id }) => {
    return db.industrySector.delete({
      where: { id },
    })
  }
