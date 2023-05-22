import type { Prisma, NegotiationMessage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NegotiationMessageCreateArgs>({
  negotiationMessage: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:14:25.721Z',
        negotiationTable: {
          create: {
            updatedAt: '2023-05-22T16:14:25.721Z',
            offerRoom: {
              create: {
                resourceLinks: 'String',
                updatedAt: '2023-05-22T16:14:25.721Z',
                offer: {
                  create: {
                    capitalTargetLacs: 4756419.558643763,
                    equityBeingIssued: 192196.9306570892,
                    maxTicketSizeLacs: 5741039.73950405,
                    numberOfInvestors: 5040715,
                    willUseFundsFor: 'String',
                    needHelpWith: 'String',
                    updatedAt: '2023-05-22T16:14:25.721Z',
                    startup: {
                      create: {
                        name: 'String',
                        writeUp: 'String',
                        dateIncorporated: '2023-05-22T16:14:25.721Z',
                        locationID: 456472,
                        sectorCategoryID: 3152588,
                        updatedAt: '2023-05-22T16:14:25.721Z',
                        user: {
                          create: {
                            email: 'String8958773',
                            updatedAt: '2023-05-22T16:14:25.721Z',
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
        sender: {
          create: {
            email: 'String8443806',
            updatedAt: '2023-05-22T16:14:25.721Z',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2023-05-22T16:14:25.721Z',
        negotiationTable: {
          create: {
            updatedAt: '2023-05-22T16:14:25.721Z',
            offerRoom: {
              create: {
                resourceLinks: 'String',
                updatedAt: '2023-05-22T16:14:25.721Z',
                offer: {
                  create: {
                    capitalTargetLacs: 75073.51158603681,
                    equityBeingIssued: 5839198.758109039,
                    maxTicketSizeLacs: 800576.500340513,
                    numberOfInvestors: 1779718,
                    willUseFundsFor: 'String',
                    needHelpWith: 'String',
                    updatedAt: '2023-05-22T16:14:25.721Z',
                    startup: {
                      create: {
                        name: 'String',
                        writeUp: 'String',
                        dateIncorporated: '2023-05-22T16:14:25.721Z',
                        locationID: 9385383,
                        sectorCategoryID: 7627517,
                        updatedAt: '2023-05-22T16:14:25.721Z',
                        user: {
                          create: {
                            email: 'String5234411',
                            updatedAt: '2023-05-22T16:14:25.721Z',
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
        sender: {
          create: {
            email: 'String4450331',
            updatedAt: '2023-05-22T16:14:25.721Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  NegotiationMessage,
  'negotiationMessage'
>
