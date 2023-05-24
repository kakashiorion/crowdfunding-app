import type { Prisma, StartupObjective } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupObjectiveCreateArgs>({
  startupObjective: {
    one: {
      data: {
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 9802012,
        expectedTimeline: 'LESS_THAN_SIX_MONTHS',
        promisingReturns: 'BREAKEVEN',
        platformGoal: 'RAISING_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        demoURL: 'String',
        updatedAt: '2023-05-24T18:16:49.828Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:16:49.828Z',
            locationID: 4858105,
            sectorCategoryID: 279356,
            updatedAt: '2023-05-24T18:16:49.828Z',
            user: {
              create: {
                email: 'String2759133',
                updatedAt: '2023-05-24T18:16:49.828Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 1151300,
        expectedTimeline: 'LESS_THAN_SIX_MONTHS',
        promisingReturns: 'BREAKEVEN',
        platformGoal: 'RAISING_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        demoURL: 'String',
        updatedAt: '2023-05-24T18:16:49.829Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:16:49.829Z',
            locationID: 638732,
            sectorCategoryID: 1386530,
            updatedAt: '2023-05-24T18:16:49.829Z',
            user: {
              create: {
                email: 'String697826',
                updatedAt: '2023-05-24T18:16:49.829Z',
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
