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
        startupID: scenario.fundraisingRound.two.startupID,
        roundStage: 'SEED',
        capitalRaisedLacs: 1975780.0906633926,
        valuationLacs: 1414969.0890104272,
        keyInvestors: 'String',
        updatedAt: '2023-04-29T06:49:54.737Z',
      },
    })

    expect(result.startupID).toEqual(scenario.fundraisingRound.two.startupID)
    expect(result.roundStage).toEqual('SEED')
    expect(result.capitalRaisedLacs).toEqual(1975780.0906633926)
    expect(result.valuationLacs).toEqual(1414969.0890104272)
    expect(result.keyInvestors).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:49:54.737Z'))
  })

  scenario('updates a fundraisingRound', async (scenario: StandardScenario) => {
    const original = (await fundraisingRound({
      id: scenario.fundraisingRound.one.id,
    })) as FundraisingRound
    const result = await updateFundraisingRound({
      id: original.id,
      input: { roundStage: 'LATER' },
    })

    expect(result.roundStage).toEqual('LATER')
  })

  scenario('deletes a fundraisingRound', async (scenario: StandardScenario) => {
    const original = (await deleteFundraisingRound({
      id: scenario.fundraisingRound.one.id,
    })) as FundraisingRound
    const result = await fundraisingRound({ id: original.id })

    expect(result).toEqual(null)
  })
})
