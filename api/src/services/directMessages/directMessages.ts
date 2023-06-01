import type {
  QueryResolvers,
  MutationResolvers,
  DirectMessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const directMessages: QueryResolvers['directMessages'] = () => {
  return db.directMessage.findMany()
}

export const directMessagesByConversationID = ({ id }: { id: number }) => {
  return db.directMessage.findMany({
    where: {
      conversationID: id,
    },
    orderBy: {
      createdAt: 'asc', // For sorting messages in order of creation
    },
  })
}

export const directMessage: QueryResolvers['directMessage'] = ({ id }) => {
  return db.directMessage.findUnique({
    where: { id },
  })
}

export const createDirectMessage: MutationResolvers['createDirectMessage'] = ({
  input,
}) => {
  return db.directMessage.create({
    data: input,
  })
}

export const updateDirectMessage: MutationResolvers['updateDirectMessage'] = ({
  id,
  input,
}) => {
  return db.directMessage.update({
    data: input,
    where: { id },
  })
}

export const updateReadMessages = ({ convoID }: { convoID: number }) => {
  return db.directMessage.updateMany({
    where: {
      conversationID: {
        equals: convoID,
      },
      senderID: {
        not: context.currentUser?.id,
      },
      unread: true,
    },
    data: {
      unread: false,
    },
  })
}

export const deleteDirectMessage: MutationResolvers['deleteDirectMessage'] = ({
  id,
}) => {
  return db.directMessage.delete({
    where: { id },
  })
}

export const DirectMessage: DirectMessageRelationResolvers = {
  conversation: (_obj, { root }) => {
    return db.directMessage
      .findUnique({ where: { id: root?.id } })
      .conversation()
  },
  sender: (_obj, { root }) => {
    return db.directMessage.findUnique({ where: { id: root?.id } }).sender()
  },
}
