import { render } from '@redwoodjs/testing/web'

import SearchBar from './SearchBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchBar />)
    }).not.toThrow()
  })
})
