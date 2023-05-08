import { render } from '@redwoodjs/testing/web'

import StartupOnboardingTimeline from './StartupOnboardingTimeline'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupOnboardingTimeline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupOnboardingTimeline />)
    }).not.toThrow()
  })
})
