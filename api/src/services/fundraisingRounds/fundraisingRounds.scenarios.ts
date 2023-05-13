import type { Prisma, FundraisingRound } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FundraisingRoundCreateArgs>({
  fundraisingRound: {
    one: {
      data: {
        fundingStage: 'SEED',
        capitalRaisedInCr: 4721263.087001362,
        valuationInCr: 3229272.050846763,
        updatedAt: '2023-05-13T21:44:47.026Z',
        startupFinancials: {
          create: {
            latestFundingStage: 'SEED',
            currentRatio: 'LESS_THAN_HALF',
            debtEquityRatio: 'LESS_THAN_HALF',
            revenueLastFY: 'LESS_THAN_10_LACS',
            revenueGrowthRate: 'LESS_THAN_5',
            margin: 'LOSS_OVER_50',
            cashRunway: 'LESS_THAN_SIX_MONTHS',
            plansForUsingCash: 'String',
            updatedAt: '2023-05-13T21:44:47.027Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-13T21:44:47.027Z',
                locationID: 917349,
                sectorCategoryID: 4992277,
                updatedAt: '2023-05-13T21:44:47.027Z',
                user: {
                  create: {
                    email: 'String6126957',
                    mobile: 'String7160826',
                    updatedAt: '2023-05-13T21:44:47.027Z',
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
        fundingStage: 'SEED',
        capitalRaisedInCr: 6211885.513393911,
        valuationInCr: 5324455.855019008,
        updatedAt: '2023-05-13T21:44:47.027Z',
        startupFinancials: {
          create: {
            latestFundingStage: 'SEED',
            currentRatio: 'LESS_THAN_HALF',
            debtEquityRatio: 'LESS_THAN_HALF',
            revenueLastFY: 'LESS_THAN_10_LACS',
            revenueGrowthRate: 'LESS_THAN_5',
            margin: 'LOSS_OVER_50',
            cashRunway: 'LESS_THAN_SIX_MONTHS',
            plansForUsingCash: 'String',
            updatedAt: '2023-05-13T21:44:47.027Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-13T21:44:47.027Z',
                locationID: 409547,
                sectorCategoryID: 130529,
                updatedAt: '2023-05-13T21:44:47.027Z',
                user: {
                  create: {
                    email: 'String2222943',
                    mobile: 'String7816296',
                    updatedAt: '2023-05-13T21:44:47.027Z',
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
