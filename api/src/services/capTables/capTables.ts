import type {
  QueryResolvers,
  MutationResolvers,
  CapTableRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const capTables: QueryResolvers['capTables'] = () => {
  return db.capTable.findMany()
}

export const capTable: QueryResolvers['capTable'] = ({ id }) => {
  return db.capTable.findUnique({
    where: { id },
  })
}

export const createCapTable: MutationResolvers['createCapTable'] = ({
  input,
}) => {
  return db.capTable.create({
    data: input,
  })
}

export const updateCapTable: MutationResolvers['updateCapTable'] = ({
  id,
  input,
}) => {
  return db.capTable.update({
    data: input,
    where: { id },
  })
}

export const deleteCapTable: MutationResolvers['deleteCapTable'] = ({ id }) => {
  return db.capTable.delete({
    where: { id },
  })
}

export const CapTable: CapTableRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.capTable.findUnique({ where: { id: root?.id } }).startup()
  },
}
