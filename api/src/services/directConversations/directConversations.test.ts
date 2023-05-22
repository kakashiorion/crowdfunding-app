import type { DirectConversation } from '@prisma/client'

import {
  directConversations,
  directConversation,
  createDirectConversation,
  updateDirectConversation,
  deleteDirectConversation,
} from './directConversations'
import type { StandardScenario } from './directConversations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('directConversations', () => {
  scenario(
    'returns all directConversations',
    async (scenario: StandardScenario) => {
      const result = await directConversations()

      expect(result.length).toEqual(
        Object.keys(scenario.directConversation).length
      )
    }
  )

  scenario(
    'returns a single directConversation',
    async (scenario: StandardScenario) => {
      const result = await directConversation({
        id: scenario.directConversation.one.id,
      })

      expect(result).toEqual(scenario.directConversation.one)
    }
  )

  scenario('creates a directConversation', async () => {
    const result = await createDirectConversation({
      input: { updatedAt: '2023-05-22T19:17:48.970Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-22T19:17:48.970Z'))
  })

  scenario(
    'updates a directConversation',
    async (scenario: StandardScenario) => {
      const original = (await directConversation({
        id: scenario.directConversation.one.id,
      })) as DirectConversation
      const result = await updateDirectConversation({
        id: original.id,
        input: { updatedAt: '2023-05-23T19:17:48.971Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-05-23T19:17:48.971Z'))
    }
  )

  scenario(
    'deletes a directConversation',
    async (scenario: StandardScenario) => {
      const original = (await deleteDirectConversation({
        id: scenario.directConversation.one.id,
      })) as DirectConversation
      const result = await directConversation({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
