import type { StartupPreferences } from '@prisma/client'

import {
  startupPreference,
  startupPreferences,
  createStartupPreferences,
  updateStartupPreferences,
  deleteStartupPreferences,
} from './startupPreference'
import type { StandardScenario } from './startupPreference.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupPreference', () => {
  scenario(
    'returns all startupPreference',
    async (scenario: StandardScenario) => {
      const result = await startupPreference()

      expect(result.length).toEqual(
        Object.keys(scenario.startupPreferences).length
      )
    }
  )

  scenario(
    'returns a single startupPreferences',
    async (scenario: StandardScenario) => {
      const result = await startupPreferences({
        id: scenario.startupPreferences.one.id,
      })

      expect(result).toEqual(scenario.startupPreferences.one)
    }
  )

  scenario(
    'creates a startupPreferences',
    async (scenario: StandardScenario) => {
      const result = await createStartupPreferences({
        input: {
          id: scenario.startupPreferences.two.id,
          updatedAt: '2023-04-29T06:51:14.921Z',
        },
      })

      expect(result.id).toEqual(scenario.startupPreferences.two.id)
      expect(result.updatedAt).toEqual(new Date('2023-04-29T06:51:14.921Z'))
    }
  )

  scenario(
    'updates a startupPreferences',
    async (scenario: StandardScenario) => {
      const original = (await startupPreferences({
        id: scenario.startupPreferences.one.id,
      })) as StartupPreferences
      const result = await updateStartupPreferences({
        id: original.id,
        input: { updatedAt: '2023-04-30T06:51:14.921Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-04-30T06:51:14.921Z'))
    }
  )

  scenario(
    'deletes a startupPreferences',
    async (scenario: StandardScenario) => {
      const original = (await deleteStartupPreferences({
        id: scenario.startupPreferences.one.id,
      })) as StartupPreferences
      const result = await startupPreferences({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
