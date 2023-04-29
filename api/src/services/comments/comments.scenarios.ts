import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-04-29T06:53:11.068Z',
        commenter: {
          create: {
            email: 'String3325107',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:11.068Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-04-29T06:53:11.068Z',
            poster: {
              create: {
                email: 'String3173080',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:53:11.068Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-04-29T06:53:11.068Z',
        commenter: {
          create: {
            email: 'String6144406',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:53:11.068Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-04-29T06:53:11.068Z',
            poster: {
              create: {
                email: 'String9026893',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:53:11.068Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
