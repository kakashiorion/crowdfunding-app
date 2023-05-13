import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-11T22:21:59.629Z',
        commenter: {
          create: {
            email: 'String3237022',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String3419105',
            updatedAt: '2023-05-11T22:21:59.629Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-05-11T22:21:59.629Z',
            poster: {
              create: {
                email: 'String5822387',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String9554846',
                updatedAt: '2023-05-11T22:21:59.629Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-11T22:21:59.629Z',
        commenter: {
          create: {
            email: 'String1737625',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String7076556',
            updatedAt: '2023-05-11T22:21:59.629Z',
          },
        },
        post: {
          create: {
            title: 'String',
            updatedAt: '2023-05-11T22:21:59.629Z',
            poster: {
              create: {
                email: 'String5465857',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String7629817',
                updatedAt: '2023-05-11T22:21:59.629Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
