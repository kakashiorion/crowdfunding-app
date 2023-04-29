import type { Prisma, InvestorExperience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorExperienceCreateArgs>({
  investorExperience: {
    one: {
      data: {
        hasInvestedBefore: true,
        hasFoundStartup: true,
        hasWorkedInStartup: true,
        updatedAt: '2023-04-29T06:42:27.402Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:42:27.402Z',
            locationID: 1350000,
            workedInSectors: 3517321,
            updatedAt: '2023-04-29T06:42:27.402Z',
            user: {
              create: {
                email: 'String2209780',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:42:27.402Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        hasInvestedBefore: true,
        hasFoundStartup: true,
        hasWorkedInStartup: true,
        updatedAt: '2023-04-29T06:42:27.402Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:42:27.402Z',
            locationID: 5306896,
            workedInSectors: 3358445,
            updatedAt: '2023-04-29T06:42:27.402Z',
            user: {
              create: {
                email: 'String866863',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:42:27.402Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  InvestorExperience,
  'investorExperience'
>
