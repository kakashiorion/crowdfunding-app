import { render } from '@redwoodjs/testing/web'

import StartupExplorePage from './StartupExplorePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupExplorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupExplorePage />)
    }).not.toThrow()
  })
})
