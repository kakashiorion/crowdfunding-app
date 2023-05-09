import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2580502',
        hashedPassword: 'String',
        salt: 'String',
        mobile: 'String6132107',
        updatedAt: '2023-05-09T21:00:08.154Z',
      },
    },
    two: {
      data: {
        email: 'String9723616',
        hashedPassword: 'String',
        salt: 'String',
        mobile: 'String4167171',
        updatedAt: '2023-05-09T21:00:08.154Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
