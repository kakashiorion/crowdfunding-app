import { render } from '@redwoodjs/testing/web'

import OtherInvestorProfilePage from './OtherInvestorProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OtherInvestorProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OtherInvestorProfilePage />)
    }).not.toThrow()
  })
})
