import type { Prisma, StartupBusiness } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBusinessCreateArgs>({
  startupBusiness: {
    one: {
      data: {
        partners: 'String',
        customers: 'String',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentActivities: 'String',
        updatedAt: '2023-05-09T21:10:59.566Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:10:59.566Z',
            locationID: 4729573,
            sectorCategoryID: 9127019,
            updatedAt: '2023-05-09T21:10:59.566Z',
            user: {
              create: {
                email: 'String748724',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String2877637',
                updatedAt: '2023-05-09T21:10:59.566Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        partners: 'String',
        customers: 'String',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentActivities: 'String',
        updatedAt: '2023-05-09T21:10:59.566Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:10:59.566Z',
            locationID: 458157,
            sectorCategoryID: 3612426,
            updatedAt: '2023-05-09T21:10:59.566Z',
            user: {
              create: {
                email: 'String1371771',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4010330',
                updatedAt: '2023-05-09T21:10:59.566Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupBusiness, 'startupBusiness'>
