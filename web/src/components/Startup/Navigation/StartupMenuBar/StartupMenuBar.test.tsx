import { render } from '@redwoodjs/testing/web'

import StartupMenuBar from './StartupMenuBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupMenuBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMenuBar />)
    }).not.toThrow()
  })
})
