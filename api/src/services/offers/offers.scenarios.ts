import type { Prisma, Offer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfferCreateArgs>({
  offer: {
    one: {
      data: {
        capitalTargetLacs: 2393809.6680795653,
        equityBeingIssued: 1508120.3093912166,
        maxTicketSizeLacs: 2451536.9387644115,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-04-29T06:51:42.565Z',
        startup: {
          create: {
            name: 'String9280737',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:51:42.565Z',
            locationID: 2125758,
            industrySectorID: 8488974,
            updatedAt: '2023-04-29T06:51:42.565Z',
            user: {
              create: {
                email: 'String668432',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:51:42.565Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        capitalTargetLacs: 6761916.952116262,
        equityBeingIssued: 5528634.012071398,
        maxTicketSizeLacs: 4253065.432471557,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-04-29T06:51:42.565Z',
        startup: {
          create: {
            name: 'String4086166',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:51:42.565Z',
            locationID: 9365285,
            industrySectorID: 2555351,
            updatedAt: '2023-04-29T06:51:42.565Z',
            user: {
              create: {
                email: 'String5918287',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:51:42.565Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Offer, 'offer'>
