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
      <div className="flex items-center justify-start gap-4">
        {isMenuOpen == 'Main' ? (
          <>
            <UpIcon
              className={
                'flex h-6 w-6 cursor-pointer fill-tertiary-d1 dark:fill-tertiary-l1 lg:hidden lg:h-7 lg:w-7'
              }
              onClick={() => setMenuOpen('None')}
            />
          </>
        ) : (
          <MenuIcon
            className={
              'flex h-6 w-6 cursor-pointer fill-black hover:fill-tertiary-d1 dark:fill-white dark:hover:fill-tertiary-l1 lg:hidden lg:h-7 lg:w-7'
            }
            onClick={() => setMenuOpen('Main')}
          />
        )}
        <LogoBlack
          className="flex h-6 w-11 cursor-pointer content-start dark:hidden lg:h-7 lg:w-12"
          onClick={() => navigate(routes.startupHome())}
        />
        <LogoWhite
          className="hidden h-6 w-11 cursor-pointer content-start dark:flex lg:h-7 lg:w-12"
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
