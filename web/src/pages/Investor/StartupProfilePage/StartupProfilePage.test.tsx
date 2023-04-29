import { render } from '@redwoodjs/testing/web'

import StartupProfilePage from './StartupProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupProfilePage />)
    }).not.toThrow()
  })
})
