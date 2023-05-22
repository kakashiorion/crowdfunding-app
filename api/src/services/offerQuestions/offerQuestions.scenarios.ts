import type { Prisma, OfferQuestion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfferQuestionCreateArgs>({
  offerQuestion: {
    one: {
      data: {
        question: 'String',
        updatedAt: '2023-05-22T16:12:49.990Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T16:12:49.990Z',
            offer: {
              create: {
                capitalTargetLacs: 2944436.2510798005,
                equityBeingIssued: 569906.4052089242,
                maxTicketSizeLacs: 8596364.12933534,
                numberOfInvestors: 6716200,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T16:12:49.990Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T16:12:49.990Z',
                    locationID: 6148777,
                    sectorCategoryID: 4063669,
                    updatedAt: '2023-05-22T16:12:49.990Z',
                    user: {
                      create: {
                        email: 'String9858850',
                        updatedAt: '2023-05-22T16:12:49.990Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        asker: {
          create: {
            name: 'String',
            locationID: 7896093,
            eduBG: 'HIGH_SCHOOL',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-22T16:12:49.990Z',
            user: {
              create: {
                email: 'String396931',
                updatedAt: '2023-05-22T16:12:49.990Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        question: 'String',
        updatedAt: '2023-05-22T16:12:49.990Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T16:12:49.990Z',
            offer: {
              create: {
                capitalTargetLacs: 3132953.4568100483,
                equityBeingIssued: 5044784.550297619,
                maxTicketSizeLacs: 8801243.967925517,
                numberOfInvestors: 8485637,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T16:12:49.990Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T16:12:49.990Z',
                    locationID: 9234214,
                    sectorCategoryID: 9114834,
                    updatedAt: '2023-05-22T16:12:49.990Z',
                    user: {
                      create: {
                        email: 'String5795375',
                        updatedAt: '2023-05-22T16:12:49.990Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        asker: {
          create: {
            name: 'String',
            locationID: 5780651,
            eduBG: 'HIGH_SCHOOL',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-22T16:12:49.990Z',
            user: {
              create: {
                email: 'String8774679',
                updatedAt: '2023-05-22T16:12:49.990Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<OfferQuestion, 'offerQuestion'>
