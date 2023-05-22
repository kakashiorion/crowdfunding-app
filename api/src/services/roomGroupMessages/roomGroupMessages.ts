import type {
  QueryResolvers,
  MutationResolvers,
  RoomGroupMessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const roomGroupMessages: QueryResolvers['roomGroupMessages'] = () => {
  return db.roomGroupMessage.findMany()
}

export const roomGroupMessage: QueryResolvers['roomGroupMessage'] = ({
  id,
}) => {
  return db.roomGroupMessage.findUnique({
    where: { id },
  })
}

export const createRoomGroupMessage: MutationResolvers['createRoomGroupMessage'] =
  ({ input }) => {
    return db.roomGroupMessage.create({
      data: input,
    })
  }

export const updateRoomGroupMessage: MutationResolvers['updateRoomGroupMessage'] =
  ({ id, input }) => {
    return db.roomGroupMessage.update({
      data: input,
      where: { id },
    })
  }

export const deleteRoomGroupMessage: MutationResolvers['deleteRoomGroupMessage'] =
  ({ id }) => {
    return db.roomGroupMessage.delete({
      where: { id },
    })
  }

export const RoomGroupMessage: RoomGroupMessageRelationResolvers = {
  offerRoom: (_obj, { root }) => {
    return db.roomGroupMessage
      .findUnique({ where: { id: root?.id } })
      .offerRoom()
  },
  sender: (_obj, { root }) => {
    return db.roomGroupMessage.findUnique({ where: { id: root?.id } }).sender()
  },
}
