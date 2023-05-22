import type { DirectMessage } from '@prisma/client'

import {
  directMessages,
  directMessage,
  createDirectMessage,
  updateDirectMessage,
  deleteDirectMessage,
} from './directMessages'
import type { StandardScenario } from './directMessages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('directMessages', () => {
  scenario('returns all directMessages', async (scenario: StandardScenario) => {
    const result = await directMessages()

    expect(result.length).toEqual(Object.keys(scenario.directMessage).length)
  })

  scenario(
    'returns a single directMessage',
    async (scenario: StandardScenario) => {
      const result = await directMessage({ id: scenario.directMessage.one.id })

      expect(result).toEqual(scenario.directMessage.one)
    }
  )

  scenario('creates a directMessage', async (scenario: StandardScenario) => {
    const result = await createDirectMessage({
      input: {
        conversationID: scenario.directMessage.two.conversationID,
        senderID: scenario.directMessage.two.senderID,
        content: 'String',
        updatedAt: '2023-05-22T16:13:35.025Z',
      },
    })

    expect(result.conversationID).toEqual(
      scenario.directMessage.two.conversationID
    )
    expect(result.senderID).toEqual(scenario.directMessage.two.senderID)
    expect(result.content).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-22T16:13:35.025Z'))
  })

  scenario('updates a directMessage', async (scenario: StandardScenario) => {
    const original = (await directMessage({
      id: scenario.directMessage.one.id,
    })) as DirectMessage
    const result = await updateDirectMessage({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a directMessage', async (scenario: StandardScenario) => {
    const original = (await deleteDirectMessage({
      id: scenario.directMessage.one.id,
    })) as DirectMessage
    const result = await directMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
