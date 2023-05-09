import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-09T21:18:57.033Z',
        commenter: {
          create: {
            email: 'String3725508',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String4370602',
            updatedAt: '2023-05-09T21:18:57.033Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-05-09T21:18:57.033Z',
            poster: {
              create: {
                email: 'String676870',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String6345461',
                updatedAt: '2023-05-09T21:18:57.033Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-09T21:18:57.033Z',
        commenter: {
          create: {
            email: 'String7877543',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String3214416',
            updatedAt: '2023-05-09T21:18:57.033Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-05-09T21:18:57.033Z',
            poster: {
              create: {
                email: 'String2744771',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String9924801',
                updatedAt: '2023-05-09T21:18:57.033Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
