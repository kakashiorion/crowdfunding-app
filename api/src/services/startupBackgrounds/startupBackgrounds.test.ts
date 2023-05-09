import type { StartupBackground } from '@prisma/client'

import {
  startupBackgrounds,
  startupBackground,
  createStartupBackground,
  updateStartupBackground,
  deleteStartupBackground,
} from './startupBackgrounds'
import type { StandardScenario } from './startupBackgrounds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupBackgrounds', () => {
  scenario(
    'returns all startupBackgrounds',
    async (scenario: StandardScenario) => {
      const result = await startupBackgrounds()

      expect(result.length).toEqual(
        Object.keys(scenario.startupBackground).length
      )
    }
  )

  scenario(
    'returns a single startupBackground',
    async (scenario: StandardScenario) => {
      const result = await startupBackground({
        id: scenario.startupBackground.one.id,
      })

      expect(result).toEqual(scenario.startupBackground.one)
    }
  )

  scenario(
    'creates a startupBackground',
    async (scenario: StandardScenario) => {
      const result = await createStartupBackground({
        input: {
          id: scenario.startupBackground.two.id,
          coreValues: 'String',
          updatedAt: '2023-05-09T21:07:40.645Z',
        },
      })

      expect(result.id).toEqual(scenario.startupBackground.two.id)
      expect(result.coreValues).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-05-09T21:07:40.645Z'))
    }
  )

  scenario(
    'updates a startupBackground',
    async (scenario: StandardScenario) => {
      const original = (await startupBackground({
        id: scenario.startupBackground.one.id,
      })) as StartupBackground
      const result = await updateStartupBackground({
        id: original.id,
        input: { coreValues: 'String2' },
      })

      expect(result.coreValues).toEqual('String2')
    }
  )

  scenario(
    'deletes a startupBackground',
    async (scenario: StandardScenario) => {
      const original = (await deleteStartupBackground({
        id: scenario.startupBackground.one.id,
      })) as StartupBackground
      const result = await startupBackground({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
