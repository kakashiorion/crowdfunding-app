import type { Prisma, NegotiationTable } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NegotiationTableCreateArgs>({
  negotiationTable: {
    one: {
      data: {
        updatedAt: '2023-05-22T19:25:22.974Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T19:25:22.974Z',
            offer: {
              create: {
                capitalTargetLacs: 3467210.8043501293,
                equityBeingIssued: 6360824.42128241,
                maxTicketSizeLacs: 3149544.796064736,
                maxInvestors: 8312028,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T19:25:22.974Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T19:25:22.974Z',
                    locationID: 6867442,
                    sectorCategoryID: 5539476,
                    updatedAt: '2023-05-22T19:25:22.974Z',
                    user: {
                      create: {
                        email: 'String3813689',
                        updatedAt: '2023-05-22T19:25:22.974Z',
                      },
                    },
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
        updatedAt: '2023-05-22T19:25:22.974Z',
        offerRoom: {
          create: {
            resourceLinks: 'String',
            updatedAt: '2023-05-22T19:25:22.974Z',
            offer: {
              create: {
                capitalTargetLacs: 172817.44893981487,
                equityBeingIssued: 3682842.0599648436,
                maxTicketSizeLacs: 4705302.456906111,
                maxInvestors: 7230191,
                willUseFundsFor: 'String',
                needHelpWith: 'String',
                updatedAt: '2023-05-22T19:25:22.974Z',
                startup: {
                  create: {
                    name: 'String',
                    writeUp: 'String',
                    dateIncorporated: '2023-05-22T19:25:22.974Z',
                    locationID: 3177811,
                    sectorCategoryID: 5348715,
                    updatedAt: '2023-05-22T19:25:22.974Z',
                    user: {
                      create: {
                        email: 'String5134167',
                        updatedAt: '2023-05-22T19:25:22.974Z',
                      },
                    },
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

export type StandardScenario = ScenarioData<
  NegotiationTable,
  'negotiationTable'
>
