import type {
  QueryResolvers,
  MutationResolvers,
  ConversationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const conversations: QueryResolvers['conversations'] = () => {
  return db.conversation.findMany()
}

export const conversation: QueryResolvers['conversation'] = ({ id }) => {
  return db.conversation.findUnique({
    where: { id },
  })
}

export const createConversation: MutationResolvers['createConversation'] = ({
  input,
}) => {
  return db.conversation.create({
    data: input,
  })
}

export const updateConversation: MutationResolvers['updateConversation'] = ({
  id,
  input,
}) => {
  return db.conversation.update({
    data: input,
    where: { id },
  })
}

export const deleteConversation: MutationResolvers['deleteConversation'] = ({
  id,
}) => {
  return db.conversation.delete({
    where: { id },
  })
}

export const Conversation: ConversationRelationResolvers = {
  conversationStarter: (_obj, { root }) => {
    return db.conversation
      .findUnique({ where: { id: root?.id } })
      .conversationStarter()
  },
  conversationResponder: (_obj, { root }) => {
    return db.conversation
      .findUnique({ where: { id: root?.id } })
      .conversationResponder()
  },
  messages: (_obj, { root }) => {
    return db.conversation.findUnique({ where: { id: root?.id } }).messages()
  },
}
