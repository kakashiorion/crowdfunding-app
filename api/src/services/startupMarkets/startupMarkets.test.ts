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
        revenueStreams: 'SELLING_GOODS',
        costHeads: 'MATERIAL',
        trends: 'String',
        opporunities: 'String',
        threats: 'String',
        competitors: 'String',
        updatedAt: '2023-05-09T21:11:54.272Z',
      },
    })

    expect(result.id).toEqual(scenario.startupMarket.two.id)
    expect(result.revenueStreams).toEqual('SELLING_GOODS')
    expect(result.costHeads).toEqual('MATERIAL')
    expect(result.trends).toEqual('String')
    expect(result.opporunities).toEqual('String')
    expect(result.threats).toEqual('String')
    expect(result.competitors).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:11:54.272Z'))
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
