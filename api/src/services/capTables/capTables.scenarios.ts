import type { Prisma, CapTable } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CapTableCreateArgs>({
  capTable: {
    one: {
      data: {
        shareholder: 'String',
        equityShare: 953485.4334867471,
        updatedAt: '2023-04-29T06:50:11.514Z',
        startup: {
          create: {
            currentValuationLacs: 4377622.084093462,
            currentStage: 'SEED',
            plansForUsingCash: 'String',
            biggestCostHeads: 'String',
            updatedAt: '2023-04-29T06:50:11.514Z',
            startup: {
              create: {
                name: 'String7036877',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:50:11.514Z',
                locationID: 3650996,
                industrySectorID: 183775,
                updatedAt: '2023-04-29T06:50:11.514Z',
                user: {
                  create: {
                    email: 'String9108614',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:50:11.514Z',
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
        shareholder: 'String',
        equityShare: 3295261.623517285,
        updatedAt: '2023-04-29T06:50:11.514Z',
        startup: {
          create: {
            currentValuationLacs: 9366590.335499037,
            currentStage: 'SEED',
            plansForUsingCash: 'String',
            biggestCostHeads: 'String',
            updatedAt: '2023-04-29T06:50:11.514Z',
            startup: {
              create: {
                name: 'String5519658',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:50:11.514Z',
                locationID: 8524112,
                industrySectorID: 8773028,
                updatedAt: '2023-04-29T06:50:11.514Z',
                user: {
                  create: {
                    email: 'String8875370',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:50:11.514Z',
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
