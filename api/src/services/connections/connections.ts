import type {
  QueryResolvers,
  MutationResolvers,
  ConnectionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const connections: QueryResolvers['connections'] = () => {
  return db.connection.findMany()
}

export const recentConnectionConnections = () => {
  return db.connection.findMany({
    where: {
      createdAt: {
        //Get last 7 days posts
        gte: new Date(Date.now() - 604800000),
      },
      status: {
        equals: 'ACCEPTED',
      },
      users: {
        every: {
          type: {
            equals: 'INVESTOR',
          },
        },
        some: {
          activityVisbility: { in: ['CONNECTIONS', 'FOLLOWERS', 'PUBLIC'] },
          connections: {
            some: {
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
      },
    },
  })
}

export const recentFollowingConnections = () => {
  return db.connection.findMany({
    where: {
      createdAt: {
        //Get last 7 days posts
        gte: new Date(Date.now() - 604800000),
      },
      status: {
        equals: 'ACCEPTED',
      },
      users: {
        every: {
          type: {
            equals: 'INVESTOR',
          },
        },
        some: {
          activityVisbility: { in: ['FOLLOWERS', 'PUBLIC'] },
          followedBy: {
            some: {
              id: {
                equals: context.currentUser?.id,
              },
            },
          },
        },
      },
    },
  })
}

export const connectionsByUserId: QueryResolvers['connectionsByUserId'] =
  () => {
    return db.connection.findMany({
      where: { users: { some: { email: context.currentUser?.email } } },
    })
  }

export const connection: QueryResolvers['connection'] = ({ id }) => {
  return db.connection.findUnique({
    where: { id },
  })
}

export const createConnection: MutationResolvers['createConnection'] = ({
  input,
}) => {
  return db.connection.create({
    data: input,
  })
}

export const updateConnection: MutationResolvers['updateConnection'] = ({
  id,
  input,
}) => {
  return db.connection.update({
    data: input,
    where: { id },
  })
}

export const deleteConnection: MutationResolvers['deleteConnection'] = ({
  id,
}) => {
  return db.connection.delete({
    where: { id },
  })
}

export const Connection: ConnectionRelationResolvers = {
  users: (_obj, { root }) => {
    return db.connection.findUnique({ where: { id: root?.id } }).users()
  },
}
