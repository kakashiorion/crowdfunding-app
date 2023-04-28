import { render } from '@redwoodjs/testing/web'

import SignupPageLayout from './SignupPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignupPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPageLayout />)
    }).not.toThrow()
  })
})
