import type { OfferQuestion } from '@prisma/client'

import {
  offerQuestions,
  offerQuestion,
  createOfferQuestion,
  updateOfferQuestion,
  deleteOfferQuestion,
} from './offerQuestions'
import type { StandardScenario } from './offerQuestions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('offerQuestions', () => {
  scenario('returns all offerQuestions', async (scenario: StandardScenario) => {
    const result = await offerQuestions()

    expect(result.length).toEqual(Object.keys(scenario.offerQuestion).length)
  })

  scenario(
    'returns a single offerQuestion',
    async (scenario: StandardScenario) => {
      const result = await offerQuestion({ id: scenario.offerQuestion.one.id })

      expect(result).toEqual(scenario.offerQuestion.one)
    }
  )

  scenario('creates a offerQuestion', async (scenario: StandardScenario) => {
    const result = await createOfferQuestion({
      input: {
        offerRoomID: scenario.offerQuestion.two.offerRoomID,
        askerID: scenario.offerQuestion.two.askerID,
        question: 'String',
        updatedAt: '2023-05-22T16:12:48.849Z',
      },
    })

    expect(result.offerRoomID).toEqual(scenario.offerQuestion.two.offerRoomID)
    expect(result.askerID).toEqual(scenario.offerQuestion.two.askerID)
    expect(result.question).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-22T16:12:48.849Z'))
  })

  scenario('updates a offerQuestion', async (scenario: StandardScenario) => {
    const original = (await offerQuestion({
      id: scenario.offerQuestion.one.id,
    })) as OfferQuestion
    const result = await updateOfferQuestion({
      id: original.id,
      input: { question: 'String2' },
    })

    expect(result.question).toEqual('String2')
  })

  scenario('deletes a offerQuestion', async (scenario: StandardScenario) => {
    const original = (await deleteOfferQuestion({
      id: scenario.offerQuestion.one.id,
    })) as OfferQuestion
    const result = await offerQuestion({ id: original.id })

    expect(result).toEqual(null)
  })
})
