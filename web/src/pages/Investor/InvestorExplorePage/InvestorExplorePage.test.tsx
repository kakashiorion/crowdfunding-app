import { render } from '@redwoodjs/testing/web'

import InvestorExplorePage from './InvestorExplorePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorExplorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorExplorePage />)
    }).not.toThrow()
  })
})
