import type { Prisma, FundraisingRound } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FundraisingRoundCreateArgs>({
  fundraisingRound: {
    one: {
      data: {
        roundStage: 'SEED',
        capitalRaisedLacs: 7983059.994903565,
        valuationLacs: 1602179.5781325232,
        keyInvestors: 'String',
        updatedAt: '2023-04-29T06:49:54.785Z',
        startup: {
          create: {
            currentValuationLacs: 7231944.208488803,
            currentStage: 'SEED',
            plansForUsingCash: 'String',
            biggestCostHeads: 'String',
            updatedAt: '2023-04-29T06:49:54.785Z',
            startup: {
              create: {
                name: 'String2818493',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:49:54.785Z',
                locationID: 5376178,
                industrySectorID: 7008323,
                updatedAt: '2023-04-29T06:49:54.785Z',
                user: {
                  create: {
                    email: 'String8857911',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:49:54.785Z',
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
        roundStage: 'SEED',
        capitalRaisedLacs: 492065.6290264769,
        valuationLacs: 3710813.207218817,
        keyInvestors: 'String',
        updatedAt: '2023-04-29T06:49:54.785Z',
        startup: {
          create: {
            currentValuationLacs: 2379631.040408836,
            currentStage: 'SEED',
            plansForUsingCash: 'String',
            biggestCostHeads: 'String',
            updatedAt: '2023-04-29T06:49:54.785Z',
            startup: {
              create: {
                name: 'String1368922',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:49:54.785Z',
                locationID: 9344055,
                industrySectorID: 6576436,
                updatedAt: '2023-04-29T06:49:54.785Z',
                user: {
                  create: {
                    email: 'String4165601',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:49:54.785Z',
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
