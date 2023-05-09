import type { SectorCategory } from '@prisma/client'

import {
  sectorCategories,
  sectorCategory,
  createSectorCategory,
  updateSectorCategory,
  deleteSectorCategory,
} from './sectorCategories'
import type { StandardScenario } from './sectorCategories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sectorCategories', () => {
  scenario(
    'returns all sectorCategories',
    async (scenario: StandardScenario) => {
      const result = await sectorCategories()

      expect(result.length).toEqual(Object.keys(scenario.sectorCategory).length)
    }
  )

  scenario(
    'returns a single sectorCategory',
    async (scenario: StandardScenario) => {
      const result = await sectorCategory({
        id: scenario.sectorCategory.one.id,
      })

      expect(result).toEqual(scenario.sectorCategory.one)
    }
  )

  scenario('creates a sectorCategory', async () => {
    const result = await createSectorCategory({
      input: {
        sector: 'EDUCATION',
        category: 'String',
        updatedAt: '2023-05-09T21:07:03.325Z',
      },
    })

    expect(result.sector).toEqual('EDUCATION')
    expect(result.category).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:07:03.325Z'))
  })

  scenario('updates a sectorCategory', async (scenario: StandardScenario) => {
    const original = (await sectorCategory({
      id: scenario.sectorCategory.one.id,
    })) as SectorCategory
    const result = await updateSectorCategory({
      id: original.id,
      input: { sector: 'AUTOMATION' },
    })

    expect(result.sector).toEqual('AUTOMATION')
  })

  scenario('deletes a sectorCategory', async (scenario: StandardScenario) => {
    const original = (await deleteSectorCategory({
      id: scenario.sectorCategory.one.id,
    })) as SectorCategory
    const result = await sectorCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
