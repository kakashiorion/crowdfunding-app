import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3320113',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-04-29T06:34:46.087Z',
      },
    },
    two: {
      data: {
        email: 'String3043083',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-04-29T06:34:46.087Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
