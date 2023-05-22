import { render } from '@redwoodjs/testing/web'

import StartupCreateOfferPage from './StartupCreateOfferPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupCreateOfferPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupCreateOfferPage />)
    }).not.toThrow()
  })
})
