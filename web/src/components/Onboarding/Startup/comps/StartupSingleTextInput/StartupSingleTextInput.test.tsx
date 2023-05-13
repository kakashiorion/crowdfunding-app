import { render } from '@redwoodjs/testing/web'

import StartupSingleTextInput from './StartupSingleTextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupSingleTextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupSingleTextInput />)
    }).not.toThrow()
  })
})
