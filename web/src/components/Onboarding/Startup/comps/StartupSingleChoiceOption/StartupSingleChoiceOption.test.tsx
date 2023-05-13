import { render } from '@redwoodjs/testing/web'

import StartupSingleChoiceOption from './StartupSingleChoiceOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupSingleChoiceOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupSingleChoiceOption />)
    }).not.toThrow()
  })
})
