import type { Prisma, Investor } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorCreateArgs>({
  investor: {
    one: {
      data: {
        name: 'String',
        locationID: 8447597,
        workedInSectors: 'EDUCATION',
        updatedAt: '2023-05-09T21:02:19.923Z',
        user: {
          create: {
            email: 'String3822651',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String2763973',
            updatedAt: '2023-05-09T21:02:19.923Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        locationID: 3031258,
        workedInSectors: 'EDUCATION',
        updatedAt: '2023-05-09T21:02:19.923Z',
        user: {
          create: {
            email: 'String2863622',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String664992',
            updatedAt: '2023-05-09T21:02:19.923Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Investor, 'investor'>
