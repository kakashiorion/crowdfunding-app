import type {
  QueryResolvers,
  MutationResolvers,
  StartupMarketRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const startupMarkets: QueryResolvers['startupMarkets'] = () => {
  return db.startupMarket.findMany()
}

export const startupMarket: QueryResolvers['startupMarket'] = ({ id }) => {
  return db.startupMarket.findUnique({
    where: { id },
  })
}

export const createStartupMarket: MutationResolvers['createStartupMarket'] = ({
  input,
}) => {
  return db.startupMarket.create({
    data: input,
  })
}

export const updateStartupMarket: MutationResolvers['updateStartupMarket'] = ({
  id,
  input,
}) => {
  return db.startupMarket.update({
    data: input,
    where: { id },
  })
}

export const deleteStartupMarket: MutationResolvers['deleteStartupMarket'] = ({
  id,
}) => {
  return db.startupMarket.delete({
    where: { id },
  })
}

export const StartupMarket: StartupMarketRelationResolvers = {
  startup: (_obj, { root }) => {
    return db.startupMarket.findUnique({ where: { id: root?.id } }).startup()
  },
}
