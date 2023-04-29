import { render } from '@redwoodjs/testing/web'

import StartupMyConversationsPage from './StartupMyConversationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupMyConversationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMyConversationsPage />)
    }).not.toThrow()
  })
})
