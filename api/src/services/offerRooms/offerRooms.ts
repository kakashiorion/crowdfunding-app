import type {
  QueryResolvers,
  MutationResolvers,
  OfferRoomRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offerRooms: QueryResolvers['offerRooms'] = () => {
  return db.offerRoom.findMany()
}

export const offerRoom: QueryResolvers['offerRoom'] = ({ id }) => {
  return db.offerRoom.findUnique({
    where: { id },
  })
}

export const createOfferRoom: MutationResolvers['createOfferRoom'] = ({
  input,
}) => {
  return db.offerRoom.create({
    data: input,
  })
}

export const updateOfferRoom: MutationResolvers['updateOfferRoom'] = ({
  id,
  input,
}) => {
  return db.offerRoom.update({
    data: input,
    where: { id },
  })
}

export const deleteOfferRoom: MutationResolvers['deleteOfferRoom'] = ({
  id,
}) => {
  return db.offerRoom.delete({
    where: { id },
  })
}

export const OfferRoom: OfferRoomRelationResolvers = {
  offer: (_obj, { root }) => {
    return db.offerRoom.findUnique({ where: { id: root?.id } }).offer()
  },
  roomGroupMessages: (_obj, { root }) => {
    return db.offerRoom
      .findUnique({ where: { id: root?.id } })
      .roomGroupMessages()
  },
  participants: (_obj, { root }) => {
    return db.offerRoom.findUnique({ where: { id: root?.id } }).participants()
  },
  waitingList: (_obj, { root }) => {
    return db.offerRoom.findUnique({ where: { id: root?.id } }).waitingList()
  },
  kickedList: (_obj, { root }) => {
    return db.offerRoom.findUnique({ where: { id: root?.id } }).kickedList()
  },
  negotiationTable: (_obj, { root }) => {
    return db.offerRoom
      .findUnique({ where: { id: root?.id } })
      .negotiationTable()
  },
  questions: (_obj, { root }) => {
    return db.offerRoom.findUnique({ where: { id: root?.id } }).questions()
  },
}
