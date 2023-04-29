import type { Prisma, StartupPreferences } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupPreferencesCreateArgs>({
  startupPreferences: {
    one: {
      data: {
        updatedAt: '2023-04-29T06:51:14.949Z',
        startup: {
          create: {
            name: 'String4575190',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:51:14.949Z',
            locationID: 3107805,
            industrySectorID: 8747286,
            updatedAt: '2023-04-29T06:51:14.949Z',
            user: {
              create: {
                email: 'String9130320',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:51:14.949Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-04-29T06:51:14.949Z',
        startup: {
          create: {
            name: 'String7024568',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:51:14.949Z',
            locationID: 9981685,
            industrySectorID: 9614925,
            updatedAt: '2023-04-29T06:51:14.949Z',
            user: {
              create: {
                email: 'String475569',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:51:14.949Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  StartupPreferences,
  'startupPreferences'
>
