import type { Prisma, InvestedCompany } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestedCompanyCreateArgs>({
  investedCompany: {
    one: {
      data: {
        companyName: 'String',
        industrySectorID: 9785790,
        fundingStage: 'SEED',
        hasExited: true,
        updatedAt: '2023-04-29T06:43:11.616Z',
        investor: {
          create: {
            hasInvestedBefore: true,
            hasFoundStartup: true,
            hasWorkedInStartup: true,
            updatedAt: '2023-04-29T06:43:11.616Z',
            investor: {
              create: {
                firstName: 'String',
                lastName: 'String',
                dateOfBirth: '2023-04-29T06:43:11.616Z',
                locationID: 2172687,
                workedInSectors: 8464061,
                updatedAt: '2023-04-29T06:43:11.616Z',
                user: {
                  create: {
                    email: 'String8416453',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:43:11.616Z',
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
        companyName: 'String',
        industrySectorID: 1115236,
        fundingStage: 'SEED',
        hasExited: true,
        updatedAt: '2023-04-29T06:43:11.616Z',
        investor: {
          create: {
            hasInvestedBefore: true,
            hasFoundStartup: true,
            hasWorkedInStartup: true,
            updatedAt: '2023-04-29T06:43:11.616Z',
            investor: {
              create: {
                firstName: 'String',
                lastName: 'String',
                dateOfBirth: '2023-04-29T06:43:11.616Z',
                locationID: 8767786,
                workedInSectors: 3723652,
                updatedAt: '2023-04-29T06:43:11.616Z',
                user: {
                  create: {
                    email: 'String9296839',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-04-29T06:43:11.616Z',
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

export type StandardScenario = ScenarioData<InvestedCompany, 'investedCompany'>
