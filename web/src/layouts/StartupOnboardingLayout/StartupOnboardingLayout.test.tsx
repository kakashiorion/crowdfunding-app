import { render } from '@redwoodjs/testing/web'

import StartupOnboardingLayout from './StartupOnboardingLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupOnboardingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupOnboardingLayout />)
    }).not.toThrow()
  })
})
