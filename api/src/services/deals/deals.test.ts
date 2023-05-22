import type { Deal } from '@prisma/client'

import { deals, deal, createDeal, updateDeal, deleteDeal } from './deals'
import type { StandardScenario } from './deals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('deals', () => {
  scenario('returns all deals', async (scenario: StandardScenario) => {
    const result = await deals()

    expect(result.length).toEqual(Object.keys(scenario.deal).length)
  })

  scenario('returns a single deal', async (scenario: StandardScenario) => {
    const result = await deal({ id: scenario.deal.one.id })

    expect(result).toEqual(scenario.deal.one)
  })

  scenario('creates a deal', async (scenario: StandardScenario) => {
    const result = await createDeal({
      input: {
        offerID: scenario.deal.two.offerID,
        investorID: scenario.deal.two.investorID,
        fundingAmountLacs: 167384.66147736995,
        updatedAt: '2023-05-22T16:12:20.236Z',
      },
    })

    expect(result.offerID).toEqual(scenario.deal.two.offerID)
    expect(result.investorID).toEqual(scenario.deal.two.investorID)
    expect(result.fundingAmountLacs).toEqual(167384.66147736995)
    expect(result.updatedAt).toEqual(new Date('2023-05-22T16:12:20.236Z'))
  })

  scenario('updates a deal', async (scenario: StandardScenario) => {
    const original = (await deal({ id: scenario.deal.one.id })) as Deal
    const result = await updateDeal({
      id: original.id,
      input: { fundingAmountLacs: 9559146.37495965 },
    })

    expect(result.fundingAmountLacs).toEqual(9559146.37495965)
  })

  scenario('deletes a deal', async (scenario: StandardScenario) => {
    const original = (await deleteDeal({ id: scenario.deal.one.id })) as Deal
    const result = await deal({ id: original.id })

    expect(result).toEqual(null)
  })
})
