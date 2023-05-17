import { render } from '@redwoodjs/testing/web'

import StartupProfileBar from './StartupProfileBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupProfileBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupProfileBar />)
    }).not.toThrow()
  })
})
