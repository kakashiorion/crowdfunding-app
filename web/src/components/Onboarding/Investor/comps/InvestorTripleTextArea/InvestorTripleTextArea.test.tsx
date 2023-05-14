import { render } from '@redwoodjs/testing/web'

import InvestorTripleTextArea from './InvestorTripleTextArea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorTripleTextArea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorTripleTextArea />)
    }).not.toThrow()
  })
})
