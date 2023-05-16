import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const leads: QueryResolvers['leads'] = () => {
  return db.lead.findMany()
}

export const lead: QueryResolvers['lead'] = ({ id }) => {
  return db.lead.findUnique({
    where: { id },
  })
}

export const createLead: MutationResolvers['createLead'] = ({ input }) => {
  return db.lead.create({
    data: input,
  })
}

export const updateLead: MutationResolvers['updateLead'] = ({ id, input }) => {
  return db.lead.update({
    data: input,
    where: { id },
  })
}

export const deleteLead: MutationResolvers['deleteLead'] = ({ id }) => {
  return db.lead.delete({
    where: { id },
  })
}
