import type { Prisma, Offer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfferCreateArgs>({
  offer: {
    one: {
      data: {
        capitalTargetLacs: 2421832.4267708245,
        equityBeingIssued: 2177946.928003216,
        maxTicketSizeLacs: 9603009.14289578,
        fundingStage: 'PRE_SEED',
        maxInvestors: 5431406,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-24T18:19:44.269Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:19:44.269Z',
            locationID: 8649765,
            sectorCategoryID: 90281,
            updatedAt: '2023-05-24T18:19:44.269Z',
            user: {
              create: {
                email: 'String5839064',
                updatedAt: '2023-05-24T18:19:44.269Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        capitalTargetLacs: 7415586.8039768655,
        equityBeingIssued: 7773675.989299231,
        maxTicketSizeLacs: 9343619.032523578,
        fundingStage: 'PRE_SEED',
        maxInvestors: 2785884,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-24T18:19:44.269Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:19:44.269Z',
            locationID: 5237665,
            sectorCategoryID: 8717957,
            updatedAt: '2023-05-24T18:19:44.269Z',
            user: {
              create: {
                email: 'String5819230',
                updatedAt: '2023-05-24T18:19:44.269Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Offer, 'offer'>
