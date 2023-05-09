import type { Conversation } from '@prisma/client'

import {
  conversations,
  conversation,
  createConversation,
  updateConversation,
  deleteConversation,
} from './conversations'
import type { StandardScenario } from './conversations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('conversations', () => {
  scenario('returns all conversations', async (scenario: StandardScenario) => {
    const result = await conversations()

    expect(result.length).toEqual(Object.keys(scenario.conversation).length)
  })

  scenario(
    'returns a single conversation',
    async (scenario: StandardScenario) => {
      const result = await conversation({ id: scenario.conversation.one.id })

      expect(result).toEqual(scenario.conversation.one)
    }
  )

  scenario('creates a conversation', async (scenario: StandardScenario) => {
    const result = await createConversation({
      input: {
        conversationStarterID: scenario.conversation.two.conversationStarterID,
        conversationResponderID:
          scenario.conversation.two.conversationResponderID,
        updatedAt: '2023-05-09T21:19:32.591Z',
      },
    })

    expect(result.conversationStarterID).toEqual(
      scenario.conversation.two.conversationStarterID
    )
    expect(result.conversationResponderID).toEqual(
      scenario.conversation.two.conversationResponderID
    )
    expect(result.updatedAt).toEqual(new Date('2023-05-09T21:19:32.591Z'))
  })

  scenario('updates a conversation', async (scenario: StandardScenario) => {
    const original = (await conversation({
      id: scenario.conversation.one.id,
    })) as Conversation
    const result = await updateConversation({
      id: original.id,
      input: { updatedAt: '2023-05-10T21:19:32.592Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-10T21:19:32.592Z'))
  })

  scenario('deletes a conversation', async (scenario: StandardScenario) => {
    const original = (await deleteConversation({
      id: scenario.conversation.one.id,
    })) as Conversation
    const result = await conversation({ id: original.id })

    expect(result).toEqual(null)
  })
})
