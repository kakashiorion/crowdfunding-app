import type { Investor } from '@prisma/client'

import {
  investors,
  investor,
  createInvestor,
  updateInvestor,
  deleteInvestor,
} from './investors'
import type { StandardScenario } from './investors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investors', () => {
  scenario('returns all investors', async (scenario: StandardScenario) => {
    const result = await investors()

    expect(result.length).toEqual(Object.keys(scenario.investor).length)
  })

  scenario('returns a single investor', async (scenario: StandardScenario) => {
    const result = await investor({ id: scenario.investor.one.id })

    expect(result).toEqual(scenario.investor.one)
  })

  scenario('creates a investor', async (scenario: StandardScenario) => {
    const result = await createInvestor({
      input: {
        id: scenario.investor.two.id,
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-04-29T06:40:59.459Z',
        locationID: 9642753,
        workedInSectors: 2823035,
        updatedAt: '2023-04-29T06:40:59.459Z',
      },
    })

    expect(result.id).toEqual(scenario.investor.two.id)
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.dateOfBirth).toEqual(new Date('2023-04-29T06:40:59.459Z'))
    expect(result.locationID).toEqual(9642753)
    expect(result.workedInSectors).toEqual(2823035)
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:40:59.459Z'))
  })

  scenario('updates a investor', async (scenario: StandardScenario) => {
    const original = (await investor({
      id: scenario.investor.one.id,
    })) as Investor
    const result = await updateInvestor({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a investor', async (scenario: StandardScenario) => {
    const original = (await deleteInvestor({
      id: scenario.investor.one.id,
    })) as Investor
    const result = await investor({ id: original.id })

    expect(result).toEqual(null)
  })
})
