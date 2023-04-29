import type { StartupBasic } from '@prisma/client'

import {
  startupBasics,
  startupBasic,
  createStartupBasic,
  updateStartupBasic,
  deleteStartupBasic,
} from './startupBasics'
import type { StandardScenario } from './startupBasics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startupBasics', () => {
  scenario('returns all startupBasics', async (scenario: StandardScenario) => {
    const result = await startupBasics()

    expect(result.length).toEqual(Object.keys(scenario.startupBasic).length)
  })

  scenario(
    'returns a single startupBasic',
    async (scenario: StandardScenario) => {
      const result = await startupBasic({ id: scenario.startupBasic.one.id })

      expect(result).toEqual(scenario.startupBasic.one)
    }
  )

  scenario('creates a startupBasic', async (scenario: StandardScenario) => {
    const result = await createStartupBasic({
      input: {
        id: scenario.startupBasic.two.id,
        valueProp: 'String',
        isFirstStartup: true,
        mission: 'String',
        vision: 'String',
        startupSize: 'ONE',
        coreValues: 'String',
        updatedAt: '2023-04-29T06:46:50.911Z',
      },
    })

    expect(result.id).toEqual(scenario.startupBasic.two.id)
    expect(result.valueProp).toEqual('String')
    expect(result.isFirstStartup).toEqual(true)
    expect(result.mission).toEqual('String')
    expect(result.vision).toEqual('String')
    expect(result.startupSize).toEqual('ONE')
    expect(result.coreValues).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:46:50.911Z'))
  })

  scenario('updates a startupBasic', async (scenario: StandardScenario) => {
    const original = (await startupBasic({
      id: scenario.startupBasic.one.id,
    })) as StartupBasic
    const result = await updateStartupBasic({
      id: original.id,
      input: { valueProp: 'String2' },
    })

    expect(result.valueProp).toEqual('String2')
  })

  scenario('deletes a startupBasic', async (scenario: StandardScenario) => {
    const original = (await deleteStartupBasic({
      id: scenario.startupBasic.one.id,
    })) as StartupBasic
    const result = await startupBasic({ id: original.id })

    expect(result).toEqual(null)
  })
})
