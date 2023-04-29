import type { StartupMotive } from '@prisma/client'

import {
  startupMotives,
  startupMotive,
  createStartupMotive,
  updateStartupMotive,
  deleteStartupMotive,
} from './startupMotives'
import type { StandardScenario } from './startupMotives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupMotives', () => {
  scenario('returns all startupMotives', async (scenario: StandardScenario) => {
    const result = await startupMotives()

    expect(result.length).toEqual(Object.keys(scenario.startupMotive).length)
  })

  scenario(
    'returns a single startupMotive',
    async (scenario: StandardScenario) => {
      const result = await startupMotive({ id: scenario.startupMotive.one.id })

      expect(result).toEqual(scenario.startupMotive.one)
    }
  )

  scenario('creates a startupMotive', async (scenario: StandardScenario) => {
    const result = await createStartupMotive({
      input: {
        id: scenario.startupMotive.two.id,
        platformGoal: 'RAISE_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        preferredIndustrySectors: 8431672,
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 7717455,
        updatedAt: '2023-04-29T06:50:33.141Z',
      },
    })

    expect(result.id).toEqual(scenario.startupMotive.two.id)
    expect(result.platformGoal).toEqual('RAISE_FUNDS')
    expect(result.referSource).toEqual('WORD_OF_MOUTH')
    expect(result.preferredIndustrySectors).toEqual(8431672)
    expect(result.preferredInvestorLevels).toEqual('NOVICE')
    expect(result.preferredLocations).toEqual(7717455)
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:50:33.141Z'))
  })

  scenario('updates a startupMotive', async (scenario: StandardScenario) => {
    const original = (await startupMotive({
      id: scenario.startupMotive.one.id,
    })) as StartupMotive
    const result = await updateStartupMotive({
      id: original.id,
      input: { platformGoal: 'GET_ADVICE' },
    })

    expect(result.platformGoal).toEqual('GET_ADVICE')
  })

  scenario('deletes a startupMotive', async (scenario: StandardScenario) => {
    const original = (await deleteStartupMotive({
      id: scenario.startupMotive.one.id,
    })) as StartupMotive
    const result = await startupMotive({ id: original.id })

    expect(result).toEqual(null)
  })
})
