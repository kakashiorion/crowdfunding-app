import type { InvestorObjective } from '@prisma/client'

import {
  investorObjectives,
  investorObjective,
  createInvestorObjective,
  updateInvestorObjective,
  deleteInvestorObjective,
} from './investorObjectives'
import type { StandardScenario } from './investorObjectives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investorObjectives', () => {
  scenario(
    'returns all investorObjectives',
    async (scenario: StandardScenario) => {
      const result = await investorObjectives()

      expect(result.length).toEqual(
        Object.keys(scenario.investorObjective).length
      )
    }
  )

  scenario(
    'returns a single investorObjective',
    async (scenario: StandardScenario) => {
      const result = await investorObjective({
        id: scenario.investorObjective.one.id,
      })

      expect(result).toEqual(scenario.investorObjective.one)
    }
  )

  scenario(
    'creates a investorObjective',
    async (scenario: StandardScenario) => {
      const result = await createInvestorObjective({
        input: {
          id: scenario.investorObjective.two.id,
          preferredAmountToInvest: 'NONE',
          preferredFundingStages: 'PRE_SEED',
          preferredStartupTeamSizes: 'ONE',
          preferredTimelines: 'LESS_THAN_SIX_MONTHS',
          riskApetite: 'LOW',
          preferredSectors: 'EDUCATION',
          preferredLocations: 5311751,
          platformGoal: 'INVESTING',
          referSource: 'WORD_OF_MOUTH',
          updatedAt: '2023-05-24T18:07:31.221Z',
        },
      })

      expect(result.id).toEqual(scenario.investorObjective.two.id)
      expect(result.preferredAmountToInvest).toEqual('NONE')
      expect(result.preferredFundingStages).toEqual('PRE_SEED')
      expect(result.preferredStartupTeamSizes).toEqual('ONE')
      expect(result.preferredTimelines).toEqual('LESS_THAN_SIX_MONTHS')
      expect(result.riskApetite).toEqual('LOW')
      expect(result.preferredSectors).toEqual('EDUCATION')
      expect(result.preferredLocations).toEqual(5311751)
      expect(result.platformGoal).toEqual('INVESTING')
      expect(result.referSource).toEqual('WORD_OF_MOUTH')
      expect(result.updatedAt).toEqual(new Date('2023-05-24T18:07:31.221Z'))
    }
  )

  scenario(
    'updates a investorObjective',
    async (scenario: StandardScenario) => {
      const original = (await investorObjective({
        id: scenario.investorObjective.one.id,
      })) as InvestorObjective
      const result = await updateInvestorObjective({
        id: original.id,
        input: { preferredAmountToInvest: 'MORE_THAN_1_CRORE' },
      })

      expect(result.preferredAmountToInvest).toEqual('MORE_THAN_1_CRORE')
    }
  )

  scenario(
    'deletes a investorObjective',
    async (scenario: StandardScenario) => {
      const original = (await deleteInvestorObjective({
        id: scenario.investorObjective.one.id,
      })) as InvestorObjective
      const result = await investorObjective({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
