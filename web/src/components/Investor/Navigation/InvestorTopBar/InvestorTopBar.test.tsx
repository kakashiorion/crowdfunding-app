import { render } from '@redwoodjs/testing/web'

import InvestorTopBar from './InvestorTopBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorTopBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorTopBar />)
    }).not.toThrow()
  })
})
