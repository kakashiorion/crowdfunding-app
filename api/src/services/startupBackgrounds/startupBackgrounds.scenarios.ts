import type { Prisma, StartupBackground } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBackgroundCreateArgs>({
  startupBackground: {
    one: {
      data: {
        coreValues: 'String',
        updatedAt: '2023-05-09T21:07:41.250Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:07:41.250Z',
            locationID: 351049,
            sectorCategoryID: 1805998,
            updatedAt: '2023-05-09T21:07:41.250Z',
            user: {
              create: {
                email: 'String8136332',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4760147',
                updatedAt: '2023-05-09T21:07:41.250Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        coreValues: 'String',
        updatedAt: '2023-05-09T21:07:41.251Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:07:41.251Z',
            locationID: 7775483,
            sectorCategoryID: 8249285,
            updatedAt: '2023-05-09T21:07:41.251Z',
            user: {
              create: {
                email: 'String7242609',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String9746841',
                updatedAt: '2023-05-09T21:07:41.251Z',
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
