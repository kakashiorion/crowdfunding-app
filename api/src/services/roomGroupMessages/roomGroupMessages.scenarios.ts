import type { Prisma, RoomGroupMessage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoomGroupMessageCreateArgs>({
  roomGroupMessage: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:14:02.644Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T16:14:02.644Z',
            offer: {
              create: {
                capitalTargetLacs: 7325430.585222581,
                equityBeingIssued: 5129709.186632625,
                maxTicketSizeLacs: 8523975.16132465,
                numberOfInvestors: 551487,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T16:14:02.645Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T16:14:02.645Z',
                    locationID: 7920064,
                    sectorCategoryID: 7388986,
                    updatedAt: '2023-05-22T16:14:02.645Z',
                    user: {
                      create: {
                        email: 'String4787964',
                        updatedAt: '2023-05-22T16:14:02.645Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String4372846',
            updatedAt: '2023-05-22T16:14:02.645Z',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:14:02.645Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T16:14:02.645Z',
            offer: {
              create: {
                capitalTargetLacs: 5289826.1060619345,
                equityBeingIssued: 1383439.5326795091,
                maxTicketSizeLacs: 4792991.1519339075,
                numberOfInvestors: 1743778,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T16:14:02.645Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T16:14:02.645Z',
                    locationID: 4829767,
                    sectorCategoryID: 1310825,
                    updatedAt: '2023-05-22T16:14:02.645Z',
                    user: {
                      create: {
                        email: 'String4768818',
                        updatedAt: '2023-05-22T16:14:02.645Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String1939817',
            updatedAt: '2023-05-22T16:14:02.645Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  RoomGroupMessage,
  'roomGroupMessage'
>
