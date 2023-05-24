import type { Prisma, Startup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupCreateArgs>({
  startup: {
    one: {
      data: {
        name: 'String',
        writeUp: 'String',
        dateIncorporated: '2023-05-24T18:12:58.276Z',
        locationID: 8829909,
        sectorCategoryID: 8496414,
        updatedAt: '2023-05-24T18:12:58.276Z',
        user: {
          create: {
            email: 'String2102343',
            updatedAt: '2023-05-24T18:12:58.276Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        writeUp: 'String',
        dateIncorporated: '2023-05-24T18:12:58.276Z',
        locationID: 8542197,
        sectorCategoryID: 6299431,
        updatedAt: '2023-05-24T18:12:58.276Z',
        user: {
          create: {
            email: 'String6756213',
            updatedAt: '2023-05-24T18:12:58.276Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Startup, 'startup'>
