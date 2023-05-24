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
          latestFundingStage: 'PRE_SEED',
          currentRatio: 'LESS_THAN_HALF',
          debtEquityRatio: 'LESS_THAN_HALF',
          revenueLastFY: 'LESS_THAN_10_LACS',
          revenueGrowthRate: 'LESS_THAN_5',
          margin: 'LOSS_OVER_50',
          cashRunway: 'LESS_THAN_SIX_MONTHS',
          plansForUsingCash: 'String',
          updatedAt: '2023-05-24T18:16:11.102Z',
        },
      })

      expect(result.id).toEqual(scenario.startupFinancials.two.id)
      expect(result.latestFundingStage).toEqual('PRE_SEED')
      expect(result.currentRatio).toEqual('LESS_THAN_HALF')
      expect(result.debtEquityRatio).toEqual('LESS_THAN_HALF')
      expect(result.revenueLastFY).toEqual('LESS_THAN_10_LACS')
      expect(result.revenueGrowthRate).toEqual('LESS_THAN_5')
      expect(result.margin).toEqual('LOSS_OVER_50')
      expect(result.cashRunway).toEqual('LESS_THAN_SIX_MONTHS')
      expect(result.plansForUsingCash).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-05-24T18:16:11.102Z'))
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
        input: { latestFundingStage: 'LATER' },
      })

      expect(result.latestFundingStage).toEqual('LATER')
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
