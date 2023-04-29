import type { Prisma, IndustrySector } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.IndustrySectorCreateArgs>({
  industrySector: {
    one: {
      data: {
        industry: 'EDUCATION',
        sector: 'AI',
        updatedAt: '2023-04-29T06:46:24.863Z',
      },
    },
    two: {
      data: {
        industry: 'EDUCATION',
        sector: 'AI',
        updatedAt: '2023-04-29T06:46:24.863Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<IndustrySector, 'industrySector'>
