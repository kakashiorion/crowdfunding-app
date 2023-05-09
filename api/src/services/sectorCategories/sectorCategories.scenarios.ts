import type { Prisma, SectorCategory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SectorCategoryCreateArgs>({
  sectorCategory: {
    one: {
      data: {
        sector: 'EDUCATION',
        category: 'String',
        updatedAt: '2023-05-09T21:07:03.391Z',
      },
    },
    two: {
      data: {
        sector: 'EDUCATION',
        category: 'String',
        updatedAt: '2023-05-09T21:07:03.391Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SectorCategory, 'sectorCategory'>
