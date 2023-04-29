import type { InvestorMotive } from '@prisma/client'

import {
  investorMotives,
  investorMotive,
  createInvestorMotive,
  updateInvestorMotive,
  deleteInvestorMotive,
} from './investorMotives'
import type { StandardScenario } from './investorMotives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investorMotives', () => {
  scenario(
    'returns all investorMotives',
    async (scenario: StandardScenario) => {
      const result = await investorMotives()

      expect(result.length).toEqual(Object.keys(scenario.investorMotive).length)
    }
  )

  scenario(
    'returns a single investorMotive',
    async (scenario: StandardScenario) => {
      const result = await investorMotive({
        id: scenario.investorMotive.one.id,
      })

      expect(result).toEqual(scenario.investorMotive.one)
    }
  )

  scenario('creates a investorMotive', async (scenario: StandardScenario) => {
    const result = await createInvestorMotive({
      input: {
        id: scenario.investorMotive.two.id,
        preferredIndustrySectors: 8939323,
        prefferedCapitalToInvest: 'LESS_THAN_1_LAC',
        preferredFundingStage: 'SEED',
        preferredStartupTeamSize: 'ONE',
        preferredLocations: 9837586,
        platformGoal: 'INVEST',
        referSource: 'WORD_OF_MOUTH',
        updatedAt: '2023-04-29T06:43:34.191Z',
      },
    })

    expect(result.id).toEqual(scenario.investorMotive.two.id)
    expect(result.preferredIndustrySectors).toEqual(8939323)
    expect(result.prefferedCapitalToInvest).toEqual('LESS_THAN_1_LAC')
    expect(result.preferredFundingStage).toEqual('SEED')
    expect(result.preferredStartupTeamSize).toEqual('ONE')
    expect(result.preferredLocations).toEqual(9837586)
    expect(result.platformGoal).toEqual('INVEST')
    expect(result.referSource).toEqual('WORD_OF_MOUTH')
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:43:34.191Z'))
  })

  scenario('updates a investorMotive', async (scenario: StandardScenario) => {
    const original = (await investorMotive({
      id: scenario.investorMotive.one.id,
    })) as InvestorMotive
    const result = await updateInvestorMotive({
      id: original.id,
      input: { preferredIndustrySectors: 3704679 },
    })

    expect(result.preferredIndustrySectors).toEqual(3704679)
  })

  scenario('deletes a investorMotive', async (scenario: StandardScenario) => {
    const original = (await deleteInvestorMotive({
      id: scenario.investorMotive.one.id,
    })) as InvestorMotive
    const result = await investorMotive({ id: original.id })

    expect(result).toEqual(null)
  })
})
