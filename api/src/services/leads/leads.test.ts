import type { Lead } from '@prisma/client'

import { leads, lead, createLead, updateLead, deleteLead } from './leads'
import type { StandardScenario } from './leads.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('leads', () => {
  scenario('returns all leads', async (scenario: StandardScenario) => {
    const result = await leads()

    expect(result.length).toEqual(Object.keys(scenario.lead).length)
  })

  scenario('returns a single lead', async (scenario: StandardScenario) => {
    const result = await lead({ id: scenario.lead.one.id })

    expect(result).toEqual(scenario.lead.one)
  })

  scenario('creates a lead', async () => {
    const result = await createLead({
      input: {
        email: 'String',
        phone: 'String',
        gToken: 'String',
        type: 'INVESTOR',
        updatedAt: '2023-05-16T11:37:57.993Z',
      },
    })

    expect(result.email).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.gToken).toEqual('String')
    expect(result.type).toEqual('INVESTOR')
    expect(result.updatedAt).toEqual(new Date('2023-05-16T11:37:57.993Z'))
  })

  scenario('updates a lead', async (scenario: StandardScenario) => {
    const original = (await lead({ id: scenario.lead.one.id })) as Lead
    const result = await updateLead({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a lead', async (scenario: StandardScenario) => {
    const original = (await deleteLead({ id: scenario.lead.one.id })) as Lead
    const result = await lead({ id: original.id })

    expect(result).toEqual(null)
  })
})
