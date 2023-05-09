import type { Prisma, StartupObjective } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupObjectiveCreateArgs>({
  startupObjective: {
    one: {
      data: {
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 9328527,
        platformGoal: 'RAISING_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        demoURL: 'String',
        updatedAt: '2023-05-09T21:14:55.717Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:14:55.717Z',
            locationID: 6617178,
            sectorCategoryID: 9039369,
            updatedAt: '2023-05-09T21:14:55.717Z',
            user: {
              create: {
                email: 'String8124911',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String2452458',
                updatedAt: '2023-05-09T21:14:55.717Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 2991172,
        platformGoal: 'RAISING_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        demoURL: 'String',
        updatedAt: '2023-05-09T21:14:55.717Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:14:55.717Z',
            locationID: 9695674,
            sectorCategoryID: 2769390,
            updatedAt: '2023-05-09T21:14:55.717Z',
            user: {
              create: {
                email: 'String6202296',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4991925',
                updatedAt: '2023-05-09T21:14:55.717Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  StartupObjective,
  'startupObjective'
>
