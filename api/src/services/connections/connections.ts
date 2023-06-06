import type {
  QueryResolvers,
  MutationResolvers,
  ConnectionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const connections: QueryResolvers['connections'] = () => {
  return db.connection.findMany()
}

//Recent Connections between Investors
export const recentInvestorsConnections = () => {
  return db.connection.findMany({
    where: {
      createdAt: {
        //Get last 14 days posts
        gte: new Date(Date.now() - 1209600000),
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

//Recent Connections between Startup and Investor
export const recentStartupInvestorConnections = () => {
  return db.connection.findMany({
    where: {
      createdAt: {
        //Get last 14 days posts
        gte: new Date(Date.now() - 1209600000),
      },
      status: {
        equals: 'ACCEPTED',
      },
      users: {
        some: {
          AND: [
            {
              type: {
                equals: 'INVESTOR',
              },
            },
            {
              type: {
                equals: 'STARTUP',
              },
            },
          ],
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
