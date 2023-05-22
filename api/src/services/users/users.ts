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

export const userByEmail: QueryResolvers['userByEmail'] = ({
  email,
}: {
  email: string
}) => {
  return db.user.findUnique({
    where: { email: email },
  })
}

export const loginPwdLessUser = async ({ email }: { email: string }) => {
  try {
    const lookupUser = await db.user.findFirst({ where: { email } })
    if (!lookupUser) {
      return null
    }
    const gToken = Math.floor(100000 + Math.random() * 900000)
    const expiresAt = new Date()
    expiresAt.setMinutes(expiresAt.getMinutes() + 15)
    const data = {
      resetToken: gToken.toString(),
      resetTokenExpiresAt: expiresAt,
    }
    //TODO: await sendTokenEmail(email, gToken.toString())
    return await db.user.update({
      where: { id: lookupUser.id },
      data,
    })
  } catch (error) {
    console.log(error)
  }
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
  offerRoomMessages: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).offerRoomMessages()
  },
  negotitionMessages: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).negotitionMessages()
  },
  directMessages: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).directMessages()
  },
  directConversations: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).directConversations()
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
  connections: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).connections()
  },
  followedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followedBy()
  },
  following: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).following()
  },
}
