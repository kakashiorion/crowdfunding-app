import { render } from '@redwoodjs/testing/web'

import InvestorOnboardingLayout from './InvestorOnboardingLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorOnboardingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOnboardingLayout />)
    }).not.toThrow()
  })
})
