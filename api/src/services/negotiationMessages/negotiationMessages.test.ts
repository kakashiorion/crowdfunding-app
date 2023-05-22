import type { NegotiationMessage } from '@prisma/client'

import {
  negotiationMessages,
  negotiationMessage,
  createNegotiationMessage,
  updateNegotiationMessage,
  deleteNegotiationMessage,
} from './negotiationMessages'
import type { StandardScenario } from './negotiationMessages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('negotiationMessages', () => {
  scenario(
    'returns all negotiationMessages',
    async (scenario: StandardScenario) => {
      const result = await negotiationMessages()

      expect(result.length).toEqual(
        Object.keys(scenario.negotiationMessage).length
      )
    }
  )

  scenario(
    'returns a single negotiationMessage',
    async (scenario: StandardScenario) => {
      const result = await negotiationMessage({
        id: scenario.negotiationMessage.one.id,
      })

      expect(result).toEqual(scenario.negotiationMessage.one)
    }
  )

  scenario(
    'creates a negotiationMessage',
    async (scenario: StandardScenario) => {
      const result = await createNegotiationMessage({
        input: {
          negotiationTableID:
            scenario.negotiationMessage.two.negotiationTableID,
          senderID: scenario.negotiationMessage.two.senderID,
          content: 'String',
          updatedAt: '2023-05-22T16:14:24.500Z',
        },
      })

      expect(result.negotiationTableID).toEqual(
        scenario.negotiationMessage.two.negotiationTableID
      )
      expect(result.senderID).toEqual(scenario.negotiationMessage.two.senderID)
      expect(result.content).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-05-22T16:14:24.500Z'))
    }
  )

  scenario(
    'updates a negotiationMessage',
    async (scenario: StandardScenario) => {
      const original = (await negotiationMessage({
        id: scenario.negotiationMessage.one.id,
      })) as NegotiationMessage
      const result = await updateNegotiationMessage({
        id: original.id,
        input: { content: 'String2' },
      })

      expect(result.content).toEqual('String2')
    }
  )

  scenario(
    'deletes a negotiationMessage',
    async (scenario: StandardScenario) => {
      const original = (await deleteNegotiationMessage({
        id: scenario.negotiationMessage.one.id,
      })) as NegotiationMessage
      const result = await negotiationMessage({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
