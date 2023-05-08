import { render } from '@redwoodjs/testing/web'

import InvestorExperience from './InvestorExperience'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorExperience', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorExperience />)
    }).not.toThrow()
  })
})
