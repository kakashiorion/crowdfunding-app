import type { LandingContact } from '@prisma/client'

import {
  landingContacts,
  landingContact,
  createLandingContact,
  updateLandingContact,
  deleteLandingContact,
} from './landingContacts'
import type { StandardScenario } from './landingContacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('landingContacts', () => {
  scenario(
    'returns all landingContacts',
    async (scenario: StandardScenario) => {
      const result = await landingContacts()

      expect(result.length).toEqual(Object.keys(scenario.landingContact).length)
    }
  )

  scenario(
    'returns a single landingContact',
    async (scenario: StandardScenario) => {
      const result = await landingContact({
        id: scenario.landingContact.one.id,
      })

      expect(result).toEqual(scenario.landingContact.one)
    }
  )

  scenario('creates a landingContact', async () => {
    const result = await createLandingContact({
      input: {
        email: 'String',
        query: 'String',
        updatedAt: '2023-05-16T11:29:08.467Z',
      },
    })

    expect(result.email).toEqual('String')
    expect(result.query).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-16T11:29:08.467Z'))
  })

  scenario('updates a landingContact', async (scenario: StandardScenario) => {
    const original = (await landingContact({
      id: scenario.landingContact.one.id,
    })) as LandingContact
    const result = await updateLandingContact({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a landingContact', async (scenario: StandardScenario) => {
    const original = (await deleteLandingContact({
      id: scenario.landingContact.one.id,
    })) as LandingContact
    const result = await landingContact({ id: original.id })

    expect(result).toEqual(null)
  })
})
