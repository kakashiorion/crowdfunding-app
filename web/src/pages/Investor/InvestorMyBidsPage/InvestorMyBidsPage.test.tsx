import { render } from '@redwoodjs/testing/web'

import InvestorMyBidsPage from './InvestorMyBidsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorMyBidsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorMyBidsPage />)
    }).not.toThrow()
  })
})
