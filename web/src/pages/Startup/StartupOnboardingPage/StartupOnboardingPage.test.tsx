import { render } from '@redwoodjs/testing/web'

import StartupOnboardingPage from './StartupOnboardingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupOnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupOnboardingPage />)
    }).not.toThrow()
  })
})
