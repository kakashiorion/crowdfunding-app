import { render } from '@redwoodjs/testing/web'

import StartupOnboardingMain from './StartupOnboardingMain'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupOnboardingMain', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupOnboardingMain />)
    }).not.toThrow()
  })
})
