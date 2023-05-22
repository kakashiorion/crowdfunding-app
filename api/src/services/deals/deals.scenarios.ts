import type { Prisma, Deal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DealCreateArgs>({
  deal: {
    one: {
      data: {
        fundingAmountLacs: 2189434.9293510085,
        updatedAt: '2023-05-22T16:12:20.983Z',
        offer: {
          create: {
            capitalTargetLacs: 4099828.3819157756,
            equityBeingIssued: 550780.9872108438,
            maxTicketSizeLacs: 714176.0916940277,
            numberOfInvestors: 2503943,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-22T16:12:20.984Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-22T16:12:20.984Z',
                locationID: 4041011,
                sectorCategoryID: 4501084,
                updatedAt: '2023-05-22T16:12:20.984Z',
                user: {
                  create: {
                    email: 'String8251911',
                    updatedAt: '2023-05-22T16:12:20.984Z',
                  },
                },
              },
            },
          },
        },
        investor: {
          create: {
            name: 'String',
            locationID: 593418,
            eduBG: 'HIGH_SCHOOL',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-22T16:12:20.984Z',
            user: {
              create: {
                email: 'String2830259',
                updatedAt: '2023-05-22T16:12:20.984Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        fundingAmountLacs: 2984300.52191784,
        updatedAt: '2023-05-22T16:12:20.984Z',
        offer: {
          create: {
            capitalTargetLacs: 2735253.520165921,
            equityBeingIssued: 8570283.940096099,
            maxTicketSizeLacs: 1792623.0602427619,
            numberOfInvestors: 8151512,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-22T16:12:20.984Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-22T16:12:20.984Z',
                locationID: 9134260,
                sectorCategoryID: 2141444,
                updatedAt: '2023-05-22T16:12:20.984Z',
                user: {
                  create: {
                    email: 'String1343476',
                    updatedAt: '2023-05-22T16:12:20.984Z',
                  },
                },
              },
            },
          },
        },
        investor: {
          create: {
            name: 'String',
            locationID: 2540777,
            eduBG: 'HIGH_SCHOOL',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-22T16:12:20.984Z',
            user: {
              create: {
                email: 'String6289568',
                updatedAt: '2023-05-22T16:12:20.984Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Deal, 'deal'>
