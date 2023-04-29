import type { IndustrySector } from '@prisma/client'

import {
  industrySectors,
  industrySector,
  createIndustrySector,
  updateIndustrySector,
  deleteIndustrySector,
} from './industrySectors'
import type { StandardScenario } from './industrySectors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('industrySectors', () => {
  scenario(
    'returns all industrySectors',
    async (scenario: StandardScenario) => {
      const result = await industrySectors()

      expect(result.length).toEqual(Object.keys(scenario.industrySector).length)
    }
  )

  scenario(
    'returns a single industrySector',
    async (scenario: StandardScenario) => {
      const result = await industrySector({
        id: scenario.industrySector.one.id,
      })

      expect(result).toEqual(scenario.industrySector.one)
    }
  )

  scenario('creates a industrySector', async () => {
    const result = await createIndustrySector({
      input: {
        industry: 'EDUCATION',
        sector: 'AI',
        updatedAt: '2023-04-29T06:46:24.783Z',
      },
    })

    expect(result.industry).toEqual('EDUCATION')
    expect(result.sector).toEqual('AI')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:46:24.783Z'))
  })

  scenario('updates a industrySector', async (scenario: StandardScenario) => {
    const original = (await industrySector({
      id: scenario.industrySector.one.id,
    })) as IndustrySector
    const result = await updateIndustrySector({
      id: original.id,
      input: { industry: 'AUTOMATION' },
    })

    expect(result.industry).toEqual('AUTOMATION')
  })

  scenario('deletes a industrySector', async (scenario: StandardScenario) => {
    const original = (await deleteIndustrySector({
      id: scenario.industrySector.one.id,
    })) as IndustrySector
    const result = await industrySector({ id: original.id })

    expect(result).toEqual(null)
  })
})
