import { render } from '@redwoodjs/testing/web'

import InvestorPostPage from './InvestorPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorPostPage />)
    }).not.toThrow()
  })
})
