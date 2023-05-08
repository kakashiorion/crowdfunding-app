import { render } from '@redwoodjs/testing/web'

import StartupFinancials from './StartupFinancials'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupFinancials', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupFinancials />)
    }).not.toThrow()
  })
})
