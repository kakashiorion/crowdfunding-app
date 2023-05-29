import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const recentConnectionPosts = () => {
  return db.post.findMany({
    where: {
      createdAt: {
        //Get last 7 days posts
        gte: new Date(Date.now() - 604800000),
      },
      visibility: {
        equals: 'CONNECTIONS',
      },
      poster: {
        type: {
          equals: 'INVESTOR',
        },
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
  })
}

export const recentFollowingPosts = () => {
  return db.post.findMany({
    where: {
      createdAt: {
        //Get last 7 days posts
        gte: new Date(Date.now() - 604800000),
      },
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
  })
}

export const recentPublicPosts = () => {
  return db.post.findMany({
    where: {
      createdAt: {
        //Get last 7 days posts
        gte: new Date(Date.now() - 604800000),
      },
      visibility: {
        equals: 'PUBLIC',
      },
      poster: {
        type: {
          equals: 'INVESTOR',
        },
      },
    },
  })
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
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
