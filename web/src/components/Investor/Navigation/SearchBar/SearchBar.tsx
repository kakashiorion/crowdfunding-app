import { useState } from 'react'

import SearchIcon from 'public/icons/search.svg'

import { PrimaryTextLabel } from 'src/components/Label/Label'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="absolute right-0 top-9 z-10 flex max-w-full flex-col items-center gap-2 rounded bg-white-d1/95 px-2 py-2 dark:bg-white-d3/95 lg:min-w-[480px] ">
      <div className="flex w-full items-center justify-start gap-2">
        <SearchIcon className="flex h-5 w-5 fill-black-l4 " />
        <input
          value={searchTerm}
          type={'text'}
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          className={
            'w-full appearance-none bg-transparent text-left text-b2 text-primary placeholder:text-black-l4 focus:outline-none '
          }
        ></input>
      </div>
      <hr className="h-[1px] w-full bg-black-l4 "></hr>
      {SampleResults.map((r) => (
        <div
          className="my-1 flex w-full appearance-none items-center gap-2 bg-transparent focus:outline-none "
          key={r}
        >
          <SearchIcon className="flex h-4 w-4 fill-black-l4" />
          <PrimaryTextLabel label={r} />
        </div>
      ))}
    </div>
  )
}
export default SearchBar

//TODO: get search results from DB
const SampleResults = ['Result 1', 'Result 2', 'Result 3', 'Result 4']
