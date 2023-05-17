import { render } from '@redwoodjs/testing/web'

import StartupNotificationBar from './StartupNotificationBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupNotificationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupNotificationBar />)
    }).not.toThrow()
  })
})
