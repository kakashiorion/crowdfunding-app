import type { InvestedCompany } from '@prisma/client'

import {
  investedCompanies,
  investedCompany,
  createInvestedCompany,
  updateInvestedCompany,
  deleteInvestedCompany,
} from './investedCompanies'
import type { StandardScenario } from './investedCompanies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('investedCompanies', () => {
  scenario(
    'returns all investedCompanies',
    async (scenario: StandardScenario) => {
      const result = await investedCompanies()

      expect(result.length).toEqual(
        Object.keys(scenario.investedCompany).length
      )
    }
  )

  scenario(
    'returns a single investedCompany',
    async (scenario: StandardScenario) => {
      const result = await investedCompany({
        id: scenario.investedCompany.one.id,
      })

      expect(result).toEqual(scenario.investedCompany.one)
    }
  )

  scenario('creates a investedCompany', async (scenario: StandardScenario) => {
    const result = await createInvestedCompany({
      input: {
        investorID: scenario.investedCompany.two.investorID,
        companyName: 'String',
        industrySectorID: 9341450,
        fundingStage: 'SEED',
        hasExited: true,
        updatedAt: '2023-04-29T06:43:11.530Z',
      },
    })

    expect(result.investorID).toEqual(scenario.investedCompany.two.investorID)
    expect(result.companyName).toEqual('String')
    expect(result.industrySectorID).toEqual(9341450)
    expect(result.fundingStage).toEqual('SEED')
    expect(result.hasExited).toEqual(true)
    expect(result.updatedAt).toEqual(new Date('2023-04-29T06:43:11.530Z'))
  })

  scenario('updates a investedCompany', async (scenario: StandardScenario) => {
    const original = (await investedCompany({
      id: scenario.investedCompany.one.id,
    })) as InvestedCompany
    const result = await updateInvestedCompany({
      id: original.id,
      input: { companyName: 'String2' },
    })

    expect(result.companyName).toEqual('String2')
  })

  scenario('deletes a investedCompany', async (scenario: StandardScenario) => {
    const original = (await deleteInvestedCompany({
      id: scenario.investedCompany.one.id,
    })) as InvestedCompany
    const result = await investedCompany({ id: original.id })

    expect(result).toEqual(null)
  })
})
