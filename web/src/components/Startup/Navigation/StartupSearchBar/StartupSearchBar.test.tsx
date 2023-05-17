import { render } from '@redwoodjs/testing/web'

import StartupSearchBar from './StartupSearchBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupSearchBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupSearchBar />)
    }).not.toThrow()
  })
})
