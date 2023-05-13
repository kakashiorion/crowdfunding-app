import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'
import MenuIcon from 'public/icons/menu.svg'
import NotificationIcon from 'public/icons/notification.svg'
import SearchIcon from 'public/icons/search.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'

import NotificationBar from 'src/components/Investor/Navigation/NotificationBar/NotificationBar'
import SearchBar from 'src/components/Investor/Navigation/SearchBar/SearchBar'

type InvestorTopBarProps = {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const InvestorTopBar = (props: InvestorTopBarProps) => {
  return (
    <div className="sticky left-0 top-0 z-10 flex w-full items-center justify-between gap-4 border-b-[1px] border-b-white-d2 py-3 dark:border-b-black-l3 ">
      <div className="flex items-center justify-start gap-4">
        {props.isMenuOpen ? (
          <>
            <CloseIcon
              className="flex h-5 w-5 fill-primary dark:fill-primary-l1  lg:hidden"
              onClick={() => props.setMenuOpen(false)}
            />
          </>
        ) : (
          <MenuIcon
            className="flex h-5 w-5 fill-black dark:fill-white lg:hidden"
            onClick={() => props.setMenuOpen(true)}
          />
        )}
        <LogoBlack
          className="flex h-6 w-10 content-start dark:hidden"
          onClick={() => navigate(routes.investorHome())}
        />
        <LogoWhite
          className="hidden h-6 w-10 content-start dark:flex"
          onClick={() => navigate(routes.investorHome())}
        />
      </div>
      <div className="flex w-full items-center justify-end gap-4 ">
        <ExpandableSearch />
        <Notification />
      </div>
    </div>
  )
}

export default InvestorTopBar

const ExpandableSearch = () => {
  const [isSearchOpen, setSearchOpen] = useState(false)
  return (
    <>
      {isSearchOpen ? (
        <>
          <CloseIcon
            className="flex h-5 w-5 fill-primary dark:fill-primary-l1"
            onClick={() => setSearchOpen(false)}
          />
          <SearchBar />
        </>
      ) : (
        <SearchIcon
          className="flex h-5 w-5 fill-black dark:fill-white"
          onClick={() => setSearchOpen(true)}
        />
      )}
    </>
  )
}

const Notification = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false)
  return (
    <>
      {isNotificationOpen ? (
        <>
          <CloseIcon
            className="flex h-5 w-5 fill-primary dark:fill-primary-l1 "
            onClick={() => setNotificationOpen(false)}
          />
          <NotificationBar />
        </>
      ) : (
        <NotificationIcon
          className="flex h-5 w-5 fill-black dark:fill-white "
          onClick={() => setNotificationOpen(true)}
        />
      )}
    </>
  )
}
