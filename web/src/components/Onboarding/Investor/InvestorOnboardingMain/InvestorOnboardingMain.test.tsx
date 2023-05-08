import { render } from '@redwoodjs/testing/web'

import InvestorOnboardingMain from './InvestorOnboardingMain'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorOnboardingMain', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOnboardingMain />)
    }).not.toThrow()
  })
})
