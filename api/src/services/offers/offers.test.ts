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
        capitalTargetLacs: 5458151.898149641,
        equityBeingIssued: 8127595.845174325,
        maxTicketSizeLacs: 4191638.686924868,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-05-09T21:15:47.334Z',
      },
    })

    expect(result.startupID).toEqual(scenario.offer.two.startupID)
    expect(result.capitalTargetLacs).toEqual(5458151.898149641)
    expect(result.equityBeingIssued).toEqual(8127595.845174325)
    expect(result.maxTicketSizeLacs).toEqual(4191638.686924868)
    expect(result.willUseFundsFor).toEqual('String')
    expect(result.needHelpWith).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:15:47.334Z'))
  })

  scenario('updates a offer', async (scenario: StandardScenario) => {
    const original = (await offer({ id: scenario.offer.one.id })) as Offer
    const result = await updateOffer({
      id: original.id,
      input: { capitalTargetLacs: 9176689.308878 },
    })

    expect(result.capitalTargetLacs).toEqual(9176689.308878)
  })

  scenario('deletes a offer', async (scenario: StandardScenario) => {
    const original = (await deleteOffer({ id: scenario.offer.one.id })) as Offer
    const result = await offer({ id: original.id })

    expect(result).toEqual(null)
  })
})
