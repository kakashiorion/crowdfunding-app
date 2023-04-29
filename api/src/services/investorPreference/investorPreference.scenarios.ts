import type { Prisma, InvestorPreferences } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorPreferencesCreateArgs>({
  investorPreferences: {
    one: {
      data: {
        updatedAt: '2023-04-29T06:45:17.890Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:45:17.890Z',
            locationID: 4741797,
            workedInSectors: 60011,
            updatedAt: '2023-04-29T06:45:17.890Z',
            user: {
              create: {
                email: 'String6870241',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:45:17.890Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-04-29T06:45:17.890Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:45:17.890Z',
            locationID: 8676025,
            workedInSectors: 3476195,
            updatedAt: '2023-04-29T06:45:17.890Z',
            user: {
              create: {
                email: 'String4125988',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:45:17.890Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  InvestorPreferences,
  'investorPreferences'
>
