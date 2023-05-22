import type { Prisma, DirectMessage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DirectMessageCreateArgs>({
  directMessage: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:13:35.085Z',
        conversation: { create: { updatedAt: '2023-05-22T16:13:35.085Z' } },
        sender: {
          create: {
            email: 'String8457773',
            updatedAt: '2023-05-22T16:13:35.085Z',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:13:35.085Z',
        conversation: { create: { updatedAt: '2023-05-22T16:13:35.085Z' } },
        sender: {
          create: {
            email: 'String9706683',
            updatedAt: '2023-05-22T16:13:35.085Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<DirectMessage, 'directMessage'>
