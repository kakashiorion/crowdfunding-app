import type { Prisma, InvestorExperience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvestorExperienceCreateArgs>({
  investorExperience: {
    one: {
      data: {
        workedInStartups: 'NONE',
        foundedStartups: 'NONE',
        investedStartups: 'NONE',
        investedStages: 'SEED',
        returnsReceived: 'BREAKEVEN',
        investedSectors: 'EDUCATION',
        investorLevel: 'NOVICE',
        updatedAt: '2023-05-09T21:04:15.666Z',
        investor: {
          create: {
            name: 'String',
            locationID: 6489672,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:04:15.666Z',
            user: {
              create: {
                email: 'String3715341',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String3306988',
                updatedAt: '2023-05-09T21:04:15.666Z',
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
        investedStages: 'SEED',
        returnsReceived: 'BREAKEVEN',
        investedSectors: 'EDUCATION',
        investorLevel: 'NOVICE',
        updatedAt: '2023-05-09T21:04:15.666Z',
        investor: {
          create: {
            name: 'String',
            locationID: 9846389,
            workedInSectors: 'EDUCATION',
            updatedAt: '2023-05-09T21:04:15.666Z',
            user: {
              create: {
                email: 'String5250342',
                hashedPassword: 'String',
                salt: 'String',
                mobile: 'String3354470',
                updatedAt: '2023-05-09T21:04:15.666Z',
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
