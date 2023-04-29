import { render } from '@redwoodjs/testing/web'

import StartupHelpPage from './StartupHelpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupHelpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupHelpPage />)
    }).not.toThrow()
  })
})
