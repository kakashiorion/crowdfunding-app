import { render } from '@redwoodjs/testing/web'

import StartupNavigationItem from './StartupNavigationItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupNavigationItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupNavigationItem />)
    }).not.toThrow()
  })
})
