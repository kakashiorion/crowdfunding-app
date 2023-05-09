import type {
  QueryResolvers,
  MutationResolvers,
  KeyPeopleRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const keyPeoples: QueryResolvers['keyPeoples'] = () => {
  return db.keyPeople.findMany()
}

export const keyPeople: QueryResolvers['keyPeople'] = ({ id }) => {
  return db.keyPeople.findUnique({
    where: { id },
  })
}

export const createKeyPeople: MutationResolvers['createKeyPeople'] = ({
  input,
}) => {
  return db.keyPeople.create({
    data: input,
  })
}

export const updateKeyPeople: MutationResolvers['updateKeyPeople'] = ({
  id,
  input,
}) => {
  return db.keyPeople.update({
    data: input,
    where: { id },
  })
}

export const deleteKeyPeople: MutationResolvers['deleteKeyPeople'] = ({
  id,
}) => {
  return db.keyPeople.delete({
    where: { id },
  })
}

export const KeyPeople: KeyPeopleRelationResolvers = {
  startupBackground: (_obj, { root }) => {
    return db.keyPeople
      .findUnique({ where: { id: root?.id } })
      .startupBackground()
  },
}
