import { render } from '@redwoodjs/testing/web'

import InvestorProfilePage from './InvestorProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorProfilePage />)
    }).not.toThrow()
  })
})
