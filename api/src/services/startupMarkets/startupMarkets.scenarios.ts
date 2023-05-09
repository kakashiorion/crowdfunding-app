import type { Prisma, StartupMarket } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupMarketCreateArgs>({
  startupMarket: {
    one: {
      data: {
        revenueStreams: 'SELLING_GOODS',
        costHeads: 'MATERIAL',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-09T21:11:55.134Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:11:55.134Z',
            locationID: 3192655,
            sectorCategoryID: 8393277,
            updatedAt: '2023-05-09T21:11:55.134Z',
            user: {
              create: {
                email: 'String4408712',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String3388106',
                updatedAt: '2023-05-09T21:11:55.134Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        revenueStreams: 'SELLING_GOODS',
        costHeads: 'MATERIAL',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-09T21:11:55.134Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:11:55.134Z',
            locationID: 2962136,
            sectorCategoryID: 3517708,
            updatedAt: '2023-05-09T21:11:55.134Z',
            user: {
              create: {
                email: 'String4078924',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String6499111',
                updatedAt: '2023-05-09T21:11:55.134Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupMarket, 'startupMarket'>
