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
        numberUsersFY: 9927447,
        numberCitiesFY: 6452853,
        distributionType: 'B2B',
        workedWell: 'String',
        challenges: 'String',
        couldImprove: 'String',
        currentFYActivities: 'String',
        hasOnlineBusiness: true,
        partners: 'String',
        customers: 'String',
        shortTermPlan: 'EXPAND_GEO',
        trends: 'String',
        competitors: 'String',
        opporunities: 'String',
        threats: 'String',
        xFactor: 'String',
        updatedAt: '2023-04-29T06:47:14.858Z',
      },
    })

    expect(result.id).toEqual(scenario.startupBusiness.two.id)
    expect(result.numberUsersFY).toEqual(9927447)
    expect(result.numberCitiesFY).toEqual(6452853)
    expect(result.distributionType).toEqual('B2B')
    expect(result.workedWell).toEqual('String')
    expect(result.challenges).toEqual('String')
    expect(result.couldImprove).toEqual('String')
    expect(result.currentFYActivities).toEqual('String')
    expect(result.hasOnlineBusiness).toEqual(true)
    expect(result.partners).toEqual('String')
    expect(result.customers).toEqual('String')
    expect(result.shortTermPlan).toEqual('EXPAND_GEO')
    expect(result.trends).toEqual('String')
    expect(result.competitors).toEqual('String')
    expect(result.opporunities).toEqual('String')
    expect(result.threats).toEqual('String')
    expect(result.xFactor).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:47:14.858Z'))
  })

  scenario('updates a startupBusiness', async (scenario: StandardScenario) => {
    const original = (await startupBusiness({
      id: scenario.startupBusiness.one.id,
    })) as StartupBusiness
    const result = await updateStartupBusiness({
      id: original.id,
      input: { numberUsersFY: 8971220 },
    })

    expect(result.numberUsersFY).toEqual(8971220)
  })

  scenario('deletes a startupBusiness', async (scenario: StandardScenario) => {
    const original = (await deleteStartupBusiness({
      id: scenario.startupBusiness.one.id,
    })) as StartupBusiness
    const result = await startupBusiness({ id: original.id })

    expect(result).toEqual(null)
  })
})
