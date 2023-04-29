import type { Prisma, Connection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConnectionCreateArgs>({
  connection: {
    one: {
      data: {
        updatedAt: '2023-04-29T06:38:02.690Z',
        requestingUser: {
          create: {
            email: 'String8923000',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:38:02.690Z',
          },
        },
        acceptingUser: {
          create: {
            email: 'String834947',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:38:02.690Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-04-29T06:38:02.690Z',
        requestingUser: {
          create: {
            email: 'String5110878',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:38:02.690Z',
          },
        },
        acceptingUser: {
          create: {
            email: 'String3176122',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:38:02.690Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Connection, 'connection'>
