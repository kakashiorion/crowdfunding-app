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

//Current user's direct conversations (if not blocked)
export const myDirectConversations = () => {
  return db.directConversation.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      users: {
        some: { id: context.currentUser?.id },
        every: {
          blocking: {
            none: {
              id: context.currentUser?.id,
            },
          },
        },
      },
    },
    include: {
      messages: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 20,
      },
    },
  })
}

//Get a direct conversation (if not blocked)
export const directConversation: QueryResolvers['directConversation'] = ({
  id,
}) => {
  return db.directConversation.findFirst({
    where: {
      id: id,
      users: {
        every: {
          blocking: {
            none: {
              id: context.currentUser?.id,
            },
          },
        },
      },
    },
  })
}

export const createDirectConversation: MutationResolvers['createDirectConversation'] =
  ({ input }) => {
    return db.directConversation.create({
      data: {
        users: {
          connect: [{ id: input.userID1 }, { id: input.userID2 }],
        },
      },
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
