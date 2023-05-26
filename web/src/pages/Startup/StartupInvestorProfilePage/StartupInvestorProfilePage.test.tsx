import { render } from '@redwoodjs/testing/web'

import StartupInvestorProfilePage from './StartupInvestorProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestorProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupInvestorProfilePage />)
    }).not.toThrow()
  })
})
