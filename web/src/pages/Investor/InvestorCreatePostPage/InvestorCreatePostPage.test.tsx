import { render } from '@redwoodjs/testing/web'

import InvestorCreatePostPage from './InvestorCreatePostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorCreatePostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorCreatePostPage />)
    }).not.toThrow()
  })
})
