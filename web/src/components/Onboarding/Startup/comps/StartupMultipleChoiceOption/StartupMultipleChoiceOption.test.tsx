import { render } from '@redwoodjs/testing/web'

import StartupMultipleChoiceOption from './StartupMultipleChoiceOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupMultipleChoiceOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupMultipleChoiceOption />)
    }).not.toThrow()
  })
})
