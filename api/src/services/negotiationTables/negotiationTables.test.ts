import type { NegotiationTable } from '@prisma/client'

import {
  negotiationTables,
  negotiationTable,
  createNegotiationTable,
  updateNegotiationTable,
  deleteNegotiationTable,
} from './negotiationTables'
import type { StandardScenario } from './negotiationTables.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('negotiationTables', () => {
  scenario(
    'returns all negotiationTables',
    async (scenario: StandardScenario) => {
      const result = await negotiationTables()

      expect(result.length).toEqual(
        Object.keys(scenario.negotiationTable).length
      )
    }
  )

  scenario(
    'returns a single negotiationTable',
    async (scenario: StandardScenario) => {
      const result = await negotiationTable({
        id: scenario.negotiationTable.one.id,
      })

      expect(result).toEqual(scenario.negotiationTable.one)
    }
  )

  scenario('creates a negotiationTable', async (scenario: StandardScenario) => {
    const result = await createNegotiationTable({
      input: {
        id: scenario.negotiationTable.two.id,
        updatedAt: '2023-05-22T19:25:22.174Z',
      },
    })

    expect(result.id).toEqual(scenario.negotiationTable.two.id)
    expect(result.updatedAt).toEqual(new Date('2023-05-22T19:25:22.174Z'))
  })

  scenario('updates a negotiationTable', async (scenario: StandardScenario) => {
    const original = (await negotiationTable({
      id: scenario.negotiationTable.one.id,
    })) as NegotiationTable
    const result = await updateNegotiationTable({
      id: original.id,
      input: { updatedAt: '2023-05-23T19:25:22.175Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-23T19:25:22.175Z'))
  })

  scenario('deletes a negotiationTable', async (scenario: StandardScenario) => {
    const original = (await deleteNegotiationTable({
      id: scenario.negotiationTable.one.id,
    })) as NegotiationTable
    const result = await negotiationTable({ id: original.id })

    expect(result).toEqual(null)
  })
})
