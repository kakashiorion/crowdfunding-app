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

//Find New Users to chat
export const findNewChatUsers = ({ term }: { term: string }) => {
  return db.user.findMany({
    where: {
      directConversations: {
        none: {
          users: {
            some: {
              id: { equals: context.currentUser?.id },
            },
          },
        },
      },
      AND: [
        {
          OR: [
            {
              investor: {
                name: {
                  contains: term,
                  mode: 'insensitive',
                },
              },
              startup: {
                name: {
                  contains: term,
                  mode: 'insensitive',
                },
              },
            },
          ],
        },
        {
          OR: [
            {
              messageVisibility: {
                equals: 'PUBLIC',
              },
            },
            {
              messageVisibility: {
                equals: 'CONNECTIONS',
              },
              connections: {
                some: {
                  status: {
                    equals: 'ACCEPTED',
                  },
                  users: {
                    some: {
                      id: {
                        equals: context.currentUser?.id,
                      },
                    },
                  },
                },
              },
            },
            {
              messageVisibility: {
                equals: 'FOLLOWERS',
              },
              followedBy: {
                some: {
                  id: {
                    equals: context.currentUser?.id,
                  },
                },
              },
            },
          ],
        },
      ],
    },
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

export const mutualFollowUser = ({ userID }: { userID: number }) => {
  return db.user.update({
    where: { id: context.currentUser?.id },
    data: {
      following: {
        connect: {
          id: userID,
        },
      },
      followedBy: {
        connect: {
          id: userID,
        },
      },
    },
  })
}

export const followUser = ({ userID }: { userID: number }) => {
  return db.user.update({
    where: { id: context.currentUser?.id },
    data: {
      following: {
        connect: {
          id: userID,
        },
      },
    },
  })
}

export const unfollowUser = ({ userID }: { userID: number }) => {
  return db.user.update({
    where: { id: context.currentUser?.id },
    data: {
      following: {
        disconnect: {
          id: userID,
        },
      },
    },
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
  savedPosts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).savedPosts()
  },
  likedComments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likedComments()
  },
  connections: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).connections()
  },
  requestedConnections: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .requestedConnections()
  },
  followedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followedBy()
  },
  following: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).following()
  },
  blockedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).blockedBy()
  },
  blocking: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).blocking()
  },
}
