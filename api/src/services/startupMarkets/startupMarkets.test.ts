import type { StartupMarket } from '@prisma/client'

import {
  startupMarkets,
  startupMarket,
  createStartupMarket,
  updateStartupMarket,
  deleteStartupMarket,
} from './startupMarkets'
import type { StandardScenario } from './startupMarkets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupMarkets', () => {
  scenario('returns all startupMarkets', async (scenario: StandardScenario) => {
    const result = await startupMarkets()

    expect(result.length).toEqual(Object.keys(scenario.startupMarket).length)
  })

  scenario(
    'returns a single startupMarket',
    async (scenario: StandardScenario) => {
      const result = await startupMarket({ id: scenario.startupMarket.one.id })

      expect(result).toEqual(scenario.startupMarket.one)
    }
  )

  scenario('creates a startupMarket', async (scenario: StandardScenario) => {
    const result = await createStartupMarket({
      input: {
        id: scenario.startupMarket.two.id,
        revenueStreams: 'SELLING_GOODS_OR_SERVICES',
        costHeads: 'MATERIAL',
        shortTermPlan: 'EXPAND_GEOGRAPHICALLY',
        marketSizeInCr: 'LESS_THAN_10_CR',
        marketGrowthRate: 'LESS_THAN_5',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-24T18:15:12.482Z',
      },
    })

    expect(result.id).toEqual(scenario.startupMarket.two.id)
    expect(result.revenueStreams).toEqual('SELLING_GOODS_OR_SERVICES')
    expect(result.costHeads).toEqual('MATERIAL')
    expect(result.shortTermPlan).toEqual('EXPAND_GEOGRAPHICALLY')
    expect(result.marketSizeInCr).toEqual('LESS_THAN_10_CR')
    expect(result.marketGrowthRate).toEqual('LESS_THAN_5')
    expect(result.trends).toEqual('String')
    expect(result.opporunities).toEqual('String')
    expect(result.threats).toEqual('String')
    expect(result.competitors).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-24T18:15:12.482Z'))
  })

  scenario('updates a startupMarket', async (scenario: StandardScenario) => {
    const original = (await startupMarket({
      id: scenario.startupMarket.one.id,
    })) as StartupMarket
    const result = await updateStartupMarket({
      id: original.id,
      input: { revenueStreams: 'OTHER' },
    })

    expect(result.revenueStreams).toEqual('OTHER')
  })

  scenario('deletes a startupMarket', async (scenario: StandardScenario) => {
    const original = (await deleteStartupMarket({
      id: scenario.startupMarket.one.id,
    })) as StartupMarket
    const result = await startupMarket({ id: original.id })

    expect(result).toEqual(null)
  })
})
