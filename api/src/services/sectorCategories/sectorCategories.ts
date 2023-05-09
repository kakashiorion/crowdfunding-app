import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const sectorCategories: QueryResolvers['sectorCategories'] = () => {
  return db.sectorCategory.findMany()
}

export const sectorCategory: QueryResolvers['sectorCategory'] = ({ id }) => {
  return db.sectorCategory.findUnique({
    where: { id },
  })
}

export const createSectorCategory: MutationResolvers['createSectorCategory'] =
  ({ input }) => {
    return db.sectorCategory.create({
      data: input,
    })
  }

export const updateSectorCategory: MutationResolvers['updateSectorCategory'] =
  ({ id, input }) => {
    return db.sectorCategory.update({
      data: input,
      where: { id },
    })
  }

export const deleteSectorCategory: MutationResolvers['deleteSectorCategory'] =
  ({ id }) => {
    return db.sectorCategory.delete({
      where: { id },
    })
  }
