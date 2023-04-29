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
        capitalTargetLacs: 5972946.321304566,
        equityBeingIssued: 774841.3241843899,
        maxTicketSizeLacs: 8770967.86113381,
        willUseFundsFor: 'String',
        needHelpWith: 'String',
        updatedAt: '2023-04-29T06:51:42.521Z',
      },
    })

    expect(result.startupID).toEqual(scenario.offer.two.startupID)
    expect(result.capitalTargetLacs).toEqual(5972946.321304566)
    expect(result.equityBeingIssued).toEqual(774841.3241843899)
    expect(result.maxTicketSizeLacs).toEqual(8770967.86113381)
    expect(result.willUseFundsFor).toEqual('String')
    expect(result.needHelpWith).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:51:42.521Z'))
  })

  scenario('updates a offer', async (scenario: StandardScenario) => {
    const original = (await offer({ id: scenario.offer.one.id })) as Offer
    const result = await updateOffer({
      id: original.id,
      input: { capitalTargetLacs: 922331.8574811446 },
    })

    expect(result.capitalTargetLacs).toEqual(922331.8574811446)
  })

  scenario('deletes a offer', async (scenario: StandardScenario) => {
    const original = (await deleteOffer({ id: scenario.offer.one.id })) as Offer
    const result = await offer({ id: original.id })

    expect(result).toEqual(null)
  })
})
