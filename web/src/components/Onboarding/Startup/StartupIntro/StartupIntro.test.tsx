import { render } from '@redwoodjs/testing/web'

import StartupIntro from './StartupIntro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupIntro />)
    }).not.toThrow()
  })
})
