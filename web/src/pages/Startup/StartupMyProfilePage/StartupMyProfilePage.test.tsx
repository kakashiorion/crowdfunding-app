import { render } from '@redwoodjs/testing/web'

import StartupMyProfilePage from './StartupMyProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupMyProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMyProfilePage />)
    }).not.toThrow()
  })
})
