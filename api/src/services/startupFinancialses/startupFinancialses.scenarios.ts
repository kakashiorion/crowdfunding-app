import type { Prisma, StartupFinancials } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupFinancialsCreateArgs>({
  startupFinancials: {
    one: {
      data: {
        plansForUsingCash: 'String',
        updatedAt: '2023-05-09T21:12:47.613Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:12:47.613Z',
            locationID: 4527777,
            sectorCategoryID: 4899782,
            updatedAt: '2023-05-09T21:12:47.613Z',
            user: {
              create: {
                email: 'String4097334',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String2241381',
                updatedAt: '2023-05-09T21:12:47.613Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        plansForUsingCash: 'String',
        updatedAt: '2023-05-09T21:12:47.613Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:12:47.613Z',
            locationID: 1125691,
            sectorCategoryID: 6445326,
            updatedAt: '2023-05-09T21:12:47.613Z',
            user: {
              create: {
                email: 'String5133581',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String1764430',
                updatedAt: '2023-05-09T21:12:47.613Z',
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
