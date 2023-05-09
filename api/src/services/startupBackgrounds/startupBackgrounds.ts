import type {
  QueryResolvers,
  MutationResolvers,
  StartupBackgroundRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupBackgrounds: QueryResolvers['startupBackgrounds'] = () => {
  return db.startupBackground.findMany()
}

export const startupBackground: QueryResolvers['startupBackground'] = ({
  id,
}) => {
  return db.startupBackground.findUnique({
    where: { id },
  })
}

export const createStartupBackground: MutationResolvers['createStartupBackground'] =
  ({ input }) => {
    return db.startupBackground.create({
      data: input,
    })
  }

export const updateStartupBackground: MutationResolvers['updateStartupBackground'] =
  ({ id, input }) => {
    return db.startupBackground.update({
      data: input,
      where: { id },
    })
  }

export const deleteStartupBackground: MutationResolvers['deleteStartupBackground'] =
  ({ id }) => {
    return db.startupBackground.delete({
      where: { id },
    })
  }

export const StartupBackground: StartupBackgroundRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupBackground
      .findUnique({ where: { id: root?.id } })
      .startup()
  },
  keyPeople: (_obj, { root }) => {
    return db.startupBackground
      .findUnique({ where: { id: root?.id } })
      .keyPeople()
  },
}
