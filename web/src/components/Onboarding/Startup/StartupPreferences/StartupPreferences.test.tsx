import { render } from '@redwoodjs/testing/web'

import StartupPreferences from './StartupPreferences'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupPreferences', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupPreferences />)
    }).not.toThrow()
  })
})
