import type { Prisma, InvestorObjective } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorObjectiveCreateArgs>({
  investorObjective: {
    one: {
      data: {
        preferredAmountToInvest: 'NONE',
        preferredFundingStages: 'PRE_SEED',
        preferredStartupTeamSizes: 'ONE',
        preferredTimelines: 'LESS_THAN_SIX_MONTHS',
        riskApetite: 'LOW',
        preferredSectors: 'EDUCATION',
        preferredLocations: 4460006,
        platformGoal: 'INVESTING',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-05-24T18:07:31.843Z',
        investor: {
          create: {
            name: 'String',
            locationID: 315939,
            eduBG: 'NONE',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-24T18:07:31.843Z',
            user: {
              create: {
                email: 'String7434033',
                updatedAt: '2023-05-24T18:07:31.843Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        preferredAmountToInvest: 'NONE',
        preferredFundingStages: 'PRE_SEED',
        preferredStartupTeamSizes: 'ONE',
        preferredTimelines: 'LESS_THAN_SIX_MONTHS',
        riskApetite: 'LOW',
        preferredSectors: 'EDUCATION',
        preferredLocations: 3243426,
        platformGoal: 'INVESTING',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-05-24T18:07:31.843Z',
        investor: {
          create: {
            name: 'String',
            locationID: 946803,
            eduBG: 'NONE',
            yearsOfWorkEx: 'NONE',
            numberOfCompanies: 'NONE',
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-24T18:07:31.843Z',
            user: {
              create: {
                email: 'String4864126',
                updatedAt: '2023-05-24T18:07:31.843Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  InvestorObjective,
  'investorObjective'
>
