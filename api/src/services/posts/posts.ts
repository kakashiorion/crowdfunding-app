import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
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

export const addUserLike = ({ id }: { id: number }) => {
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

export const removeUserLike = ({ id }: { id: number }) => {
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
}
