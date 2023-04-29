import type { Prisma, Conversation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConversationCreateArgs>({
  conversation: {
    one: {
      data: {
        updatedAt: '2023-04-29T06:53:36.473Z',
        conversationStarter: {
          create: {
            email: 'String1224693',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:36.473Z',
          },
        },
        conversationResponder: {
          create: {
            email: 'String7328315',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:36.473Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-04-29T06:53:36.473Z',
        conversationStarter: {
          create: {
            email: 'String5338296',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:36.473Z',
          },
        },
        conversationResponder: {
          create: {
            email: 'String1143220',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:36.473Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Conversation, 'conversation'>
