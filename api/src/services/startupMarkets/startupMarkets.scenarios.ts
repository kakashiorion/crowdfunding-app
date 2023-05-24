import type { Prisma, StartupMarket } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupMarketCreateArgs>({
  startupMarket: {
    one: {
      data: {
        revenueStreams: 'SELLING_GOODS_OR_SERVICES',
        costHeads: 'MATERIAL',
        shortTermPlan: 'EXPAND_GEOGRAPHICALLY',
        marketSizeInCr: 'LESS_THAN_10_CR',
        marketGrowthRate: 'LESS_THAN_5',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-24T18:15:13.697Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:15:13.697Z',
            locationID: 245358,
            sectorCategoryID: 38091,
            updatedAt: '2023-05-24T18:15:13.697Z',
            user: {
              create: {
                email: 'String3025906',
                updatedAt: '2023-05-24T18:15:13.697Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        revenueStreams: 'SELLING_GOODS_OR_SERVICES',
        costHeads: 'MATERIAL',
        shortTermPlan: 'EXPAND_GEOGRAPHICALLY',
        marketSizeInCr: 'LESS_THAN_10_CR',
        marketGrowthRate: 'LESS_THAN_5',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-24T18:15:13.697Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:15:13.697Z',
            locationID: 6490571,
            sectorCategoryID: 4129620,
            updatedAt: '2023-05-24T18:15:13.697Z',
            user: {
              create: {
                email: 'String1940822',
                updatedAt: '2023-05-24T18:15:13.697Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupMarket, 'startupMarket'>
