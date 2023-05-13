import type { Prisma, StartupFinancials } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupFinancialsCreateArgs>({
  startupFinancials: {
    one: {
      data: {
        latestFundingStage: 'SEED',
        currentRatio: 'LESS_THAN_HALF',
        debtEquityRatio: 'LESS_THAN_HALF',
        revenueLastFY: 'LESS_THAN_10_LACS',
        revenueGrowthRate: 'LESS_THAN_5',
        margin: 'LOSS_OVER_50',
        cashRunway: 'LESS_THAN_SIX_MONTHS',
        plansForUsingCash: 'String',
        updatedAt: '2023-05-13T21:49:36.810Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-13T21:49:36.810Z',
            locationID: 5890603,
            sectorCategoryID: 5999994,
            updatedAt: '2023-05-13T21:49:36.810Z',
            user: {
              create: {
                email: 'String7160213',
                mobile: 'String4571964',
                updatedAt: '2023-05-13T21:49:36.810Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        latestFundingStage: 'SEED',
        currentRatio: 'LESS_THAN_HALF',
        debtEquityRatio: 'LESS_THAN_HALF',
        revenueLastFY: 'LESS_THAN_10_LACS',
        revenueGrowthRate: 'LESS_THAN_5',
        margin: 'LOSS_OVER_50',
        cashRunway: 'LESS_THAN_SIX_MONTHS',
        plansForUsingCash: 'String',
        updatedAt: '2023-05-13T21:49:36.810Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-13T21:49:36.810Z',
            locationID: 4259257,
            sectorCategoryID: 258420,
            updatedAt: '2023-05-13T21:49:36.810Z',
            user: {
              create: {
                email: 'String5690206',
                mobile: 'String3949842',
                updatedAt: '2023-05-13T21:49:36.810Z',
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
