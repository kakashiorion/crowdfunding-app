import { render } from '@redwoodjs/testing/web'

import StartupBackground from './StartupBackground'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupBackground', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupBackground />)
    }).not.toThrow()
  })
})
