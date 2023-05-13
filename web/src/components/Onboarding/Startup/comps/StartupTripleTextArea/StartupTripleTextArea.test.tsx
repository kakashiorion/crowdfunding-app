import { render } from '@redwoodjs/testing/web'

import StartupTripleTextArea from './StartupTripleTextArea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupTripleTextArea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupTripleTextArea />)
    }).not.toThrow()
  })
})
