import type {
  QueryResolvers,
  MutationResolvers,
  OfferRoomRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offerRooms: QueryResolvers['offerRooms'] = () => {
  return db.offerRoom.findMany()
}

//Get offer rooms which are active, and investor has not been kicked from
export const getActiveOfferRooms = () => {
  return db.offerRoom.findMany({
    where: {
      offer: {
        status: 'CREATED',
      },
      kickedList: {
        none: {
          id: context.currentUser?.id,
        },
      },
    },
  })
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

//Investor joins a room
export const joinOfferRoom = async ({ id }: { id: number }) => {
  const room = await db.offerRoom.findUnique({
    where: { id },
    include: {
      participants: true,
    },
  })

  if (room!.participants?.length < room!.joinLimit) {
    return db.offerRoom.update({
      where: { id },
      data: {
        participants: {
          connect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  } else {
    return db.offerRoom.update({
      where: { id },
      data: {
        waitingList: {
          connect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  }
}

//Investor leaves a room
export const leaveOfferRoom = async ({ id }: { id: number }) => {
  const room = await db.offerRoom.findUnique({
    where: { id },
    include: {
      participants: true,
      waitingList: true,
    },
  })

  //If investor is a participant, remove from the list
  if (room?.participants.some((i) => i.id == context.currentUser?.id)) {
    //if there is a waiting list, move first one to participant list
    if (room.waitingList.length > 0) {
      const newJoiner = room.waitingList[0]
      return db.offerRoom.update({
        where: { id },
        data: {
          participants: {
            disconnect: {
              id: context.currentUser?.id,
            },
            connect: {
              id: newJoiner.id,
            },
          },
          waitingList: {
            disconnect: {
              id: newJoiner.id,
            },
          },
        },
      })
    }
    return db.offerRoom.update({
      where: { id },
      data: {
        participants: {
          disconnect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  } else if (room?.waitingList.some((i) => i.id == context.currentUser?.id)) {
    return db.offerRoom.update({
      where: { id },
      data: {
        waitingList: {
          disconnect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  }
}

//Startup is kicking an investor from its active room
export const kickInvestorFromOfferRoom = async ({
  investorId,
}: {
  investorId: number
}) => {
  const room = await db.offerRoom.findFirst({
    where: {
      offer: {
        startupID: context.currentUser?.id,
        OR: [{ status: 'CREATED' }, { status: 'EXCEEDED' }],
      },
    },
    include: {
      participants: true,
      waitingList: true,
    },
  })

  if (room?.participants.some((i) => i.id == investorId)) {
    if (room.waitingList.length > 0) {
      const newJoiner = room.waitingList[0]
      return db.offerRoom.update({
        where: { id: room.id },
        data: {
          participants: {
            disconnect: {
              id: context.currentUser?.id,
            },
            connect: {
              id: newJoiner.id,
            },
          },
          waitingList: {
            disconnect: {
              id: newJoiner.id,
            },
          },
        },
      })
    }
    return db.offerRoom.update({
      where: { id: room.id },
      data: {
        participants: {
          disconnect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  } else if (room?.waitingList.some((i) => i.id == investorId)) {
    return db.offerRoom.update({
      where: { id: room.id },
      data: {
        waitingList: {
          disconnect: {
            id: context.currentUser?.id,
          },
        },
      },
    })
  }
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
