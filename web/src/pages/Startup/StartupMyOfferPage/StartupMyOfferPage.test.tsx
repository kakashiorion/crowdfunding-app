import { render } from '@redwoodjs/testing/web'

import StartupMyOfferPage from './StartupMyOfferPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupMyOfferPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMyOfferPage />)
    }).not.toThrow()
  })
})
