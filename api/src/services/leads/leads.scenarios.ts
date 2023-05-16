import type { Prisma, Lead } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LeadCreateArgs>({
  lead: {
    one: {
      data: {
        email: 'String',
        phone: 'String',
        gToken: 'String',
        type: 'INVESTOR',
        updatedAt: '2023-05-16T11:37:58.058Z',
      },
    },
    two: {
      data: {
        email: 'String',
        phone: 'String',
        gToken: 'String',
        type: 'INVESTOR',
        updatedAt: '2023-05-16T11:37:58.058Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Lead, 'lead'>
