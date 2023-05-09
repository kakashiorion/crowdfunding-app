import { render } from '@redwoodjs/testing/web'

import StartupMarket from './StartupMarket'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupMarket', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMarket />)
    }).not.toThrow()
  })
})
