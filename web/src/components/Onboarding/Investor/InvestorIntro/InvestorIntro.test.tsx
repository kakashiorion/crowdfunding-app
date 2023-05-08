import { render } from '@redwoodjs/testing/web'

import InvestorIntro from './InvestorIntro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvestorIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorIntro />)
    }).not.toThrow()
  })
})
