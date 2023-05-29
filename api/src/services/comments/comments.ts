import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = () => {
  return db.comment.findMany({ orderBy: { createdAt: 'desc' } })
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment: MutationResolvers['createComment'] = ({
  input,
}) => {
  return db.comment.create({
    data: input,
  })
}

export const updateComment: MutationResolvers['updateComment'] = ({
  id,
  input,
}) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const likeComment = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.comment.update({
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

export const unlikeComment = ({ id }: { id: number }) => {
  console.log(context.currentUser?.id)
  return db.comment.update({
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

export const deleteComment: MutationResolvers['deleteComment'] = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  commenter: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).commenter()
  },
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
  likedByUsers: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).likedByUsers()
  },
}
