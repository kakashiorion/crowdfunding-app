import type { Prisma, InvestorMotive } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorMotiveCreateArgs>({
  investorMotive: {
    one: {
      data: {
        preferredIndustrySectors: 8016416,
        prefferedCapitalToInvest: 'LESS_THAN_1_LAC',
        preferredFundingStage: 'SEED',
        preferredStartupTeamSize: 'ONE',
        preferredLocations: 3770355,
        platformGoal: 'INVEST',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-04-29T06:43:34.271Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:43:34.271Z',
            locationID: 7151335,
            workedInSectors: 9590591,
            updatedAt: '2023-04-29T06:43:34.271Z',
            user: {
              create: {
                email: 'String865776',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:43:34.271Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        preferredIndustrySectors: 5542451,
        prefferedCapitalToInvest: 'LESS_THAN_1_LAC',
        preferredFundingStage: 'SEED',
        preferredStartupTeamSize: 'ONE',
        preferredLocations: 3398900,
        platformGoal: 'INVEST',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-04-29T06:43:34.271Z',
        investor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            dateOfBirth: '2023-04-29T06:43:34.271Z',
            locationID: 3154434,
            workedInSectors: 952972,
            updatedAt: '2023-04-29T06:43:34.271Z',
            user: {
              create: {
                email: 'String4950596',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-04-29T06:43:34.271Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<InvestorMotive, 'investorMotive'>
