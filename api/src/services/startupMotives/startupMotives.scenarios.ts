import type { Prisma, StartupMotive } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupMotiveCreateArgs>({
  startupMotive: {
    one: {
      data: {
        platformGoal: 'RAISE_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        preferredIndustrySectors: 2697184,
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 9861180,
        updatedAt: '2023-04-29T06:50:33.178Z',
        startup: {
          create: {
            name: 'String9965099',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:50:33.178Z',
            locationID: 5363382,
            industrySectorID: 9692711,
            updatedAt: '2023-04-29T06:50:33.178Z',
            user: {
              create: {
                email: 'String6427195',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:50:33.178Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        platformGoal: 'RAISE_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        preferredIndustrySectors: 1406002,
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 4551452,
        updatedAt: '2023-04-29T06:50:33.178Z',
        startup: {
          create: {
            name: 'String2613588',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:50:33.178Z',
            locationID: 8938498,
            industrySectorID: 570460,
            updatedAt: '2023-04-29T06:50:33.178Z',
            user: {
              create: {
                email: 'String8695922',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:50:33.178Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupMotive, 'startupMotive'>
