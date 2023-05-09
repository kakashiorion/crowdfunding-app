import type { Prisma, KeyPeople } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KeyPeopleCreateArgs>({
  keyPeople: {
    one: {
      data: {
        name: 'String',
        role: 'String',
        updatedAt: '2023-05-09T21:09:53.938Z',
        startupBackground: {
          create: {
            coreValues: 'String',
            updatedAt: '2023-05-09T21:09:53.938Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:09:53.938Z',
                locationID: 1493109,
                sectorCategoryID: 3850340,
                updatedAt: '2023-05-09T21:09:53.938Z',
                user: {
                  create: {
                    email: 'String7038968',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String6375692',
                    updatedAt: '2023-05-09T21:09:53.938Z',
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
        updatedAt: '2023-05-09T21:09:53.938Z',
        startupBackground: {
          create: {
            coreValues: 'String',
            updatedAt: '2023-05-09T21:09:53.938Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:09:53.938Z',
                locationID: 4594245,
                sectorCategoryID: 3544993,
                updatedAt: '2023-05-09T21:09:53.938Z',
                user: {
                  create: {
                    email: 'String6218953',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String4796879',
                    updatedAt: '2023-05-09T21:09:53.938Z',
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
