import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2023-05-09T21:18:23.698Z',
        poster: {
          create: {
            email: 'String1268918',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String8061268',
            updatedAt: '2023-05-09T21:18:23.698Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2023-05-09T21:18:23.698Z',
        poster: {
          create: {
            email: 'String9664126',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String4437136',
            updatedAt: '2023-05-09T21:18:23.698Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
