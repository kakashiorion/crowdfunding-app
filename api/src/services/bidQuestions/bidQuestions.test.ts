import type { BidQuestion } from '@prisma/client'

import {
  bidQuestions,
  bidQuestion,
  createBidQuestion,
  updateBidQuestion,
  deleteBidQuestion,
} from './bidQuestions'
import type { StandardScenario } from './bidQuestions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bidQuestions', () => {
  scenario('returns all bidQuestions', async (scenario: StandardScenario) => {
    const result = await bidQuestions()

    expect(result.length).toEqual(Object.keys(scenario.bidQuestion).length)
  })

  scenario(
    'returns a single bidQuestion',
    async (scenario: StandardScenario) => {
      const result = await bidQuestion({ id: scenario.bidQuestion.one.id })

      expect(result).toEqual(scenario.bidQuestion.one)
    }
  )

  scenario('creates a bidQuestion', async (scenario: StandardScenario) => {
    const result = await createBidQuestion({
      input: {
        bidID: scenario.bidQuestion.two.bidID,
        question: 'String',
        updatedAt: '2023-04-29T06:52:26.779Z',
      },
    })

    expect(result.bidID).toEqual(scenario.bidQuestion.two.bidID)
    expect(result.question).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:52:26.779Z'))
  })

  scenario('updates a bidQuestion', async (scenario: StandardScenario) => {
    const original = (await bidQuestion({
      id: scenario.bidQuestion.one.id,
    })) as BidQuestion
    const result = await updateBidQuestion({
      id: original.id,
      input: { question: 'String2' },
    })

    expect(result.question).toEqual('String2')
  })

  scenario('deletes a bidQuestion', async (scenario: StandardScenario) => {
    const original = (await deleteBidQuestion({
      id: scenario.bidQuestion.one.id,
    })) as BidQuestion
    const result = await bidQuestion({ id: original.id })

    expect(result).toEqual(null)
  })
})
