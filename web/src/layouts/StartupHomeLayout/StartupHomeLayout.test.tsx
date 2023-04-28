import { render } from '@redwoodjs/testing/web'

import StartupHomeLayout from './StartupHomeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupHomeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupHomeLayout />)
    }).not.toThrow()
  })
})
