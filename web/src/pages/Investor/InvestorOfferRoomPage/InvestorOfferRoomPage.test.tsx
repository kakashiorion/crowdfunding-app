import { render } from '@redwoodjs/testing/web'

import InvestorOfferRoomPage from './InvestorOfferRoomPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorOfferRoomPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorOfferRoomPage />)
    }).not.toThrow()
  })
})
