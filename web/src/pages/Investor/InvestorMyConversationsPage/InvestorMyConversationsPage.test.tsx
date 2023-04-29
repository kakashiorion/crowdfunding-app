import { render } from '@redwoodjs/testing/web'

import InvestorMyConversationsPage from './InvestorMyConversationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorMyConversationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorMyConversationsPage />)
    }).not.toThrow()
  })
})
