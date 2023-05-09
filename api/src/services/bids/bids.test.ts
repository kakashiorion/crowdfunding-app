import type { Bid } from '@prisma/client'

import { bids, bid, createBid, updateBid, deleteBid } from './bids'
import type { StandardScenario } from './bids.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bids', () => {
  scenario('returns all bids', async (scenario: StandardScenario) => {
    const result = await bids()

    expect(result.length).toEqual(Object.keys(scenario.bid).length)
  })

  scenario('returns a single bid', async (scenario: StandardScenario) => {
    const result = await bid({ id: scenario.bid.one.id })

    expect(result).toEqual(scenario.bid.one)
  })

  scenario('creates a bid', async (scenario: StandardScenario) => {
    const result = await createBid({
      input: {
        offerID: scenario.bid.two.offerID,
        investorID: scenario.bid.two.investorID,
        capitalAvailable: 5824188.275521147,
        equityNeeded: 8056691.889830296,
        canHelpWith: 'String',
        updatedAt: '2023-05-09T21:16:12.142Z',
      },
    })

    expect(result.offerID).toEqual(scenario.bid.two.offerID)
    expect(result.investorID).toEqual(scenario.bid.two.investorID)
    expect(result.capitalAvailable).toEqual(5824188.275521147)
    expect(result.equityNeeded).toEqual(8056691.889830296)
    expect(result.canHelpWith).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:16:12.142Z'))
  })

  scenario('updates a bid', async (scenario: StandardScenario) => {
    const original = (await bid({ id: scenario.bid.one.id })) as Bid
    const result = await updateBid({
      id: original.id,
      input: { capitalAvailable: 7505537.924380246 },
    })

    expect(result.capitalAvailable).toEqual(7505537.924380246)
  })

  scenario('deletes a bid', async (scenario: StandardScenario) => {
    const original = (await deleteBid({ id: scenario.bid.one.id })) as Bid
    const result = await bid({ id: original.id })

    expect(result).toEqual(null)
  })
})
