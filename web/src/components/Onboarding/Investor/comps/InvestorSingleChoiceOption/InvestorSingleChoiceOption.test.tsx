import { render } from '@redwoodjs/testing/web'

import InvestorSingleChoiceOption from './InvestorSingleChoiceOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorSingleChoiceOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorSingleChoiceOption />)
    }).not.toThrow()
  })
})
