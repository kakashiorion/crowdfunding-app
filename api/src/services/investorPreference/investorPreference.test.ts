import type { InvestorPreferences } from '@prisma/client'

import {
  investorPreference,
  investorPreferences,
  createInvestorPreferences,
  updateInvestorPreferences,
  deleteInvestorPreferences,
} from './investorPreference'
import type { StandardScenario } from './investorPreference.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investorPreference', () => {
  scenario(
    'returns all investorPreference',
    async (scenario: StandardScenario) => {
      const result = await investorPreference()

      expect(result.length).toEqual(
        Object.keys(scenario.investorPreferences).length
      )
    }
  )

  scenario(
    'returns a single investorPreferences',
    async (scenario: StandardScenario) => {
      const result = await investorPreferences({
        id: scenario.investorPreferences.one.id,
      })

      expect(result).toEqual(scenario.investorPreferences.one)
    }
  )

  scenario(
    'creates a investorPreferences',
    async (scenario: StandardScenario) => {
      const result = await createInvestorPreferences({
        input: {
          id: scenario.investorPreferences.two.id,
          updatedAt: '2023-04-29T06:45:17.864Z',
        },
      })

      expect(result.id).toEqual(scenario.investorPreferences.two.id)
      expect(result.updatedAt).toEqual(new Date('2023-04-29T06:45:17.864Z'))
    }
  )

  scenario(
    'updates a investorPreferences',
    async (scenario: StandardScenario) => {
      const original = (await investorPreferences({
        id: scenario.investorPreferences.one.id,
      })) as InvestorPreferences
      const result = await updateInvestorPreferences({
        id: original.id,
        input: { updatedAt: '2023-04-30T06:45:17.864Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-04-30T06:45:17.864Z'))
    }
  )

  scenario(
    'deletes a investorPreferences',
    async (scenario: StandardScenario) => {
      const original = (await deleteInvestorPreferences({
        id: scenario.investorPreferences.one.id,
      })) as InvestorPreferences
      const result = await investorPreferences({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
