import type { Prisma, Startup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupCreateArgs>({
  startup: {
    one: {
      data: {
        name: 'String4772756',
        writeUp: 'String',
        dateIncorporated: '2023-04-29T06:46:07.381Z',
        locationID: 4870272,
        industrySectorID: 1369015,
        updatedAt: '2023-04-29T06:46:07.381Z',
        user: {
          create: {
            email: 'String5942583',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:46:07.381Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String5937486',
        writeUp: 'String',
        dateIncorporated: '2023-04-29T06:46:07.381Z',
        locationID: 2168830,
        industrySectorID: 1839070,
        updatedAt: '2023-04-29T06:46:07.381Z',
        user: {
          create: {
            email: 'String2375193',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-04-29T06:46:07.381Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Startup, 'startup'>
