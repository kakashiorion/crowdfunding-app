import type { Prisma, CapTable } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CapTableCreateArgs>({
  capTable: {
    one: {
      data: {
        shareholderName: 'String',
        equityShare: 560783.952063224,
        updatedAt: '2023-05-09T21:14:26.724Z',
        startupFinancials: {
          create: {
            plansForUsingCash: 'String',
            updatedAt: '2023-05-09T21:14:26.724Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:14:26.724Z',
                locationID: 3873866,
                sectorCategoryID: 8749247,
                updatedAt: '2023-05-09T21:14:26.724Z',
                user: {
                  create: {
                    email: 'String1818260',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String9210918',
                    updatedAt: '2023-05-09T21:14:26.725Z',
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
        shareholderName: 'String',
        equityShare: 918415.2163525327,
        updatedAt: '2023-05-09T21:14:26.725Z',
        startupFinancials: {
          create: {
            plansForUsingCash: 'String',
            updatedAt: '2023-05-09T21:14:26.725Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:14:26.725Z',
                locationID: 8958058,
                sectorCategoryID: 8024579,
                updatedAt: '2023-05-09T21:14:26.725Z',
                user: {
                  create: {
                    email: 'String4412',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String2856352',
                    updatedAt: '2023-05-09T21:14:26.725Z',
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

export type StandardScenario = ScenarioData<CapTable, 'capTable'>
