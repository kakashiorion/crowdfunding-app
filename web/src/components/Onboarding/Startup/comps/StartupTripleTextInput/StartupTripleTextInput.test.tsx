import { render } from '@redwoodjs/testing/web'

import StartupTripleTextInput from './StartupTripleTextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupTripleTextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupTripleTextInput />)
    }).not.toThrow()
  })
})
