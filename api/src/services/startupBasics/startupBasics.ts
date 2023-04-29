import type {
  QueryResolvers,
  MutationResolvers,
  StartupBasicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupBasics: QueryResolvers['startupBasics'] = () => {
  return db.startupBasic.findMany()
}

export const startupBasic: QueryResolvers['startupBasic'] = ({ id }) => {
  return db.startupBasic.findUnique({
    where: { id },
  })
}

export const createStartupBasic: MutationResolvers['createStartupBasic'] = ({
  input,
}) => {
  return db.startupBasic.create({
    data: input,
  })
}

export const updateStartupBasic: MutationResolvers['updateStartupBasic'] = ({
  id,
  input,
}) => {
  return db.startupBasic.update({
    data: input,
    where: { id },
  })
}

export const deleteStartupBasic: MutationResolvers['deleteStartupBasic'] = ({
  id,
}) => {
  return db.startupBasic.delete({
    where: { id },
  })
}

export const StartupBasic: StartupBasicRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupBasic.findUnique({ where: { id: root?.id } }).startup()
  },
  leadingTeam: (_obj, { root }) => {
    return db.startupBasic.findUnique({ where: { id: root?.id } }).leadingTeam()
  },
}
