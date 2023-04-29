import { render } from '@redwoodjs/testing/web'

import MyInvestorProfilePage from './MyInvestorProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyInvestorProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyInvestorProfilePage />)
    }).not.toThrow()
  })
})
