import type {
  QueryResolvers,
  MutationResolvers,
  StartupRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startups: QueryResolvers['startups'] = () => {
  return db.startup.findMany()
}

export const startup: QueryResolvers['startup'] = ({ id }) => {
  return db.startup.findUnique({
    where: { id },
  })
}

export const createStartup: MutationResolvers['createStartup'] = ({
  input,
}) => {
  return db.startup.create({
    data: input,
  })
}

export const updateStartup: MutationResolvers['updateStartup'] = ({
  id,
  input,
}) => {
  return db.startup.update({
    data: input,
    where: { id },
  })
}

export const deleteStartup: MutationResolvers['deleteStartup'] = ({ id }) => {
  return db.startup.delete({
    where: { id },
  })
}

export const Startup: StartupRelationResolvers = {
  user: (_obj, { root }) => {
    return db.startup.findUnique({ where: { id: root?.id } }).user()
  },
  startupBackground: (_obj, { root }) => {
    return db.startup
      .findUnique({ where: { id: root?.id } })
      .startupBackground()
  },
  startupBusiness: (_obj, { root }) => {
    return db.startup.findUnique({ where: { id: root?.id } }).startupBusiness()
  },
  startupMarket: (_obj, { root }) => {
    return db.startup.findUnique({ where: { id: root?.id } }).startupMarket()
  },
  startupFinancials: (_obj, { root }) => {
    return db.startup
      .findUnique({ where: { id: root?.id } })
      .startupFinancials()
  },
  startupObjective: (_obj, { root }) => {
    return db.startup.findUnique({ where: { id: root?.id } }).startupObjective()
  },
  offers: (_obj, { root }) => {
    return db.startup.findUnique({ where: { id: root?.id } }).offers()
  },
}
