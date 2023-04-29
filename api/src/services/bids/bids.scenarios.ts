import type { Prisma, Bid } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BidCreateArgs>({
  bid: {
    one: {
      data: {
        capitalAvailable: 1063513.4749088215,
        equityNeeded: 3464416.684142968,
        canHelpWith: 'String',
        updatedAt: '2023-04-29T06:52:12.633Z',
        offer: {
          create: {
            capitalTargetLacs: 9286546.293863127,
            equityBeingIssued: 5221254.741391823,
            maxTicketSizeLacs: 6672647.198666335,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-04-29T06:52:12.633Z',
            startup: {
              create: {
                name: 'String3323441',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:52:12.633Z',
                locationID: 7839406,
                industrySectorID: 5692417,
                updatedAt: '2023-04-29T06:52:12.633Z',
                user: {
                  create: {
                    email: 'String2148255',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:52:12.633Z',
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
            dateOfBirth: '2023-04-29T06:52:12.633Z',
            locationID: 7967298,
            workedInSectors: 9667399,
            updatedAt: '2023-04-29T06:52:12.633Z',
            user: {
              create: {
                email: 'String1546939',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:52:12.633Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        capitalAvailable: 7601420.311146037,
        equityNeeded: 2530626.712084585,
        canHelpWith: 'String',
        updatedAt: '2023-04-29T06:52:12.633Z',
        offer: {
          create: {
            capitalTargetLacs: 1056851.912044845,
            equityBeingIssued: 8576877.539479822,
            maxTicketSizeLacs: 3245908.1939945356,
            willUseFundsFor: 'String',
            needHelpWith: 'String',
            updatedAt: '2023-04-29T06:52:12.633Z',
            startup: {
              create: {
                name: 'String8755658',
                writeUp: 'String',
                dateIncorporated: '2023-04-29T06:52:12.633Z',
                locationID: 9186469,
                industrySectorID: 4599084,
                updatedAt: '2023-04-29T06:52:12.633Z',
                user: {
                  create: {
                    email: 'String1367957',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:52:12.633Z',
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
            dateOfBirth: '2023-04-29T06:52:12.633Z',
            locationID: 952720,
            workedInSectors: 3505843,
            updatedAt: '2023-04-29T06:52:12.633Z',
            user: {
              create: {
                email: 'String4887918',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:52:12.633Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Bid, 'bid'>
