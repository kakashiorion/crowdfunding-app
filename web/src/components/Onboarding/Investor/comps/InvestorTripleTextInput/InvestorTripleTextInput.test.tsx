import { render } from '@redwoodjs/testing/web'

import InvestorTripleTextInput from './InvestorTripleTextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorTripleTextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorTripleTextInput />)
    }).not.toThrow()
  })
})
