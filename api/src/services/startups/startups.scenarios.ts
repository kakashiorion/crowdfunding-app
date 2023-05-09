import type { Prisma, Startup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupCreateArgs>({
  startup: {
    one: {
      data: {
        name: 'String',
        writeUp: 'String',
        dateIncorporated: '2023-05-09T21:05:27.160Z',
        locationID: 779049,
        sectorCategoryID: 4642469,
        updatedAt: '2023-05-09T21:05:27.160Z',
        user: {
          create: {
            email: 'String906149',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String9710385',
            updatedAt: '2023-05-09T21:05:27.160Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        writeUp: 'String',
        dateIncorporated: '2023-05-09T21:05:27.160Z',
        locationID: 4334221,
        sectorCategoryID: 5775284,
        updatedAt: '2023-05-09T21:05:27.160Z',
        user: {
          create: {
            email: 'String2787208',
            hashedPassword: 'String',
            salt: 'String',
            mobile: 'String9820059',
            updatedAt: '2023-05-09T21:05:27.160Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Startup, 'startup'>
