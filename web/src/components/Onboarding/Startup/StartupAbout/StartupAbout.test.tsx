import { render } from '@redwoodjs/testing/web'

import StartupAbout from './StartupAbout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupAbout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupAbout />)
    }).not.toThrow()
  })
})
