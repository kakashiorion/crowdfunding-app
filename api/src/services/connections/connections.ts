import type {
  QueryResolvers,
  MutationResolvers,
  ConnectionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const connections: QueryResolvers['connections'] = () => {
  return db.connection.findMany()
}

const RecentPagination = 20

//Recent Connections between Investors - feed for startup user
export const recentInvestorsConnections = () => {
  return db.connection.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    take: RecentPagination,
    where: {
      status: {
        equals: 'ACCEPTED',
      },
      users: {
        every: {
          type: {
            equals: 'INVESTOR',
          },
        },
        none: {
          id: context.currentUser?.id,
        },
        some: {
          OR: [
            {
              activityVisbility: { in: ['FOLLOWERS', 'PUBLIC'] },
              followedBy: {
                some: {
                  id: {
                    equals: context.currentUser?.id,
                  },
                },
              },
            },
            {
              activityVisbility: { in: ['CONNECTIONS', 'PUBLIC'] },
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
          ],
        },
      },
    },
  })
}

//Recent Connections - feed for investor user
export const recentStartupInvestorConnections = () => {
  return db.connection.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    take: RecentPagination,
    where: {
      status: {
        equals: 'ACCEPTED',
      },
      users: {
        none: {
          id: context.currentUser?.id,
        },
        some: {
          OR: [
            {
              activityVisbility: { in: ['FOLLOWERS', 'PUBLIC'] },
              followedBy: {
                some: {
                  id: {
                    equals: context.currentUser?.id,
                  },
                },
              },
            },
            {
              activityVisbility: { in: ['CONNECTIONS', 'PUBLIC'] },
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
          ],
        },
      },
    },
  })
}

//User's Connections
export const myConnections = () => {
  return db.connection.findMany({
    where: { users: { some: { id: context.currentUser?.id } } },
    orderBy: {
      updatedAt: 'desc',
    },
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
    data: {
      status: 'PENDING',
      requester: {
        connect: { id: input.requesterID },
      },
      users: { connect: [{ id: input.requesterID }, { id: input.accepterID }] },
    },
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
  requester: (_obj, { root }) => {
    return db.connection.findUnique({ where: { id: root?.id } }).requester()
  },
}
