import { render } from '@redwoodjs/testing/web'

import InvestorMyConnectionsPage from './InvestorMyConnectionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorMyConnectionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestorMyConnectionsPage />)
    }).not.toThrow()
  })
})
