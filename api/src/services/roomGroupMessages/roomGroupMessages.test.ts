import type { RoomGroupMessage } from '@prisma/client'

import {
  roomGroupMessages,
  roomGroupMessage,
  createRoomGroupMessage,
  updateRoomGroupMessage,
  deleteRoomGroupMessage,
} from './roomGroupMessages'
import type { StandardScenario } from './roomGroupMessages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('roomGroupMessages', () => {
  scenario(
    'returns all roomGroupMessages',
    async (scenario: StandardScenario) => {
      const result = await roomGroupMessages()

      expect(result.length).toEqual(
        Object.keys(scenario.roomGroupMessage).length
      )
    }
  )

  scenario(
    'returns a single roomGroupMessage',
    async (scenario: StandardScenario) => {
      const result = await roomGroupMessage({
        id: scenario.roomGroupMessage.one.id,
      })

      expect(result).toEqual(scenario.roomGroupMessage.one)
    }
  )

  scenario('creates a roomGroupMessage', async (scenario: StandardScenario) => {
    const result = await createRoomGroupMessage({
      input: {
        offerRoomId: scenario.roomGroupMessage.two.offerRoomId,
        senderID: scenario.roomGroupMessage.two.senderID,
        content: 'String',
        updatedAt: '2023-05-22T16:14:01.876Z',
      },
    })

    expect(result.offerRoomId).toEqual(
      scenario.roomGroupMessage.two.offerRoomId
    )
    expect(result.senderID).toEqual(scenario.roomGroupMessage.two.senderID)
    expect(result.content).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-22T16:14:01.876Z'))
  })

  scenario('updates a roomGroupMessage', async (scenario: StandardScenario) => {
    const original = (await roomGroupMessage({
      id: scenario.roomGroupMessage.one.id,
    })) as RoomGroupMessage
    const result = await updateRoomGroupMessage({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a roomGroupMessage', async (scenario: StandardScenario) => {
    const original = (await deleteRoomGroupMessage({
      id: scenario.roomGroupMessage.one.id,
    })) as RoomGroupMessage
    const result = await roomGroupMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
