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
          hasInvestedBefore: true,
          hasFoundStartup: true,
          hasWorkedInStartup: true,
          updatedAt: '2023-04-29T06:42:27.322Z',
        },
      })

      expect(result.id).toEqual(scenario.investorExperience.two.id)
      expect(result.hasInvestedBefore).toEqual(true)
      expect(result.hasFoundStartup).toEqual(true)
      expect(result.hasWorkedInStartup).toEqual(true)
      expect(result.updatedAt).toEqual(new Date('2023-04-29T06:42:27.322Z'))
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
        input: { hasInvestedBefore: false },
      })

      expect(result.hasInvestedBefore).toEqual(false)
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
