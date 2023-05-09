import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  credentials: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).credentials()
  },
  investor: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).investor()
  },
  startup: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).startup()
  },
  sentMessages: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).sentMessages()
  },
  receivedMessages: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).receivedMessages()
  },
  startedConversations: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .startedConversations()
  },
  respondedConversations: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .respondedConversations()
  },
  posts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).posts()
  },
  comments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).comments()
  },
  likedPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likedPosts()
  },
  likedComments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likedComments()
  },
  connectionsRequested: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .connectionsRequested()
  },
  connectionsAccepted: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).connectionsAccepted()
  },
  followedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followedBy()
  },
  following: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).following()
  },
}
