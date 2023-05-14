import { render } from '@redwoodjs/testing/web'

import InvestorSingleTextInput from './InvestorSingleTextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorSingleTextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorSingleTextInput />)
    }).not.toThrow()
  })
})
