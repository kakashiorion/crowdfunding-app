import { render } from '@redwoodjs/testing/web'

import StartupHomePage from './StartupHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupHomePage />)
    }).not.toThrow()
  })
})
