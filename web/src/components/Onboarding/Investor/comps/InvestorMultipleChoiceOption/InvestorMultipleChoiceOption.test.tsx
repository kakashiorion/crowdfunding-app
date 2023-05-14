import { render } from '@redwoodjs/testing/web'

import InvestorMultipleChoiceOption from './InvestorMultipleChoiceOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorMultipleChoiceOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorMultipleChoiceOption />)
    }).not.toThrow()
  })
})
