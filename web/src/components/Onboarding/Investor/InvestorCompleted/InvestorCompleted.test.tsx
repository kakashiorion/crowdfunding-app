import { render } from '@redwoodjs/testing/web'

import InvestorCompleted from './InvestorCompleted'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorCompleted', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorCompleted />)
    }).not.toThrow()
  })
})
