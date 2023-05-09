import type { Prisma, Bid } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BidCreateArgs>({
  bid: {
    one: {
      data: {
        capitalAvailable: 4923304.213781819,
        equityNeeded: 9226051.137280952,
        canHelpWith: 'String',
        updatedAt: '2023-05-09T21:16:13.554Z',
        offer: {
          create: {
            capitalTargetLacs: 5080883.510771972,
            equityBeingIssued: 9016153.485315917,
            maxTicketSizeLacs: 8311388.068344976,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-09T21:16:13.554Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:16:13.554Z',
                locationID: 4419365,
                sectorCategoryID: 195146,
                updatedAt: '2023-05-09T21:16:13.554Z',
                user: {
                  create: {
                    email: 'String7048919',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String855974',
                    updatedAt: '2023-05-09T21:16:13.554Z',
                  },
                },
              },
            },
          },
        },
        investor: {
          create: {
            name: 'String',
            locationID: 3064091,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:16:13.554Z',
            user: {
              create: {
                email: 'String4686929',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String2162835',
                updatedAt: '2023-05-09T21:16:13.554Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        capitalAvailable: 3674633.769310889,
        equityNeeded: 142877.33003801593,
        canHelpWith: 'String',
        updatedAt: '2023-05-09T21:16:13.554Z',
        offer: {
          create: {
            capitalTargetLacs: 1837353.5789046725,
            equityBeingIssued: 8332711.392304699,
            maxTicketSizeLacs: 5247853.557005931,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-05-09T21:16:13.554Z',
            startup: {
              create: {
                name: 'String',
                writeUp: 'String',
                dateIncorporated: '2023-05-09T21:16:13.554Z',
                locationID: 4278946,
                sectorCategoryID: 918635,
                updatedAt: '2023-05-09T21:16:13.554Z',
                user: {
                  create: {
                    email: 'String8878295',
                    hashedPassword: 'String',
                    salt: 'String',
                    mobile: 'String1891983',
                    updatedAt: '2023-05-09T21:16:13.554Z',
                  },
                },
              },
            },
          },
        },
        investor: {
          create: {
            name: 'String',
            locationID: 5426549,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:16:13.554Z',
            user: {
              create: {
                email: 'String8196868',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String9773842',
                updatedAt: '2023-05-09T21:16:13.554Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Bid, 'bid'>
