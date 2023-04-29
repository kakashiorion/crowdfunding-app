import type { KeyPeople } from '@prisma/client'

import {
  keyPeoples,
  keyPeople,
  createKeyPeople,
  updateKeyPeople,
  deleteKeyPeople,
} from './keyPeoples'
import type { StandardScenario } from './keyPeoples.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('keyPeoples', () => {
  scenario('returns all keyPeoples', async (scenario: StandardScenario) => {
    const result = await keyPeoples()

    expect(result.length).toEqual(Object.keys(scenario.keyPeople).length)
  })

  scenario('returns a single keyPeople', async (scenario: StandardScenario) => {
    const result = await keyPeople({ id: scenario.keyPeople.one.id })

    expect(result).toEqual(scenario.keyPeople.one)
  })

  scenario('creates a keyPeople', async (scenario: StandardScenario) => {
    const result = await createKeyPeople({
      input: {
        startupID: scenario.keyPeople.two.startupID,
        name: 'String',
        role: 'String',
        updatedAt: '2023-04-29T06:47:43.073Z',
      },
    })

    expect(result.startupID).toEqual(scenario.keyPeople.two.startupID)
    expect(result.name).toEqual('String')
    expect(result.role).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:47:43.073Z'))
  })

  scenario('updates a keyPeople', async (scenario: StandardScenario) => {
    const original = (await keyPeople({
      id: scenario.keyPeople.one.id,
    })) as KeyPeople
    const result = await updateKeyPeople({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a keyPeople', async (scenario: StandardScenario) => {
    const original = (await deleteKeyPeople({
      id: scenario.keyPeople.one.id,
    })) as KeyPeople
    const result = await keyPeople({ id: original.id })

    expect(result).toEqual(null)
  })
})
