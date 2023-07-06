import SearchIcon from 'public/icons/search.svg'
import UpIcon from 'public/icons/up.svg'

import {
  MenuExpandDivClassName,
  MenuIconClassName,
  UpIconClassName,
} from 'src/components/Investor/InvestorConsts'

type InvestorSearchBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const InvestorSearchBar = (props: InvestorSearchBarProps) => {
  return (
    <>
      {props.isMenuOpen == 'Search' ? (
        <>
          <UpIcon
            className={UpIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorSearchMenu />
        </>
      ) : (
        <SearchIcon
          className={MenuIconClassName}
          onClick={() => props.setMenuOpen('Search')}
        />
      )}
    </>
  )
}
export default InvestorSearchBar

const InvestorSearchMenu = () => {
  return (
    <div className={MenuExpandDivClassName}>
      <SearchInput />
      <SearchResults />
    </div>
  )
}

const SearchInput = () => {
  return (
    <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-9"></div>
  )
}

const SearchResults = () => {
  return (
    <div className="h-10 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-11"></div>
  )
}
