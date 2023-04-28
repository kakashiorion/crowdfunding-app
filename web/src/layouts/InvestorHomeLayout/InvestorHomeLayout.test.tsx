import { render } from '@redwoodjs/testing/web'

import InvestorHomeLayout from './InvestorHomeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorHomeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorHomeLayout />)
    }).not.toThrow()
  })
})
