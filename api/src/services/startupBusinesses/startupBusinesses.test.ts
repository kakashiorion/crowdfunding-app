import type { StartupBusiness } from '@prisma/client'

import {
  startupBusinesses,
  startupBusiness,
  createStartupBusiness,
  updateStartupBusiness,
  deleteStartupBusiness,
} from './startupBusinesses'
import type { StandardScenario } from './startupBusinesses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupBusinesses', () => {
  scenario(
    'returns all startupBusinesses',
    async (scenario: StandardScenario) => {
      const result = await startupBusinesses()

      expect(result.length).toEqual(
        Object.keys(scenario.startupBusiness).length
      )
    }
  )

  scenario(
    'returns a single startupBusiness',
    async (scenario: StandardScenario) => {
      const result = await startupBusiness({
        id: scenario.startupBusiness.one.id,
      })

      expect(result).toEqual(scenario.startupBusiness.one)
    }
  )

  scenario('creates a startupBusiness', async (scenario: StandardScenario) => {
    const result = await createStartupBusiness({
      input: {
        id: scenario.startupBusiness.two.id,
        numberUsers: 'LESS_THAN_100',
        numberCities: 'NONE',
        distributionType: 'B2B',
        partners: 'String',
        customers: 'String',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentActivities: 'String',
        hasOnlineBusiness: 'YES',
        updatedAt: '2023-05-24T18:14:40.189Z',
      },
    })

    expect(result.id).toEqual(scenario.startupBusiness.two.id)
    expect(result.numberUsers).toEqual('LESS_THAN_100')
    expect(result.numberCities).toEqual('NONE')
    expect(result.distributionType).toEqual('B2B')
    expect(result.partners).toEqual('String')
    expect(result.customers).toEqual('String')
    expect(result.workedWell).toEqual('String')
    expect(result.challenges).toEqual('String')
    expect(result.couldImprove).toEqual('String')
    expect(result.currentActivities).toEqual('String')
    expect(result.hasOnlineBusiness).toEqual('YES')
    expect(result.updatedAt).toEqual(new Date('2023-05-24T18:14:40.189Z'))
  })

  scenario('updates a startupBusiness', async (scenario: StandardScenario) => {
    const original = (await startupBusiness({
      id: scenario.startupBusiness.one.id,
    })) as StartupBusiness
    const result = await updateStartupBusiness({
      id: original.id,
      input: { numberUsers: 'MORE_THAN_1_CRORE' },
    })

    expect(result.numberUsers).toEqual('MORE_THAN_1_CRORE')
  })

  scenario('deletes a startupBusiness', async (scenario: StandardScenario) => {
    const original = (await deleteStartupBusiness({
      id: scenario.startupBusiness.one.id,
    })) as StartupBusiness
    const result = await startupBusiness({ id: original.id })

    expect(result).toEqual(null)
  })
})
