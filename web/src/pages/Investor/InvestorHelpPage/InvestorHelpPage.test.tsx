import { render } from '@redwoodjs/testing/web'

import InvestorHelpPage from './InvestorHelpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorHelpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorHelpPage />)
    }).not.toThrow()
  })
})
