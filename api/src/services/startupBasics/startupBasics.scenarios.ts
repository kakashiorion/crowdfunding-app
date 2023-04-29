import type { Prisma, StartupBasic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBasicCreateArgs>({
  startupBasic: {
    one: {
      data: {
        valueProp: 'String',
        isFirstStartup: true,
        mission: 'String',
        vision: 'String',
        startupSize: 'ONE',
        coreValues: 'String',
        updatedAt: '2023-04-29T06:46:51.062Z',
        startup: {
          create: {
            name: 'String7906380',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:46:51.062Z',
            locationID: 4515682,
            industrySectorID: 6176755,
            updatedAt: '2023-04-29T06:46:51.062Z',
            user: {
              create: {
                email: 'String3607288',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:46:51.062Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        valueProp: 'String',
        isFirstStartup: true,
        mission: 'String',
        vision: 'String',
        startupSize: 'ONE',
        coreValues: 'String',
        updatedAt: '2023-04-29T06:46:51.062Z',
        startup: {
          create: {
            name: 'String8776249',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:46:51.062Z',
            locationID: 5850945,
            industrySectorID: 5766188,
            updatedAt: '2023-04-29T06:46:51.062Z',
            user: {
              create: {
                email: 'String8165491',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:46:51.062Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupBasic, 'startupBasic'>
