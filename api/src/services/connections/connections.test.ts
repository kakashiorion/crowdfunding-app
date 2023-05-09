import type { Connection } from '@prisma/client'

import {
  connections,
  connection,
  createConnection,
  updateConnection,
  deleteConnection,
} from './connections'
import type { StandardScenario } from './connections.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('connections', () => {
  scenario('returns all connections', async (scenario: StandardScenario) => {
    const result = await connections()

    expect(result.length).toEqual(Object.keys(scenario.connection).length)
  })

  scenario(
    'returns a single connection',
    async (scenario: StandardScenario) => {
      const result = await connection({ id: scenario.connection.one.id })

      expect(result).toEqual(scenario.connection.one)
    }
  )

  scenario('creates a connection', async (scenario: StandardScenario) => {
    const result = await createConnection({
      input: {
        requesterID: scenario.connection.two.requesterID,
        accepterID: scenario.connection.two.accepterID,
        updatedAt: '2023-05-09T21:01:30.218Z',
      },
    })

    expect(result.requesterID).toEqual(scenario.connection.two.requesterID)
    expect(result.accepterID).toEqual(scenario.connection.two.accepterID)
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:01:30.218Z'))
  })

  scenario('updates a connection', async (scenario: StandardScenario) => {
    const original = (await connection({
      id: scenario.connection.one.id,
    })) as Connection
    const result = await updateConnection({
      id: original.id,
      input: { updatedAt: '2023-05-10T21:01:30.218Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-10T21:01:30.218Z'))
  })

  scenario('deletes a connection', async (scenario: StandardScenario) => {
    const original = (await deleteConnection({
      id: scenario.connection.one.id,
    })) as Connection
    const result = await connection({ id: original.id })

    expect(result).toEqual(null)
  })
})
