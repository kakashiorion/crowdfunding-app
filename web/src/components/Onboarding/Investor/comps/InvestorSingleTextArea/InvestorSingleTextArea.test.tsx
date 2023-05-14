import { render } from '@redwoodjs/testing/web'

import InvestorSingleTextArea from './InvestorSingleTextArea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorSingleTextArea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorSingleTextArea />)
    }).not.toThrow()
  })
})
