import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

const RecentPagination = 20

//Recent posts by investors - Feed for startup user
export const recentInvestorsPosts = () => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: RecentPagination,
    where: {
      poster: {
        type: {
          equals: 'INVESTOR',
        },
      },
      OR: [
        {
          visibility: {
            equals: 'CONNECTIONS',
          },
          poster: {
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
        },
        {
          visibility: {
            equals: 'FOLLOWERS',
          },
          poster: {
            followedBy: {
              some: {
                id: {
                  equals: context.currentUser?.id,
                },
              },
            },
          },
        },
        {
          visibility: {
            equals: 'PUBLIC',
          },
        },
      ],
    },
  })
}

//Recent posts by startups or investors - Feed for investor user
export const recentStartupInvestorPosts = () => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: RecentPagination,
    where: {
      poster: {
        id: {
          not: context.currentUser?.id,
        },
        type: {
          in: ['INVESTOR', 'STARTUP'],
        },
      },
      OR: [
        {
          visibility: {
            equals: 'CONNECTIONS',
          },
          poster: {
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
        },
        {
          visibility: {
            equals: 'FOLLOWERS',
          },
          poster: {
            followedBy: {
              some: {
                id: {
                  equals: context.currentUser?.id,
                },
              },
            },
          },
        },
        {
          visibility: {
            equals: 'PUBLIC',
          },
        },
      ],
    },
  })
}

//Recent posts by the same poster
export const recentPostsByPostId = ({ id }: { id: number }) => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: RecentPagination,
    where: {
      poster: {
        posts: {
          some: {
            id: {
              equals: id,
            },
          },
        },
      },
      id: {
        not: id,
      },
      OR: [
        {
          posterID: {
            equals: context.currentUser?.id,
          },
        },
        {
          visibility: {
            equals: 'CONNECTIONS',
          },
          poster: {
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
        },
        {
          visibility: {
            equals: 'FOLLOWERS',
          },
          poster: {
            followedBy: {
              some: {
                id: {
                  equals: context.currentUser?.id,
                },
              },
            },
          },
        },
        {
          visibility: {
            equals: 'PUBLIC',
          },
        },
      ],
    },
  })
}

//Recent posts by current user
export const myRecentPosts = () => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: RecentPagination,
    where: {
      poster: {
        id: {
          equals: context.currentUser?.id,
        },
      },
    },
  })
}

//My posts (no pagination)
export const myPosts = () => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      poster: {
        id: {
          equals: context.currentUser?.id,
        },
      },
    },
  })
}

//Posts by a posterID
export const postsByPosterID = ({ id }: { id: number }) => {
  return db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: RecentPagination,
    where: {
      poster: {
        id: id,
      },
    },
  })
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

//Startup is viewing the post
export const startupViewPost = ({ id }: { id: number }) => {
  return db.post.findFirst({
    where: {
      id: {
        equals: id,
      },
      OR: [
        {
          poster: {
            type: {
              equals: 'STARTUP',
            },
            id: {
              equals: context.currentUser?.id,
            },
          },
        },
        {
          visibility: {
            equals: 'CONNECTIONS',
          },
          poster: {
            type: {
              equals: 'INVESTOR',
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
        },
        {
          visibility: {
            equals: 'FOLLOWERS',
          },
          poster: {
            type: {
              equals: 'INVESTOR',
            },
            followedBy: {
              some: {
                id: {
                  equals: context.currentUser?.id,
                },
              },
            },
          },
        },
        {
          visibility: {
            equals: 'PUBLIC',
          },
          poster: {
            type: {
              equals: 'INVESTOR',
            },
          },
        },
      ],
    },
  })
}

//Investor is viewing the post
export const investorViewPost = ({ id }: { id: number }) => {
  return db.post.findFirst({
    where: {
      id: {
        equals: id,
      },
      OR: [
        {
          poster: {
            id: {
              equals: context.currentUser?.id,
            },
          },
        },
        {
          visibility: {
            equals: 'CONNECTIONS',
          },
          poster: {
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
        },
        {
          visibility: {
            equals: 'FOLLOWERS',
          },
          poster: {
            followedBy: {
              some: {
                id: {
                  equals: context.currentUser?.id,
                },
              },
            },
          },
        },
        {
          visibility: {
            equals: 'PUBLIC',
          },
        },
      ],
    },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const addPostLike = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.post.update({
    where: {
      id: id,
    },
    data: {
      likedByUsers: {
        connect: {
          id: context.currentUser?.id,
        },
      },
    },
  })
}

export const removePostLike = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.post.update({
    where: {
      id: id,
    },
    data: {
      likedByUsers: {
        disconnect: {
          id: context.currentUser?.id,
        },
      },
    },
  })
}

export const savePost = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.post.update({
    where: {
      id: id,
    },
    data: {
      savedByUsers: {
        connect: {
          id: context.currentUser?.id,
        },
      },
    },
  })
}

export const unsavePost = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.post.update({
    where: {
      id: id,
    },
    data: {
      savedByUsers: {
        disconnect: {
          id: context.currentUser?.id,
        },
      },
    },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostRelationResolvers = {
  poster: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).poster()
  },
  comments: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).comments()
  },
  likedByUsers: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).likedByUsers()
  },
  savedByUsers: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).savedByUsers()
  },
}
