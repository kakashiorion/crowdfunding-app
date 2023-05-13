import { render } from '@redwoodjs/testing/web'

import InvestorNavigationMenu from './InvestorNavigationMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorNavigationMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorNavigationMenu />)
    }).not.toThrow()
  })
})
