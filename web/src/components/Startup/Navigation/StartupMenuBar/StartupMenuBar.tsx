import { useState } from 'react'

import MenuIcon from 'public/icons/menu.svg'
import UpIcon from 'public/icons/up.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'

import StartupNavigationMenu from 'src/components/Startup/Navigation/StartupNavigationMenu/StartupNavigationMenu'
import StartupNotificationBar from 'src/components/Startup/Navigation/StartupNotificationBar/StartupNotificationBar'
import StartupProfileBar from 'src/components/Startup/Navigation/StartupProfileBar/StartupProfileBar'
import StartupSearchBar from 'src/components/Startup/Navigation/StartupSearchBar/StartupSearchBar'

const StartupMenuBar = () => {
  const [isMenuOpen, setMenuOpen] = useState('None')
  return (
    <div className="sticky left-0 top-0 z-10 flex w-full items-center justify-between gap-4 py-3">
      <div className="flex items-center justify-start gap-3">
        {isMenuOpen == 'Main' ? (
          <button
            onClick={() => setMenuOpen('None')}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-white-d2 bg-white-d2 fill-tertiary-d1 dark:border-black-l2 dark:bg-black-l2 dark:fill-tertiary-l1 lg:hidden"
          >
            <UpIcon className={'flex h-6 w-6 lg:hidden'} />
          </button>
        ) : (
          <button
            onClick={() => setMenuOpen('Main')}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-white-d2 fill-black hover:fill-tertiary-d1 dark:border-black-l2 dark:fill-white dark:hover:fill-tertiary-l1 lg:hidden"
          >
            <MenuIcon className={'flex h-6 w-6 lg:hidden'} />
          </button>
        )}
        <LogoBlack
          className="flex h-7 w-12 cursor-pointer content-start dark:hidden lg:h-8 lg:w-13"
          onClick={() => navigate(routes.startupHome())}
        />
        <LogoWhite
          className="hidden h-7 w-12 cursor-pointer content-start dark:flex lg:h-8 lg:w-13"
          onClick={() => navigate(routes.startupHome())}
        />
      </div>
      <StartupNavigationMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex items-center justify-end gap-4 lg:gap-6">
        <StartupSearchBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <StartupNotificationBar
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
        />
        <StartupProfileBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  )
}
export default StartupMenuBar
