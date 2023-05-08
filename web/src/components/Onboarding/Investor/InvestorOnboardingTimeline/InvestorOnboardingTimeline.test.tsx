import { render } from '@redwoodjs/testing/web'

import InvestorOnboardingTimeline from './InvestorOnboardingTimeline'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorOnboardingTimeline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOnboardingTimeline />)
    }).not.toThrow()
  })
})
