import { render } from '@redwoodjs/testing/web'

import InvestorOffersPage from './InvestorOffersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorOffersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOffersPage />)
    }).not.toThrow()
  })
})
