import type { Prisma, FundraisingRound } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FundraisingRoundCreateArgs>({
  fundraisingRound: {
    one: {
      data: {
        fundingStage: 'PRE_SEED',
        capitalRaisedInCr: 2702267.1076573925,
        valuationInCr: 7525721.9747652,
        updatedAt: '2023-05-24T18:18:46.731Z',
        startupFinancials: {
          create: {
            latestFundingStage: 'PRE_SEED',
            currentRatio: 'LESS_THAN_HALF',
            debtEquityRatio: 'LESS_THAN_HALF',
            revenueLastFY: 'LESS_THAN_10_LACS',
            revenueGrowthRate: 'LESS_THAN_5',
            margin: 'LOSS_OVER_50',
            cashRunway: 'LESS_THAN_SIX_MONTHS',
            plansForUsingCash: 'String',
            updatedAt: '2023-05-24T18:18:46.731Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-24T18:18:46.731Z',
                locationID: 3087093,
                sectorCategoryID: 9211026,
                updatedAt: '2023-05-24T18:18:46.731Z',
                user: {
                  create: {
                    email: 'String6019729',
                    updatedAt: '2023-05-24T18:18:46.731Z',
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
        fundingStage: 'PRE_SEED',
        capitalRaisedInCr: 3390458.7779174065,
        valuationInCr: 1402172.897490932,
        updatedAt: '2023-05-24T18:18:46.731Z',
        startupFinancials: {
          create: {
            latestFundingStage: 'PRE_SEED',
            currentRatio: 'LESS_THAN_HALF',
            debtEquityRatio: 'LESS_THAN_HALF',
            revenueLastFY: 'LESS_THAN_10_LACS',
            revenueGrowthRate: 'LESS_THAN_5',
            margin: 'LOSS_OVER_50',
            cashRunway: 'LESS_THAN_SIX_MONTHS',
            plansForUsingCash: 'String',
            updatedAt: '2023-05-24T18:18:46.731Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-24T18:18:46.731Z',
                locationID: 9784429,
                sectorCategoryID: 1168952,
                updatedAt: '2023-05-24T18:18:46.731Z',
                user: {
                  create: {
                    email: 'String1466085',
                    updatedAt: '2023-05-24T18:18:46.731Z',
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

export type StandardScenario = ScenarioData<
  FundraisingRound,
  'fundraisingRound'
>
