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
        name: 'String',
        locationID: 8592345,
        workedInSectors: 'EDUCATION',
        updatedAt: '2023-05-09T21:02:19.871Z',
      },
    })

    expect(result.id).toEqual(scenario.investor.two.id)
    expect(result.name).toEqual('String')
    expect(result.locationID).toEqual(8592345)
    expect(result.workedInSectors).toEqual('EDUCATION')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:02:19.871Z'))
  })

  scenario('updates a investor', async (scenario: StandardScenario) => {
    const original = (await investor({
      id: scenario.investor.one.id,
    })) as Investor
    const result = await updateInvestor({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a investor', async (scenario: StandardScenario) => {
    const original = (await deleteInvestor({
      id: scenario.investor.one.id,
    })) as Investor
    const result = await investor({ id: original.id })

    expect(result).toEqual(null)
  })
})
