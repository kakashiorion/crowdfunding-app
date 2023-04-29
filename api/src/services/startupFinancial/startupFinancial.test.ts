import type { StartupFinancials } from '@prisma/client'

import {
  startupFinancial,
  startupFinancials,
  createStartupFinancials,
  updateStartupFinancials,
  deleteStartupFinancials,
} from './startupFinancial'
import type { StandardScenario } from './startupFinancial.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupFinancial', () => {
  scenario(
    'returns all startupFinancial',
    async (scenario: StandardScenario) => {
      const result = await startupFinancial()

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
          currentValuationLacs: 1811167.1530614148,
          currentStage: 'SEED',
          plansForUsingCash: 'String',
          biggestCostHeads: 'String',
          updatedAt: '2023-04-29T06:48:48.753Z',
        },
      })

      expect(result.id).toEqual(scenario.startupFinancials.two.id)
      expect(result.currentValuationLacs).toEqual(1811167.1530614148)
      expect(result.currentStage).toEqual('SEED')
      expect(result.plansForUsingCash).toEqual('String')
      expect(result.biggestCostHeads).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-04-29T06:48:48.753Z'))
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
        input: { currentValuationLacs: 2723086.7932427884 },
      })

      expect(result.currentValuationLacs).toEqual(2723086.7932427884)
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
