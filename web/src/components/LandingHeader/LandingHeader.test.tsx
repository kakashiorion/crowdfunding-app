import { render } from '@redwoodjs/testing/web'

import LandingHeader from './LandingHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingHeader />)
    }).not.toThrow()
  })
})
