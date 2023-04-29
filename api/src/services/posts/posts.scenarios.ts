import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2023-04-29T06:52:53.334Z',
        poster: {
          create: {
            email: 'String4974528',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:52:53.334Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2023-04-29T06:52:53.334Z',
        poster: {
          create: {
            email: 'String4231967',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:52:53.334Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
