import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String7313004', updatedAt: '2023-05-24T18:09:46.604Z' },
    },
    two: {
      data: { email: 'String782178', updatedAt: '2023-05-24T18:09:46.604Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
