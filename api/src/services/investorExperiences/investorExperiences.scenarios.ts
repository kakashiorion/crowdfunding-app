import type { Prisma, InvestorExperience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorExperienceCreateArgs>({
  investorExperience: {
    one: {
      data: {
        workedInStartups: 'NONE',
        foundedStartups: 'NONE',
        investedStartups: 'NONE',
        investedStages: 'PRE_SEED',
        investedAmountLacs: 'NONE',
        successfulExits: 'NONE',
        returnsReceived: 'BREAKEVEN',
        investedSectors: 'EDUCATION',
        investorLevel: 'NOVICE',
        updatedAt: '2023-05-24T18:06:20.582Z',
        investor: {
          create: {
            name: 'String',
            locationID: 4242186,
            eduBG: 'NONE',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-24T18:06:20.582Z',
            user: {
              create: {
                email: 'String307763',
                updatedAt: '2023-05-24T18:06:20.582Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        workedInStartups: 'NONE',
        foundedStartups: 'NONE',
        investedStartups: 'NONE',
        investedStages: 'PRE_SEED',
        investedAmountLacs: 'NONE',
        successfulExits: 'NONE',
        returnsReceived: 'BREAKEVEN',
        investedSectors: 'EDUCATION',
        investorLevel: 'NOVICE',
        updatedAt: '2023-05-24T18:06:20.582Z',
        investor: {
          create: {
            name: 'String',
            locationID: 8037006,
            eduBG: 'NONE',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-24T18:06:20.582Z',
            user: {
              create: {
                email: 'String6740803',
                updatedAt: '2023-05-24T18:06:20.582Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  InvestorExperience,
  'investorExperience'
>
