import type { Prisma, StartupFinancials } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupFinancialsCreateArgs>({
  startupFinancials: {
    one: {
      data: {
        currentValuationLacs: 9139675.331092458,
        currentStage: 'SEED',
        plansForUsingCash: 'String',
        biggestCostHeads: 'String',
        updatedAt: '2023-04-29T06:48:48.783Z',
        startup: {
          create: {
            name: 'String5582024',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:48:48.783Z',
            locationID: 3198389,
            industrySectorID: 7518087,
            updatedAt: '2023-04-29T06:48:48.783Z',
            user: {
              create: {
                email: 'String5422326',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:48:48.783Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        currentValuationLacs: 9027453.154346403,
        currentStage: 'SEED',
        plansForUsingCash: 'String',
        biggestCostHeads: 'String',
        updatedAt: '2023-04-29T06:48:48.783Z',
        startup: {
          create: {
            name: 'String4467158',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:48:48.783Z',
            locationID: 6808198,
            industrySectorID: 8670263,
            updatedAt: '2023-04-29T06:48:48.783Z',
            user: {
              create: {
                email: 'String8323182',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:48:48.783Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  StartupFinancials,
  'startupFinancials'
>
