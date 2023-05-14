import { render } from '@redwoodjs/testing/web'

import PrimaryProgressIndicator from './ProgressIndicator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProgressIndicator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimaryProgressIndicator />)
    }).not.toThrow()
  })
})
