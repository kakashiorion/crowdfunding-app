import type { Prisma, Location } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LocationCreateArgs>({
  location: {
    one: { data: { state: 'String', updatedAt: '2023-05-09T21:03:04.406Z' } },
    two: { data: { state: 'String', updatedAt: '2023-05-09T21:03:04.406Z' } },
  },
})

export type StandardScenario = ScenarioData<Location, 'location'>
