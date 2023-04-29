import type {
  QueryResolvers,
  MutationResolvers,
  StartupMotiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupMotives: QueryResolvers['startupMotives'] = () => {
  return db.startupMotive.findMany()
}

export const startupMotive: QueryResolvers['startupMotive'] = ({ id }) => {
  return db.startupMotive.findUnique({
    where: { id },
  })
}

export const createStartupMotive: MutationResolvers['createStartupMotive'] = ({
  input,
}) => {
  return db.startupMotive.create({
    data: input,
  })
}

export const updateStartupMotive: MutationResolvers['updateStartupMotive'] = ({
  id,
  input,
}) => {
  return db.startupMotive.update({
    data: input,
    where: { id },
  })
}

export const deleteStartupMotive: MutationResolvers['deleteStartupMotive'] = ({
  id,
}) => {
  return db.startupMotive.delete({
    where: { id },
  })
}

export const StartupMotive: StartupMotiveRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupMotive.findUnique({ where: { id: root?.id } }).startup()
  },
}
