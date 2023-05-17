import SearchIcon from 'public/icons/search.svg'
import UpIcon from 'public/icons/up.svg'

import {
  menuExpandDivClassName,
  menuIconClassName,
  upIconClassName,
} from 'src/components/Startup/Navigation/StartupNavigationConsts'

type StartupSearchBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const StartupSearchBar = (props: StartupSearchBarProps) => {
  return (
    <>
      {props.isMenuOpen == 'Search' ? (
        <>
          <UpIcon
            className={upIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <StartupSearchMenu />
        </>
      ) : (
        <SearchIcon
          className={menuIconClassName}
          onClick={() => props.setMenuOpen('Search')}
        />
      )}
    </>
  )
}
export default StartupSearchBar

const StartupSearchMenu = () => {
  return (
    <div className={menuExpandDivClassName}>
      <SearchInput />
      <SearchResults />
    </div>
  )
}

const SearchInput = () => {
  return <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l2"></div>
}

const SearchResults = () => {
  return (
    <div className="h-10 w-full rounded bg-white-d1 dark:bg-black-l2"></div>
  )
}
