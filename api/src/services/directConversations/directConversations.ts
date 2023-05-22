import type {
  QueryResolvers,
  MutationResolvers,
  DirectConversationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const directConversations: QueryResolvers['directConversations'] =
  () => {
    return db.directConversation.findMany()
  }

export const directConversation: QueryResolvers['directConversation'] = ({
  id,
}) => {
  return db.directConversation.findUnique({
    where: { id },
  })
}

export const createDirectConversation: MutationResolvers['createDirectConversation'] =
  ({ input }) => {
    return db.directConversation.create({
      data: input,
    })
  }

export const updateDirectConversation: MutationResolvers['updateDirectConversation'] =
  ({ id, input }) => {
    return db.directConversation.update({
      data: input,
      where: { id },
    })
  }

export const deleteDirectConversation: MutationResolvers['deleteDirectConversation'] =
  ({ id }) => {
    return db.directConversation.delete({
      where: { id },
    })
  }

export const DirectConversation: DirectConversationRelationResolvers = {
  users: (_obj, { root }) => {
    return db.directConversation.findUnique({ where: { id: root?.id } }).users()
  },
  messages: (_obj, { root }) => {
    return db.directConversation
      .findUnique({ where: { id: root?.id } })
      .messages()
  },
}
