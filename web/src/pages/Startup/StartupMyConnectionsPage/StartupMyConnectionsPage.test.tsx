import { render } from '@redwoodjs/testing/web'

import StartupMyConnectionsPage from './StartupMyConnectionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupMyConnectionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMyConnectionsPage />)
    }).not.toThrow()
  })
})
