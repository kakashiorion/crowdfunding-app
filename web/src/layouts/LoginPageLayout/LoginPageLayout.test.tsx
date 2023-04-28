import { render } from '@redwoodjs/testing/web'

import LoginPageLayout from './LoginPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPageLayout />)
    }).not.toThrow()
  })
})
