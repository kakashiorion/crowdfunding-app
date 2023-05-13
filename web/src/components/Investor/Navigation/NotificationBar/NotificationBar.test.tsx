import { render } from '@redwoodjs/testing/web'

import NotificationBar from './NotificationBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationBar />)
    }).not.toThrow()
  })
})
