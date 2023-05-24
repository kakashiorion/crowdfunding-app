import type { Offer } from '@prisma/client'

import { offers, offer, createOffer, updateOffer, deleteOffer } from './offers'
import type { StandardScenario } from './offers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('offers', () => {
  scenario('returns all offers', async (scenario: StandardScenario) => {
    const result = await offers()

    expect(result.length).toEqual(Object.keys(scenario.offer).length)
  })

  scenario('returns a single offer', async (scenario: StandardScenario) => {
    const result = await offer({ id: scenario.offer.one.id })

    expect(result).toEqual(scenario.offer.one)
  })

  scenario('creates a offer', async (scenario: StandardScenario) => {
    const result = await createOffer({
      input: {
        startupID: scenario.offer.two.startupID,
        capitalTargetLacs: 2990432.3355316673,
        equityBeingIssued: 6734148.280064267,
        maxTicketSizeLacs: 7916520.010963997,
        fundingStage: 'PRE_SEED',
        maxInvestors: 5852146,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-24T18:19:43.711Z',
      },
    })

    expect(result.startupID).toEqual(scenario.offer.two.startupID)
    expect(result.capitalTargetLacs).toEqual(2990432.3355316673)
    expect(result.equityBeingIssued).toEqual(6734148.280064267)
    expect(result.maxTicketSizeLacs).toEqual(7916520.010963997)
    expect(result.fundingStage).toEqual('PRE_SEED')
    expect(result.maxInvestors).toEqual(5852146)
    expect(result.willUseFundsFor).toEqual('String')
    expect(result.needHelpWith).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-24T18:19:43.711Z'))
  })

  scenario('updates a offer', async (scenario: StandardScenario) => {
    const original = (await offer({ id: scenario.offer.one.id })) as Offer
    const result = await updateOffer({
      id: original.id,
      input: { capitalTargetLacs: 4489713.776365991 },
    })

    expect(result.capitalTargetLacs).toEqual(4489713.776365991)
  })

  scenario('deletes a offer', async (scenario: StandardScenario) => {
    const original = (await deleteOffer({ id: scenario.offer.one.id })) as Offer
    const result = await offer({ id: original.id })

    expect(result).toEqual(null)
  })
})
