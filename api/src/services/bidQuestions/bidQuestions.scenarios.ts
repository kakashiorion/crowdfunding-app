import type { Prisma, BidQuestion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BidQuestionCreateArgs>({
  bidQuestion: {
    one: {
      data: {
        question: 'String',
        updatedAt: '2023-05-09T21:17:21.494Z',
        bid: {
          create: {
            capitalAvailable: 628686.7142980213,
            equityNeeded: 4392921.178362632,
            canHelpWith: 'String',
            updatedAt: '2023-05-09T21:17:21.494Z',
            offer: {
              create: {
                capitalTargetLacs: 3746661.2013728875,
                equityBeingIssued: 9009815.953024851,
                maxTicketSizeLacs: 8535797.819658305,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-09T21:17:21.494Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-09T21:17:21.494Z',
                    locationID: 8433394,
                    sectorCategoryID: 6165177,
                    updatedAt: '2023-05-09T21:17:21.494Z',
                    user: {
                      create: {
                        email: 'String4507260',
                        hashedPassword: 'String',
                        salt: 'String',
                        mobile: 'String7857451',
                        updatedAt: '2023-05-09T21:17:21.494Z',
                      },
                    },
                  },
                },
              },
            },
            investor: {
              create: {
                name: 'String',
                locationID: 1883457,
                workedInSectors: 'EDUCATION',
                updatedAt: '2023-05-09T21:17:21.494Z',
                user: {
                  create: {
                    email: 'String3710782',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String5563646',
                    updatedAt: '2023-05-09T21:17:21.494Z',
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
        updatedAt: '2023-05-09T21:17:21.494Z',
        bid: {
          create: {
            capitalAvailable: 9054015.77341181,
            equityNeeded: 1012393.487143104,
            canHelpWith: 'String',
            updatedAt: '2023-05-09T21:17:21.494Z',
            offer: {
              create: {
                capitalTargetLacs: 4706055.191447141,
                equityBeingIssued: 164116.35002951065,
                maxTicketSizeLacs: 3690908.6117321397,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-09T21:17:21.494Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-09T21:17:21.494Z',
                    locationID: 5685956,
                    sectorCategoryID: 4622723,
                    updatedAt: '2023-05-09T21:17:21.494Z',
                    user: {
                      create: {
                        email: 'String78397',
                        hashedPassword: 'String',
                        salt: 'String',
                        mobile: 'String2140649',
                        updatedAt: '2023-05-09T21:17:21.494Z',
                      },
                    },
                  },
                },
              },
            },
            investor: {
              create: {
                name: 'String',
                locationID: 9758713,
                workedInSectors: 'EDUCATION',
                updatedAt: '2023-05-09T21:17:21.494Z',
                user: {
                  create: {
                    email: 'String7258578',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String4683609',
                    updatedAt: '2023-05-09T21:17:21.494Z',
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
