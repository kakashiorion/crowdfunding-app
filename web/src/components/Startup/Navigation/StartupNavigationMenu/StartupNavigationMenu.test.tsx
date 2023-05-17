import { render } from '@redwoodjs/testing/web'

import StartupNavigationMenu from './StartupNavigationMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupNavigationMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupNavigationMenu />)
    }).not.toThrow()
  })
})
