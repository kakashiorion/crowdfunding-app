import { render } from '@redwoodjs/testing/web'

import InvestorHomePage from './InvestorHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorHomePage />)
    }).not.toThrow()
  })
})
