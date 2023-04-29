import type { Prisma, BidQuestion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BidQuestionCreateArgs>({
  bidQuestion: {
    one: {
      data: {
        question: 'String',
        updatedAt: '2023-04-29T06:52:26.806Z',
        bid: {
          create: {
            capitalAvailable: 2568939.0899334108,
            equityNeeded: 2980566.951399628,
            canHelpWith: 'String',
            updatedAt: '2023-04-29T06:52:26.806Z',
            offer: {
              create: {
                capitalTargetLacs: 4370449.448087907,
                equityBeingIssued: 6730151.7634351235,
                maxTicketSizeLacs: 6457426.324241284,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-04-29T06:52:26.806Z',
                startup: {
                  create: {
                    name: 'String5356996',
                    writeUp: 'String',
                    dateIncorporated: '2023-04-29T06:52:26.806Z',
                    locationID: 7355790,
                    industrySectorID: 9889076,
                    updatedAt: '2023-04-29T06:52:26.806Z',
                    user: {
                      create: {
                        email: 'String4913845',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2023-04-29T06:52:26.806Z',
                      },
                    },
                  },
                },
              },
            },
            investor: {
              create: {
                firstName: 'String',
                lastName: 'String',
                dateOfBirth: '2023-04-29T06:52:26.806Z',
                locationID: 5428758,
                workedInSectors: 1030252,
                updatedAt: '2023-04-29T06:52:26.806Z',
                user: {
                  create: {
                    email: 'String67185',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:52:26.806Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        question: 'String',
        updatedAt: '2023-04-29T06:52:26.806Z',
        bid: {
          create: {
            capitalAvailable: 1352533.8008387045,
            equityNeeded: 5196667.227861945,
            canHelpWith: 'String',
            updatedAt: '2023-04-29T06:52:26.806Z',
            offer: {
              create: {
                capitalTargetLacs: 620376.312721711,
                equityBeingIssued: 5835504.587047498,
                maxTicketSizeLacs: 5647698.582431662,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-04-29T06:52:26.806Z',
                startup: {
                  create: {
                    name: 'String8253336',
                    writeUp: 'String',
                    dateIncorporated: '2023-04-29T06:52:26.806Z',
                    locationID: 486416,
                    industrySectorID: 1169810,
                    updatedAt: '2023-04-29T06:52:26.806Z',
                    user: {
                      create: {
                        email: 'String6132935',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2023-04-29T06:52:26.806Z',
                      },
                    },
                  },
                },
              },
            },
            investor: {
              create: {
                firstName: 'String',
                lastName: 'String',
                dateOfBirth: '2023-04-29T06:52:26.806Z',
                locationID: 2289590,
                workedInSectors: 2459060,
                updatedAt: '2023-04-29T06:52:26.806Z',
                user: {
                  create: {
                    email: 'String3248835',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:52:26.806Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<BidQuestion, 'bidQuestion'>
