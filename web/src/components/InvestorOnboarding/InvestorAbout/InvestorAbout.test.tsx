import { render } from '@redwoodjs/testing/web'

import InvestorAbout from './InvestorAbout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorAbout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorAbout />)
    }).not.toThrow()
  })
})
