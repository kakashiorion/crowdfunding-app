import type { Prisma, InvestorObjective } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorObjectiveCreateArgs>({
  investorObjective: {
    one: {
      data: {
        preferredFundingStages: 'SEED',
        preferredStartupTeamSizes: 'ONE',
        preferredTimelines: 'LESS_THAN_SIX_MONTHS',
        preferredSectors: 'EDUCATION',
        preferredLocations: 7444430,
        platformGoal: 'INVESTING',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-05-09T21:04:47.774Z',
        investor: {
          create: {
            name: 'String',
            locationID: 1785601,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:04:47.775Z',
            user: {
              create: {
                email: 'String7100221',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String368500',
                updatedAt: '2023-05-09T21:04:47.775Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        preferredFundingStages: 'SEED',
        preferredStartupTeamSizes: 'ONE',
        preferredTimelines: 'LESS_THAN_SIX_MONTHS',
        preferredSectors: 'EDUCATION',
        preferredLocations: 9366875,
        platformGoal: 'INVESTING',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-05-09T21:04:47.775Z',
        investor: {
          create: {
            name: 'String',
            locationID: 5548701,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:04:47.775Z',
            user: {
              create: {
                email: 'String2387815',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String4857211',
                updatedAt: '2023-05-09T21:04:47.775Z',
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
