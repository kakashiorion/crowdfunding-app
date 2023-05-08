import { render } from '@redwoodjs/testing/web'

import InvestorObjective from './InvestorObjective'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorObjective', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorObjective />)
    }).not.toThrow()
  })
})
