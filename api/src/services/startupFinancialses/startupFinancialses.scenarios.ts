import type { Prisma, StartupFinancials } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupFinancialsCreateArgs>({
  startupFinancials: {
    one: {
      data: {
        latestFundingStage: 'PRE_SEED',
        currentRatio: 'LESS_THAN_HALF',
        debtEquityRatio: 'LESS_THAN_HALF',
        revenueLastFY: 'LESS_THAN_10_LACS',
        revenueGrowthRate: 'LESS_THAN_5',
        margin: 'LOSS_OVER_50',
        cashRunway: 'LESS_THAN_SIX_MONTHS',
        plansForUsingCash: 'String',
        updatedAt: '2023-05-24T18:16:11.461Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:16:11.461Z',
            locationID: 5412069,
            sectorCategoryID: 3566828,
            updatedAt: '2023-05-24T18:16:11.461Z',
            user: {
              create: {
                email: 'String7947905',
                updatedAt: '2023-05-24T18:16:11.461Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        latestFundingStage: 'PRE_SEED',
        currentRatio: 'LESS_THAN_HALF',
        debtEquityRatio: 'LESS_THAN_HALF',
        revenueLastFY: 'LESS_THAN_10_LACS',
        revenueGrowthRate: 'LESS_THAN_5',
        margin: 'LOSS_OVER_50',
        cashRunway: 'LESS_THAN_SIX_MONTHS',
        plansForUsingCash: 'String',
        updatedAt: '2023-05-24T18:16:11.461Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:16:11.461Z',
            locationID: 7589607,
            sectorCategoryID: 9297800,
            updatedAt: '2023-05-24T18:16:11.461Z',
            user: {
              create: {
                email: 'String1581124',
                updatedAt: '2023-05-24T18:16:11.461Z',
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
