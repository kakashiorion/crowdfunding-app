import type { Prisma, LandingContact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LandingContactCreateArgs>({
  landingContact: {
    one: {
      data: {
        email: 'String',
        query: 'String',
        updatedAt: '2023-05-16T11:29:08.516Z',
      },
    },
    two: {
      data: {
        email: 'String',
        query: 'String',
        updatedAt: '2023-05-16T11:29:08.516Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<LandingContact, 'landingContact'>
