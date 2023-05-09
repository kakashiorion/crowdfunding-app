import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-09T21:20:09.556Z',
        conversation: {
          create: {
            updatedAt: '2023-05-09T21:20:09.556Z',
            conversationStarter: {
              create: {
                email: 'String3709862',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String1368886',
                updatedAt: '2023-05-09T21:20:09.557Z',
              },
            },
            conversationResponder: {
              create: {
                email: 'String8607739',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String8511082',
                updatedAt: '2023-05-09T21:20:09.557Z',
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String2332582',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String1832193',
            updatedAt: '2023-05-09T21:20:09.557Z',
          },
        },
        receiver: {
          create: {
            email: 'String8226135',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String2245310',
            updatedAt: '2023-05-09T21:20:09.557Z',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-09T21:20:09.557Z',
        conversation: {
          create: {
            updatedAt: '2023-05-09T21:20:09.557Z',
            conversationStarter: {
              create: {
                email: 'String3055878',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4923293',
                updatedAt: '2023-05-09T21:20:09.557Z',
              },
            },
            conversationResponder: {
              create: {
                email: 'String8273028',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4351640',
                updatedAt: '2023-05-09T21:20:09.557Z',
              },
            },
          },
        },
        sender: {
          create: {
            email: 'String6585277',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String9795010',
            updatedAt: '2023-05-09T21:20:09.557Z',
          },
        },
        receiver: {
          create: {
            email: 'String3969116',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String8305796',
            updatedAt: '2023-05-09T21:20:09.557Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
