import type {
  QueryResolvers,
  MutationResolvers,
  StartupPreferencesRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupPreference: QueryResolvers['startupPreference'] = () => {
  return db.startupPreferences.findMany()
}

export const startupPreferences: QueryResolvers['startupPreferences'] = ({
  id,
}) => {
  return db.startupPreferences.findUnique({
    where: { id },
  })
}

export const createStartupPreferences: MutationResolvers['createStartupPreferences'] =
  ({ input }) => {
    return db.startupPreferences.create({
      data: input,
    })
  }

export const updateStartupPreferences: MutationResolvers['updateStartupPreferences'] =
  ({ id, input }) => {
    return db.startupPreferences.update({
      data: input,
      where: { id },
    })
  }

export const deleteStartupPreferences: MutationResolvers['deleteStartupPreferences'] =
  ({ id }) => {
    return db.startupPreferences.delete({
      where: { id },
    })
  }

export const StartupPreferences: StartupPreferencesRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupPreferences
      .findUnique({ where: { id: root?.id } })
      .startup()
  },
}
