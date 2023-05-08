import { render } from '@redwoodjs/testing/web'

import StartupObjective from './StartupObjective'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupObjective', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupObjective />)
    }).not.toThrow()
  })
})
