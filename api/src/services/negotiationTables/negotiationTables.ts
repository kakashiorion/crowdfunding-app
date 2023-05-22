import type {
  QueryResolvers,
  MutationResolvers,
  NegotiationTableRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const negotiationTables: QueryResolvers['negotiationTables'] = () => {
  return db.negotiationTable.findMany()
}

export const negotiationTable: QueryResolvers['negotiationTable'] = ({
  id,
}) => {
  return db.negotiationTable.findUnique({
    where: { id },
  })
}

export const createNegotiationTable: MutationResolvers['createNegotiationTable'] =
  ({ input }) => {
    return db.negotiationTable.create({
      data: input,
    })
  }

export const updateNegotiationTable: MutationResolvers['updateNegotiationTable'] =
  ({ id, input }) => {
    return db.negotiationTable.update({
      data: input,
      where: { id },
    })
  }

export const deleteNegotiationTable: MutationResolvers['deleteNegotiationTable'] =
  ({ id }) => {
    return db.negotiationTable.delete({
      where: { id },
    })
  }

export const NegotiationTable: NegotiationTableRelationResolvers = {
  offerRoom: (_obj, { root }) => {
    return db.negotiationTable
      .findUnique({ where: { id: root?.id } })
      .offerRoom()
  },
  negotiators: (_obj, { root }) => {
    return db.negotiationTable
      .findUnique({ where: { id: root?.id } })
      .negotiators()
  },
  negotiationMessages: (_obj, { root }) => {
    return db.negotiationTable
      .findUnique({ where: { id: root?.id } })
      .negotiationMessages()
  },
}
