import type { InvestorExperience } from '@prisma/client'

import {
  investorExperiences,
  investorExperience,
  createInvestorExperience,
  updateInvestorExperience,
  deleteInvestorExperience,
} from './investorExperiences'
import type { StandardScenario } from './investorExperiences.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investorExperiences', () => {
  scenario(
    'returns all investorExperiences',
    async (scenario: StandardScenario) => {
      const result = await investorExperiences()

      expect(result.length).toEqual(
        Object.keys(scenario.investorExperience).length
      )
    }
  )

  scenario(
    'returns a single investorExperience',
    async (scenario: StandardScenario) => {
      const result = await investorExperience({
        id: scenario.investorExperience.one.id,
      })

      expect(result).toEqual(scenario.investorExperience.one)
    }
  )

  scenario(
    'creates a investorExperience',
    async (scenario: StandardScenario) => {
      const result = await createInvestorExperience({
        input: {
          id: scenario.investorExperience.two.id,
          workedInStartups: 'NONE',
          foundedStartups: 'NONE',
          investedStartups: 'NONE',
          investedStages: 'PRE_SEED',
          investedAmountLacs: 'NONE',
          successfulExits: 'NONE',
          returnsReceived: 'BREAKEVEN',
          investedSectors: 'EDUCATION',
          investorLevel: 'NOVICE',
          updatedAt: '2023-05-24T18:06:20.209Z',
        },
      })

      expect(result.id).toEqual(scenario.investorExperience.two.id)
      expect(result.workedInStartups).toEqual('NONE')
      expect(result.foundedStartups).toEqual('NONE')
      expect(result.investedStartups).toEqual('NONE')
      expect(result.investedStages).toEqual('PRE_SEED')
      expect(result.investedAmountLacs).toEqual('NONE')
      expect(result.successfulExits).toEqual('NONE')
      expect(result.returnsReceived).toEqual('BREAKEVEN')
      expect(result.investedSectors).toEqual('EDUCATION')
      expect(result.investorLevel).toEqual('NOVICE')
      expect(result.updatedAt).toEqual(new Date('2023-05-24T18:06:20.209Z'))
    }
  )

  scenario(
    'updates a investorExperience',
    async (scenario: StandardScenario) => {
      const original = (await investorExperience({
        id: scenario.investorExperience.one.id,
      })) as InvestorExperience
      const result = await updateInvestorExperience({
        id: original.id,
        input: { workedInStartups: 'MORE_THAN_TWENTY' },
      })

      expect(result.workedInStartups).toEqual('MORE_THAN_TWENTY')
    }
  )

  scenario(
    'deletes a investorExperience',
    async (scenario: StandardScenario) => {
      const original = (await deleteInvestorExperience({
        id: scenario.investorExperience.one.id,
      })) as InvestorExperience
      const result = await investorExperience({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
