import type { StartupFinancials } from '@prisma/client'

import {
  startupFinancialses,
  startupFinancials,
  createStartupFinancials,
  updateStartupFinancials,
  deleteStartupFinancials,
} from './startupFinancialses'
import type { StandardScenario } from './startupFinancialses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupFinancialses', () => {
  scenario(
    'returns all startupFinancialses',
    async (scenario: StandardScenario) => {
      const result = await startupFinancialses()

      expect(result.length).toEqual(
        Object.keys(scenario.startupFinancials).length
      )
    }
  )

  scenario(
    'returns a single startupFinancials',
    async (scenario: StandardScenario) => {
      const result = await startupFinancials({
        id: scenario.startupFinancials.one.id,
      })

      expect(result).toEqual(scenario.startupFinancials.one)
    }
  )

  scenario(
    'creates a startupFinancials',
    async (scenario: StandardScenario) => {
      const result = await createStartupFinancials({
        input: {
          id: scenario.startupFinancials.two.id,
          plansForUsingCash: 'String',
          updatedAt: '2023-05-09T21:12:47.397Z',
        },
      })

      expect(result.id).toEqual(scenario.startupFinancials.two.id)
      expect(result.plansForUsingCash).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-05-09T21:12:47.397Z'))
    }
  )

  scenario(
    'updates a startupFinancials',
    async (scenario: StandardScenario) => {
      const original = (await startupFinancials({
        id: scenario.startupFinancials.one.id,
      })) as StartupFinancials
      const result = await updateStartupFinancials({
        id: original.id,
        input: { plansForUsingCash: 'String2' },
      })

      expect(result.plansForUsingCash).toEqual('String2')
    }
  )

  scenario(
    'deletes a startupFinancials',
    async (scenario: StandardScenario) => {
      const original = (await deleteStartupFinancials({
        id: scenario.startupFinancials.one.id,
      })) as StartupFinancials
      const result = await startupFinancials({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
