import type { CapTable } from '@prisma/client'

import {
  capTables,
  capTable,
  createCapTable,
  updateCapTable,
  deleteCapTable,
} from './capTables'
import type { StandardScenario } from './capTables.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('capTables', () => {
  scenario('returns all capTables', async (scenario: StandardScenario) => {
    const result = await capTables()

    expect(result.length).toEqual(Object.keys(scenario.capTable).length)
  })

  scenario('returns a single capTable', async (scenario: StandardScenario) => {
    const result = await capTable({ id: scenario.capTable.one.id })

    expect(result).toEqual(scenario.capTable.one)
  })

  scenario('creates a capTable', async (scenario: StandardScenario) => {
    const result = await createCapTable({
      input: {
        startupFinancialsID: scenario.capTable.two.startupFinancialsID,
        shareholderName: 'String',
        equityShare: 7503633.674578474,
        updatedAt: '2023-05-09T21:14:25.468Z',
      },
    })

    expect(result.startupFinancialsID).toEqual(
      scenario.capTable.two.startupFinancialsID
    )
    expect(result.shareholderName).toEqual('String')
    expect(result.equityShare).toEqual(7503633.674578474)
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:14:25.468Z'))
  })

  scenario('updates a capTable', async (scenario: StandardScenario) => {
    const original = (await capTable({
      id: scenario.capTable.one.id,
    })) as CapTable
    const result = await updateCapTable({
      id: original.id,
      input: { shareholderName: 'String2' },
    })

    expect(result.shareholderName).toEqual('String2')
  })

  scenario('deletes a capTable', async (scenario: StandardScenario) => {
    const original = (await deleteCapTable({
      id: scenario.capTable.one.id,
    })) as CapTable
    const result = await capTable({ id: original.id })

    expect(result).toEqual(null)
  })
})
