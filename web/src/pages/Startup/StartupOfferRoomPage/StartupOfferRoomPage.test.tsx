import { render } from '@redwoodjs/testing/web'

import StartupOfferRoomPage from './StartupOfferRoomPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupOfferRoomPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupOfferRoomPage />)
    }).not.toThrow()
  })
})
