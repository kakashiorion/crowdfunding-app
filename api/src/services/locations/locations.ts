import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const locations: QueryResolvers['locations'] = () => {
  return db.location.findMany()
}

export const location: QueryResolvers['location'] = ({ id }) => {
  return db.location.findUnique({
    where: { id },
  })
}

export const getLocationID = ({
  state,
  city,
}: {
  state: string
  city: string
}) => {
  return db.location.findUnique({
    where: {
      state_city: {
        state: state,
        city: city,
      },
    },
  })
}

export const createLocation: MutationResolvers['createLocation'] = ({
  input,
}) => {
  return db.location.create({
    data: input,
  })
}

export const updateLocation: MutationResolvers['updateLocation'] = ({
  id,
  input,
}) => {
  return db.location.update({
    data: input,
    where: { id },
  })
}

export const deleteLocation: MutationResolvers['deleteLocation'] = ({ id }) => {
  return db.location.delete({
    where: { id },
  })
}
