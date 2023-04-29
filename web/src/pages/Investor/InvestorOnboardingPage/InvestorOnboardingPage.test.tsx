import { render } from '@redwoodjs/testing/web'

import InvestorOnboardingPage from './InvestorOnboardingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorOnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOnboardingPage />)
    }).not.toThrow()
  })
})
