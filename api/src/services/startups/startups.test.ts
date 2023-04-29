import type { Startup } from '@prisma/client'

import {
  startups,
  startup,
  createStartup,
  updateStartup,
  deleteStartup,
} from './startups'
import type { StandardScenario } from './startups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('startups', () => {
  scenario('returns all startups', async (scenario: StandardScenario) => {
    const result = await startups()

    expect(result.length).toEqual(Object.keys(scenario.startup).length)
  })

  scenario('returns a single startup', async (scenario: StandardScenario) => {
    const result = await startup({ id: scenario.startup.one.id })

    expect(result).toEqual(scenario.startup.one)
  })

  scenario('creates a startup', async (scenario: StandardScenario) => {
    const result = await createStartup({
      input: {
        id: scenario.startup.two.id,
        name: 'String2286899',
        writeUp: 'String',
        dateIncorporated: '2023-04-29T06:46:07.333Z',
        locationID: 3753139,
        industrySectorID: 8968713,
        updatedAt: '2023-04-29T06:46:07.333Z',
      },
    })

    expect(result.id).toEqual(scenario.startup.two.id)
    expect(result.name).toEqual('String2286899')
    expect(result.writeUp).toEqual('String')
    expect(result.dateIncorporated).toEqual(
      new Date('2023-04-29T06:46:07.333Z')
    )
    expect(result.locationID).toEqual(3753139)
    expect(result.industrySectorID).toEqual(8968713)
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:46:07.333Z'))
  })

  scenario('updates a startup', async (scenario: StandardScenario) => {
    const original = (await startup({ id: scenario.startup.one.id })) as Startup
    const result = await updateStartup({
      id: original.id,
      input: { name: 'String23763182' },
    })

    expect(result.name).toEqual('String23763182')
  })

  scenario('deletes a startup', async (scenario: StandardScenario) => {
    const original = (await deleteStartup({
      id: scenario.startup.one.id,
    })) as Startup
    const result = await startup({ id: original.id })

    expect(result).toEqual(null)
  })
})
