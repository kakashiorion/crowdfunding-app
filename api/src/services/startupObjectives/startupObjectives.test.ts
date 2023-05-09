import type { StartupObjective } from '@prisma/client'

import {
  startupObjectives,
  startupObjective,
  createStartupObjective,
  updateStartupObjective,
  deleteStartupObjective,
} from './startupObjectives'
import type { StandardScenario } from './startupObjectives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupObjectives', () => {
  scenario(
    'returns all startupObjectives',
    async (scenario: StandardScenario) => {
      const result = await startupObjectives()

      expect(result.length).toEqual(
        Object.keys(scenario.startupObjective).length
      )
    }
  )

  scenario(
    'returns a single startupObjective',
    async (scenario: StandardScenario) => {
      const result = await startupObjective({
        id: scenario.startupObjective.one.id,
      })

      expect(result).toEqual(scenario.startupObjective.one)
    }
  )

  scenario('creates a startupObjective', async (scenario: StandardScenario) => {
    const result = await createStartupObjective({
      input: {
        id: scenario.startupObjective.two.id,
        preferredInvestorLevels: 'NOVICE',
        preferredLocations: 2876518,
        platformGoal: 'RAISING_FUNDS',
        referSource: 'WORD_OF_MOUTH',
        demoURL: 'String',
        updatedAt: '2023-05-09T21:14:54.646Z',
      },
    })

    expect(result.id).toEqual(scenario.startupObjective.two.id)
    expect(result.preferredInvestorLevels).toEqual('NOVICE')
    expect(result.preferredLocations).toEqual(2876518)
    expect(result.platformGoal).toEqual('RAISING_FUNDS')
    expect(result.referSource).toEqual('WORD_OF_MOUTH')
    expect(result.demoURL).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:14:54.646Z'))
  })

  scenario('updates a startupObjective', async (scenario: StandardScenario) => {
    const original = (await startupObjective({
      id: scenario.startupObjective.one.id,
    })) as StartupObjective
    const result = await updateStartupObjective({
      id: original.id,
      input: { preferredInvestorLevels: 'SEASONED' },
    })

    expect(result.preferredInvestorLevels).toEqual('SEASONED')
  })

  scenario('deletes a startupObjective', async (scenario: StandardScenario) => {
    const original = (await deleteStartupObjective({
      id: scenario.startupObjective.one.id,
    })) as StartupObjective
    const result = await startupObjective({ id: original.id })

    expect(result).toEqual(null)
  })
})
