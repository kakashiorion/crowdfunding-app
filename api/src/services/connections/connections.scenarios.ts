import type { Prisma, Connection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConnectionCreateArgs>({
  connection: {
    one: {
      data: {
        updatedAt: '2023-05-09T21:01:30.338Z',
        requestingUser: {
          create: {
            email: 'String6543758',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String7542190',
            updatedAt: '2023-05-09T21:01:30.338Z',
          },
        },
        acceptingUser: {
          create: {
            email: 'String799181',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String161835',
            updatedAt: '2023-05-09T21:01:30.338Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-05-09T21:01:30.338Z',
        requestingUser: {
          create: {
            email: 'String6346804',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String9732731',
            updatedAt: '2023-05-09T21:01:30.338Z',
          },
        },
        acceptingUser: {
          create: {
            email: 'String9175791',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String8551683',
            updatedAt: '2023-05-09T21:01:30.338Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Connection, 'connection'>
