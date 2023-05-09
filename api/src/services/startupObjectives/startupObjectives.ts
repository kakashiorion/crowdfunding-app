import type {
  QueryResolvers,
  MutationResolvers,
  StartupObjectiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupObjectives: QueryResolvers['startupObjectives'] = () => {
  return db.startupObjective.findMany()
}

export const startupObjective: QueryResolvers['startupObjective'] = ({
  id,
}) => {
  return db.startupObjective.findUnique({
    where: { id },
  })
}

export const createStartupObjective: MutationResolvers['createStartupObjective'] =
  ({ input }) => {
    return db.startupObjective.create({
      data: input,
    })
  }

export const updateStartupObjective: MutationResolvers['updateStartupObjective'] =
  ({ id, input }) => {
    return db.startupObjective.update({
      data: input,
      where: { id },
    })
  }

export const deleteStartupObjective: MutationResolvers['deleteStartupObjective'] =
  ({ id }) => {
    return db.startupObjective.delete({
      where: { id },
    })
  }

export const StartupObjective: StartupObjectiveRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupObjective.findUnique({ where: { id: root?.id } }).startup()
  },
}
