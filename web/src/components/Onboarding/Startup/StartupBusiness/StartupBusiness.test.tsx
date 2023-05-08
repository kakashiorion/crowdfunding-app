import { render } from '@redwoodjs/testing/web'

import StartupBusiness from './StartupBusiness'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupBusiness', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupBusiness />)
    }).not.toThrow()
  })
})
