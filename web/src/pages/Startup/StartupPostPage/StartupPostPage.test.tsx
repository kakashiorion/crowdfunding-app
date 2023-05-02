import { render } from '@redwoodjs/testing/web'

import StartupPostPage from './StartupPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupPostPage />)
    }).not.toThrow()
  })
})
