import { render } from '@redwoodjs/testing/web'

import StartupCompleted from './StartupCompleted'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupCompleted', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupCompleted />)
    }).not.toThrow()
  })
})
