import type { Prisma, Investor } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorCreateArgs>({
  investor: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-04-29T06:40:59.512Z',
        locationID: 399790,
        workedInSectors: 5226778,
        updatedAt: '2023-04-29T06:40:59.512Z',
        user: {
          create: {
            email: 'String5183100',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:40:59.512Z',
          },
        },
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-04-29T06:40:59.512Z',
        locationID: 8473175,
        workedInSectors: 1210167,
        updatedAt: '2023-04-29T06:40:59.512Z',
        user: {
          create: {
            email: 'String9682452',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:40:59.512Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Investor, 'investor'>
