import { render } from '@redwoodjs/testing/web'

import StartupSingleTextArea from './StartupSingleTextArea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupSingleTextArea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupSingleTextArea />)
    }).not.toThrow()
  })
})
