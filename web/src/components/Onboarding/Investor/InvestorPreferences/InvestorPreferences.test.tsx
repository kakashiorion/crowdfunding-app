import { render } from '@redwoodjs/testing/web'

import InvestorPreferences from './InvestorPreferences'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorPreferences', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorPreferences />)
    }).not.toThrow()
  })
})
