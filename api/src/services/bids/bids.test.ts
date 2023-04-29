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
        capitalAvailable: 1388368.7045036796,
        equityNeeded: 8240737.0119575355,
        canHelpWith: 'String',
        updatedAt: '2023-04-29T06:52:12.591Z',
      },
    })

    expect(result.offerID).toEqual(scenario.bid.two.offerID)
    expect(result.investorID).toEqual(scenario.bid.two.investorID)
    expect(result.capitalAvailable).toEqual(1388368.7045036796)
    expect(result.equityNeeded).toEqual(8240737.0119575355)
    expect(result.canHelpWith).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:52:12.591Z'))
  })

  scenario('updates a bid', async (scenario: StandardScenario) => {
    const original = (await bid({ id: scenario.bid.one.id })) as Bid
    const result = await updateBid({
      id: original.id,
      input: { capitalAvailable: 6002083.229874828 },
    })

    expect(result.capitalAvailable).toEqual(6002083.229874828)
  })

  scenario('deletes a bid', async (scenario: StandardScenario) => {
    const original = (await deleteBid({ id: scenario.bid.one.id })) as Bid
    const result = await bid({ id: original.id })

    expect(result).toEqual(null)
  })
})
