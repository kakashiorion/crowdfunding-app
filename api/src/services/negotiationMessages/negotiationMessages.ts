import type {
  QueryResolvers,
  MutationResolvers,
  NegotiationMessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const negotiationMessages: QueryResolvers['negotiationMessages'] =
  () => {
    return db.negotiationMessage.findMany()
  }

export const negotiationMessage: QueryResolvers['negotiationMessage'] = ({
  id,
}) => {
  return db.negotiationMessage.findUnique({
    where: { id },
  })
}

export const createNegotiationMessage: MutationResolvers['createNegotiationMessage'] =
  ({ input }) => {
    return db.negotiationMessage.create({
      data: input,
    })
  }

export const updateNegotiationMessage: MutationResolvers['updateNegotiationMessage'] =
  ({ id, input }) => {
    return db.negotiationMessage.update({
      data: input,
      where: { id },
    })
  }

export const deleteNegotiationMessage: MutationResolvers['deleteNegotiationMessage'] =
  ({ id }) => {
    return db.negotiationMessage.delete({
      where: { id },
    })
  }

export const NegotiationMessage: NegotiationMessageRelationResolvers = {
  negotiationTable: (_obj, { root }) => {
    return db.negotiationMessage
      .findUnique({ where: { id: root?.id } })
      .negotiationTable()
  },
  sender: (_obj, { root }) => {
    return db.negotiationMessage
      .findUnique({ where: { id: root?.id } })
      .sender()
  },
}
