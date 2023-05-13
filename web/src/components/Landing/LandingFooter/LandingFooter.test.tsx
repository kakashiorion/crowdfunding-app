import { render } from '@redwoodjs/testing/web'

import LandingFooter from './LandingFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingFooter />)
    }).not.toThrow()
  })
})
