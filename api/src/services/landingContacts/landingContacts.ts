import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const landingContacts: QueryResolvers['landingContacts'] = () => {
  return db.landingContact.findMany()
}

export const landingContact: QueryResolvers['landingContact'] = ({ id }) => {
  return db.landingContact.findUnique({
    where: { id },
  })
}

export const createLandingContact: MutationResolvers['createLandingContact'] =
  ({ input }) => {
    return db.landingContact.create({
      data: input,
    })
  }

export const updateLandingContact: MutationResolvers['updateLandingContact'] =
  ({ id, input }) => {
    return db.landingContact.update({
      data: input,
      where: { id },
    })
  }

export const deleteLandingContact: MutationResolvers['deleteLandingContact'] =
  ({ id }) => {
    return db.landingContact.delete({
      where: { id },
    })
  }
