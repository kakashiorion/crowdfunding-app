import { render } from '@redwoodjs/testing/web'

import ProfileMenuBar from './ProfileMenuBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileMenuBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileMenuBar />)
    }).not.toThrow()
  })
})
