import type { Prisma, Conversation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConversationCreateArgs>({
  conversation: {
    one: {
      data: {
        updatedAt: '2023-05-09T21:19:32.844Z',
        conversationStarter: {
          create: {
            email: 'String740692',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String8803217',
            updatedAt: '2023-05-09T21:19:32.844Z',
          },
        },
        conversationResponder: {
          create: {
            email: 'String954966',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String2469345',
            updatedAt: '2023-05-09T21:19:32.844Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-05-09T21:19:32.844Z',
        conversationStarter: {
          create: {
            email: 'String3566154',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String311831',
            updatedAt: '2023-05-09T21:19:32.844Z',
          },
        },
        conversationResponder: {
          create: {
            email: 'String3267075',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String5530003',
            updatedAt: '2023-05-09T21:19:32.844Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Conversation, 'conversation'>
