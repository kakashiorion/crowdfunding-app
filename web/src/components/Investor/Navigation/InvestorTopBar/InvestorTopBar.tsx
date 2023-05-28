import { useState } from 'react'

import MenuIcon from 'public/icons/menu.svg'
import UpIcon from 'public/icons/up.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'

import InvestorNavigationMenu from 'src/components/Investor/Navigation/InvestorNavigationMenu/InvestorNavigationMenu'
import InvestorNotificationBar from 'src/components/Investor/Navigation/NotificationBar/NotificationBar'
import InvestorProfileBar from 'src/components/Investor/Navigation/ProfileMenuBar/ProfileMenuBar'
import InvestorSearchBar from 'src/components/Investor/Navigation/SearchBar/SearchBar'

const InvestorTopBar = () => {
  const [isMenuOpen, setMenuOpen] = useState('None')
  return (
    <div className="sticky left-0 top-0 z-10 flex w-full items-center justify-between gap-4 py-2 lg:py-3">
      <div className="flex items-center justify-start gap-3">
        {isMenuOpen == 'Main' ? (
          <>
            <UpIcon
              className={
                'flex h-6 w-6 cursor-pointer fill-primary-d1 dark:fill-primary-l1 lg:hidden lg:h-7 lg:w-7'
              }
              onClick={() => setMenuOpen('None')}
            />
          </>
        ) : (
          <MenuIcon
            className={
              'flex h-6 w-6 cursor-pointer fill-black hover:fill-primary-d1 dark:fill-white dark:hover:fill-primary-l1 lg:hidden lg:h-7 lg:w-7'
            }
            onClick={() => setMenuOpen('Main')}
          />
        )}
        <LogoBlack
          className="flex h-6 w-11 cursor-pointer content-start dark:hidden lg:h-7 lg:w-12"
          onClick={() => {
            navigate(routes.investorHome())
          }}
        />
        <LogoWhite
          className="hidden h-6 w-11 cursor-pointer content-start dark:flex lg:h-7 lg:w-12"
          onClick={() => navigate(routes.investorHome())}
        />
      </div>
      <InvestorNavigationMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex items-center justify-end gap-4 lg:gap-6">
        <InvestorSearchBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <InvestorNotificationBar
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
        />
        <InvestorProfileBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  )
}
export default InvestorTopBar
