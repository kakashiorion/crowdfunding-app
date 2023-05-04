import { render } from '@redwoodjs/testing/web'

import Label from './Label'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Label', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Label />)
    }).not.toThrow()
  })
})
