import type {
  QueryResolvers,
  MutationResolvers,
  FundraisingRoundRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const fundraisingRounds: QueryResolvers['fundraisingRounds'] = () => {
  return db.fundraisingRound.findMany()
}

export const fundraisingRound: QueryResolvers['fundraisingRound'] = ({
  id,
}) => {
  return db.fundraisingRound.findUnique({
    where: { id },
  })
}

export const createFundraisingRound: MutationResolvers['createFundraisingRound'] =
  ({ input }) => {
    return db.fundraisingRound.create({
      data: input,
    })
  }

export const updateFundraisingRound: MutationResolvers['updateFundraisingRound'] =
  ({ id, input }) => {
    return db.fundraisingRound.update({
      data: input,
      where: { id },
    })
  }

export const deleteFundraisingRound: MutationResolvers['deleteFundraisingRound'] =
  ({ id }) => {
    return db.fundraisingRound.delete({
      where: { id },
    })
  }

export const FundraisingRound: FundraisingRoundRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.fundraisingRound.findUnique({ where: { id: root?.id } }).startup()
  },
}
