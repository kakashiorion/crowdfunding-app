import type { Prisma, FundraisingRound } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FundraisingRoundCreateArgs>({
  fundraisingRound: {
    one: {
      data: {
        fundingStage: 'SEED',
        capitalRaisedInCr: 5264006.032333508,
        valuationInCr: 7284286.264359508,
        updatedAt: '2023-05-09T21:13:44.714Z',
        startup: {
          create: {
            plansForUsingCash: 'String',
            updatedAt: '2023-05-09T21:13:44.714Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:13:44.714Z',
                locationID: 8182269,
                sectorCategoryID: 7411202,
                updatedAt: '2023-05-09T21:13:44.714Z',
                user: {
                  create: {
                    email: 'String2558402',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String8594271',
                    updatedAt: '2023-05-09T21:13:44.714Z',
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
        capitalRaisedInCr: 6068757.668961651,
        valuationInCr: 1233871.1837568162,
        updatedAt: '2023-05-09T21:13:44.714Z',
        startup: {
          create: {
            plansForUsingCash: 'String',
            updatedAt: '2023-05-09T21:13:44.714Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:13:44.714Z',
                locationID: 6768353,
                sectorCategoryID: 7682375,
                updatedAt: '2023-05-09T21:13:44.714Z',
                user: {
                  create: {
                    email: 'String2860999',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String4418417',
                    updatedAt: '2023-05-09T21:13:44.714Z',
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
