import type { OfferRoom } from '@prisma/client'

import {
  offerRooms,
  offerRoom,
  createOfferRoom,
  updateOfferRoom,
  deleteOfferRoom,
} from './offerRooms'
import type { StandardScenario } from './offerRooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('offerRooms', () => {
  scenario('returns all offerRooms', async (scenario: StandardScenario) => {
    const result = await offerRooms()

    expect(result.length).toEqual(Object.keys(scenario.offerRoom).length)
  })

  scenario('returns a single offerRoom', async (scenario: StandardScenario) => {
    const result = await offerRoom({ id: scenario.offerRoom.one.id })

    expect(result).toEqual(scenario.offerRoom.one)
  })

  scenario('creates a offerRoom', async (scenario: StandardScenario) => {
    const result = await createOfferRoom({
      input: {
        id: scenario.offerRoom.two.id,
        resourceLinks: 'String',
        updatedAt: '2023-05-22T16:11:26.251Z',
      },
    })

    expect(result.id).toEqual(scenario.offerRoom.two.id)
    expect(result.resourceLinks).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-22T16:11:26.251Z'))
  })

  scenario('updates a offerRoom', async (scenario: StandardScenario) => {
    const original = (await offerRoom({
      id: scenario.offerRoom.one.id,
    })) as OfferRoom
    const result = await updateOfferRoom({
      id: original.id,
      input: { resourceLinks: 'String2' },
    })

    expect(result.resourceLinks).toEqual('String2')
  })

  scenario('deletes a offerRoom', async (scenario: StandardScenario) => {
    const original = (await deleteOfferRoom({
      id: scenario.offerRoom.one.id,
    })) as OfferRoom
    const result = await offerRoom({ id: original.id })

    expect(result).toEqual(null)
  })
})
