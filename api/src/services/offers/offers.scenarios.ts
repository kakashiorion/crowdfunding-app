import type { Prisma, Offer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OfferCreateArgs>({
  offer: {
    one: {
      data: {
        capitalTargetLacs: 6677797.094597977,
        equityBeingIssued: 6394467.321467014,
        maxTicketSizeLacs: 174908.1580170997,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-09T21:15:47.921Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:15:47.921Z',
            locationID: 7144970,
            sectorCategoryID: 3354259,
            updatedAt: '2023-05-09T21:15:47.921Z',
            user: {
              create: {
                email: 'String2401516',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String2371522',
                updatedAt: '2023-05-09T21:15:47.921Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        capitalTargetLacs: 9545089.450970212,
        equityBeingIssued: 1842365.8453416135,
        maxTicketSizeLacs: 9648706.114947863,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-09T21:15:47.921Z',
        startup: {
          create: {
            name: 'String',
            writeUp: 'String',
            dateIncorporated: '2023-05-09T21:15:47.921Z',
            locationID: 4341811,
            sectorCategoryID: 8277154,
            updatedAt: '2023-05-09T21:15:47.921Z',
            user: {
              create: {
                email: 'String5910494',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String5814412',
                updatedAt: '2023-05-09T21:15:47.921Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Offer, 'offer'>
