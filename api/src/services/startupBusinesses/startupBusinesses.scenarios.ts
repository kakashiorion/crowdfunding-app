import type { Prisma, StartupBusiness } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBusinessCreateArgs>({
  startupBusiness: {
    one: {
      data: {
        numberUsers: 'LESS_THAN_100',
        numberCities: 'NONE',
        distributionType: 'B2B',
        partners: 'String',
        customers: 'String',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentActivities: 'String',
        hasOnlineBusiness: 'YES',
        updatedAt: '2023-05-24T18:14:40.671Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:14:40.671Z',
            locationID: 5825254,
            sectorCategoryID: 8901939,
            updatedAt: '2023-05-24T18:14:40.671Z',
            user: {
              create: {
                email: 'String1158700',
                updatedAt: '2023-05-24T18:14:40.671Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        numberUsers: 'LESS_THAN_100',
        numberCities: 'NONE',
        distributionType: 'B2B',
        partners: 'String',
        customers: 'String',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentActivities: 'String',
        hasOnlineBusiness: 'YES',
        updatedAt: '2023-05-24T18:14:40.671Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-24T18:14:40.671Z',
            locationID: 6144441,
            sectorCategoryID: 161438,
            updatedAt: '2023-05-24T18:14:40.671Z',
            user: {
              create: {
                email: 'String6007082',
                updatedAt: '2023-05-24T18:14:40.671Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupBusiness, 'startupBusiness'>
