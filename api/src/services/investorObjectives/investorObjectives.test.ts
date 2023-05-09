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
          preferredFundingStages: 'SEED',
          preferredStartupTeamSizes: 'ONE',
          preferredTimelines: 'LESS_THAN_SIX_MONTHS',
          preferredSectors: 'EDUCATION',
          preferredLocations: 7261874,
          platformGoal: 'INVESTING',
          referSource: 'WORD_OF_MOUTH',
          updatedAt: '2023-05-09T21:04:47.487Z',
        },
      })

      expect(result.id).toEqual(scenario.investorObjective.two.id)
      expect(result.preferredFundingStages).toEqual('SEED')
      expect(result.preferredStartupTeamSizes).toEqual('ONE')
      expect(result.preferredTimelines).toEqual('LESS_THAN_SIX_MONTHS')
      expect(result.preferredSectors).toEqual('EDUCATION')
      expect(result.preferredLocations).toEqual(7261874)
      expect(result.platformGoal).toEqual('INVESTING')
      expect(result.referSource).toEqual('WORD_OF_MOUTH')
      expect(result.updatedAt).toEqual(new Date('2023-05-09T21:04:47.487Z'))
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
        input: { preferredFundingStages: 'LATER' },
      })

      expect(result.preferredFundingStages).toEqual('LATER')
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
