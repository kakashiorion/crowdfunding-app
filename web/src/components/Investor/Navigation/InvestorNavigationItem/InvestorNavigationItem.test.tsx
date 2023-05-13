import { render } from '@redwoodjs/testing/web'

import InvestorNavigationItem from './InvestorNavigationItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorNavigationItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorNavigationItem />)
    }).not.toThrow()
  })
})
