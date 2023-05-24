import type { Prisma, Investor } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorCreateArgs>({
  investor: {
    one: {
      data: {
        name: 'String',
        locationID: 3385056,
        eduBG: 'NONE',
        yearsOfWorkEx: 'NONE',
        numberOfCompanies: 'NONE',
        workedInSectors: 'EDUCATION',
        updatedAt: '2023-05-24T18:00:50.675Z',
        user: {
          create: {
            email: 'String5636610',
            updatedAt: '2023-05-24T18:00:50.675Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        locationID: 340604,
        eduBG: 'NONE',
        yearsOfWorkEx: 'NONE',
        numberOfCompanies: 'NONE',
        workedInSectors: 'EDUCATION',
        updatedAt: '2023-05-24T18:00:50.675Z',
        user: {
          create: {
            email: 'String7329430',
            updatedAt: '2023-05-24T18:00:50.675Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Investor, 'investor'>
