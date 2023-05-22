import type { Prisma, OfferRoom } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfferRoomCreateArgs>({
  offerRoom: {
    one: {
      data: {
        resourceLinks: 'String',
        updatedAt: '2023-05-22T16:11:26.659Z',
        offer: {
          create: {
            capitalTargetLacs: 4502174.073668701,
            equityBeingIssued: 5157267.377640253,
            maxTicketSizeLacs: 7725541.280865504,
            numberOfInvestors: 2579030,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-22T16:11:26.659Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-22T16:11:26.659Z',
                locationID: 7993057,
                sectorCategoryID: 9694714,
                updatedAt: '2023-05-22T16:11:26.659Z',
                user: {
                  create: {
                    email: 'String3593805',
                    updatedAt: '2023-05-22T16:11:26.659Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        resourceLinks: 'String',
        updatedAt: '2023-05-22T16:11:26.659Z',
        offer: {
          create: {
            capitalTargetLacs: 2093136.5127054425,
            equityBeingIssued: 6213282.09458789,
            maxTicketSizeLacs: 7662337.380982456,
            numberOfInvestors: 5920217,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-22T16:11:26.659Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-22T16:11:26.659Z',
                locationID: 8609400,
                sectorCategoryID: 2228923,
                updatedAt: '2023-05-22T16:11:26.659Z',
                user: {
                  create: {
                    email: 'String3136527',
                    updatedAt: '2023-05-22T16:11:26.659Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<OfferRoom, 'offerRoom'>
