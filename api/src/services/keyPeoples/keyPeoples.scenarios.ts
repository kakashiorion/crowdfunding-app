import type { Prisma, KeyPeople } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KeyPeopleCreateArgs>({
  keyPeople: {
    one: {
      data: {
        name: 'String',
        role: 'String',
        updatedAt: '2023-04-29T06:47:43.105Z',
        startup: {
          create: {
            valueProp: 'String',
            isFirstStartup: true,
            mission: 'String',
            vision: 'String',
            startupSize: 'ONE',
            coreValues: 'String',
            updatedAt: '2023-04-29T06:47:43.105Z',
            startup: {
              create: {
                name: 'String2201293',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:47:43.105Z',
                locationID: 6110481,
                industrySectorID: 2114352,
                updatedAt: '2023-04-29T06:47:43.105Z',
                user: {
                  create: {
                    email: 'String4885238',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:47:43.105Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        role: 'String',
        updatedAt: '2023-04-29T06:47:43.105Z',
        startup: {
          create: {
            valueProp: 'String',
            isFirstStartup: true,
            mission: 'String',
            vision: 'String',
            startupSize: 'ONE',
            coreValues: 'String',
            updatedAt: '2023-04-29T06:47:43.105Z',
            startup: {
              create: {
                name: 'String1020940',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:47:43.106Z',
                locationID: 5761730,
                industrySectorID: 2085369,
                updatedAt: '2023-04-29T06:47:43.106Z',
                user: {
                  create: {
                    email: 'String1140999',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:47:43.106Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<KeyPeople, 'keyPeople'>
