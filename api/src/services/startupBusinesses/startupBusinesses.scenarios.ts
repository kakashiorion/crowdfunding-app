import type { Prisma, StartupBusiness } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StartupBusinessCreateArgs>({
  startupBusiness: {
    one: {
      data: {
        numberUsersFY: 7533627,
        numberCitiesFY: 5362675,
        distributionType: 'B2B',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentFYActivities: 'String',
        hasOnlineBusiness: true,
        partners: 'String',
        customers: 'String',
        shortTermPlan: 'EXPAND_GEO',
        trends: 'String',
        competitors: 'String',
        opporunities: 'String',
        threats: 'String',
        xFactor: 'String',
        updatedAt: '2023-04-29T06:47:14.923Z',
        startup: {
          create: {
            name: 'String6333661',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:47:14.923Z',
            locationID: 6336817,
            industrySectorID: 614383,
            updatedAt: '2023-04-29T06:47:14.923Z',
            user: {
              create: {
                email: 'String1903103',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:47:14.923Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        numberUsersFY: 5699202,
        numberCitiesFY: 1657340,
        distributionType: 'B2B',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentFYActivities: 'String',
        hasOnlineBusiness: true,
        partners: 'String',
        customers: 'String',
        shortTermPlan: 'EXPAND_GEO',
        trends: 'String',
        competitors: 'String',
        opporunities: 'String',
        threats: 'String',
        xFactor: 'String',
        updatedAt: '2023-04-29T06:47:14.923Z',
        startup: {
          create: {
            name: 'String7974024',
            writeUp: 'String',
            dateIncorporated: '2023-04-29T06:47:14.923Z',
            locationID: 6919646,
            industrySectorID: 4755775,
            updatedAt: '2023-04-29T06:47:14.923Z',
            user: {
              create: {
                email: 'String8382881',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:47:14.923Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StartupBusiness, 'startupBusiness'>
