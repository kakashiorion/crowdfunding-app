import type { Prisma, StartupBackground } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBackgroundCreateArgs>({
  startupBackground: {
    one: {
      data: {
        foundedBefore: 'NONE',
        coreValues: 'String',
        startupTeamSize: 'ONE',
        updatedAt: '2023-05-24T18:14:02.298Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:14:02.298Z',
            locationID: 4181897,
            sectorCategoryID: 4121191,
            updatedAt: '2023-05-24T18:14:02.298Z',
            user: {
              create: {
                email: 'String3769843',
                updatedAt: '2023-05-24T18:14:02.298Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        foundedBefore: 'NONE',
        coreValues: 'String',
        startupTeamSize: 'ONE',
        updatedAt: '2023-05-24T18:14:02.298Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:14:02.298Z',
            locationID: 4730954,
            sectorCategoryID: 7484810,
            updatedAt: '2023-05-24T18:14:02.298Z',
            user: {
              create: {
                email: 'String2469123',
                updatedAt: '2023-05-24T18:14:02.298Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  StartupBackground,
  'startupBackground'
>
