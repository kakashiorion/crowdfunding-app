import type { FundraisingRound } from '@prisma/client'

import {
  fundraisingRounds,
  fundraisingRound,
  createFundraisingRound,
  updateFundraisingRound,
  deleteFundraisingRound,
} from './fundraisingRounds'
import type { StandardScenario } from './fundraisingRounds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('fundraisingRounds', () => {
  scenario(
    'returns all fundraisingRounds',
    async (scenario: StandardScenario) => {
      const result = await fundraisingRounds()

      expect(result.length).toEqual(
        Object.keys(scenario.fundraisingRound).length
      )
    }
  )

  scenario(
    'returns a single fundraisingRound',
    async (scenario: StandardScenario) => {
      const result = await fundraisingRound({
        id: scenario.fundraisingRound.one.id,
      })

      expect(result).toEqual(scenario.fundraisingRound.one)
    }
  )

  scenario('creates a fundraisingRound', async (scenario: StandardScenario) => {
    const result = await createFundraisingRound({
      input: {
        startupFinancialsID: scenario.fundraisingRound.two.startupFinancialsID,
        fundingStage: 'SEED',
        capitalRaisedInCr: 986724.2526451547,
        valuationInCr: 2234251.814017605,
        updatedAt: '2023-05-13T21:44:45.826Z',
      },
    })

    expect(result.startupFinancialsID).toEqual(
      scenario.fundraisingRound.two.startupFinancialsID
    )
    expect(result.fundingStage).toEqual('SEED')
    expect(result.capitalRaisedInCr).toEqual(986724.2526451547)
    expect(result.valuationInCr).toEqual(2234251.814017605)
    expect(result.updatedAt).toEqual(new Date('2023-05-13T21:44:45.826Z'))
  })

  scenario('updates a fundraisingRound', async (scenario: StandardScenario) => {
    const original = (await fundraisingRound({
      id: scenario.fundraisingRound.one.id,
    })) as FundraisingRound
    const result = await updateFundraisingRound({
      id: original.id,
      input: { fundingStage: 'LATER' },
    })

    expect(result.fundingStage).toEqual('LATER')
  })

  scenario('deletes a fundraisingRound', async (scenario: StandardScenario) => {
    const original = (await deleteFundraisingRound({
      id: scenario.fundraisingRound.one.id,
    })) as FundraisingRound
    const result = await fundraisingRound({ id: original.id })

    expect(result).toEqual(null)
  })
})
