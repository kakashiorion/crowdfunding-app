import type { Prisma, Location } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LocationCreateArgs>({
  location: {
    one: {
      data: {
        state: 'String',
        city: 'String',
        updatedAt: '2023-04-29T06:41:57.535Z',
      },
    },
    two: {
      data: {
        state: 'String',
        city: 'String',
        updatedAt: '2023-04-29T06:41:57.535Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Location, 'location'>
