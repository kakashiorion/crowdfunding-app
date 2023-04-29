import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-04-29T06:54:11.724Z',
        conversation: {
          create: {
            updatedAt: '2023-04-29T06:54:11.725Z',
            conversationStarter: {
              create: {
                email: 'String7599179',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:54:11.725Z',
              },
            },
            conversationResponder: {
              create: {
                email: 'String8431450',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:54:11.725Z',
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String1980307',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:54:11.725Z',
          },
        },
        receiver: {
          create: {
            email: 'String459387',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:54:11.725Z',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-04-29T06:54:11.725Z',
        conversation: {
          create: {
            updatedAt: '2023-04-29T06:54:11.725Z',
            conversationStarter: {
              create: {
                email: 'String9634469',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:54:11.725Z',
              },
            },
            conversationResponder: {
              create: {
                email: 'String2296837',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:54:11.725Z',
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String4815262',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:54:11.726Z',
          },
        },
        receiver: {
          create: {
            email: 'String7626748',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:54:11.726Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
