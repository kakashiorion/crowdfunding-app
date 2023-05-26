import { useContext } from 'react'

import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'
import UpIcon from 'public/icons/up.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { SubTextLabel } from 'src/components/Label/Label'
import {
  profileMenuItemClassName,
  upIconClassName,
} from 'src/components/Startup/Navigation/StartupNavigationConsts'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

type StartupProfileBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const StartupProfileBar = (props: StartupProfileBarProps) => {
  const { currentUser } = useAuth()
  return (
    <>
      {props.isMenuOpen == 'Profile' ? (
        <>
          <UpIcon
            className={upIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <StartupProfileMenu
            isMenuOpen={props.isMenuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        </>
      ) : (
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full bg-black-l1 text-b3 text-white hover:bg-tertiary-d1 dark:bg-white-d1 dark:text-black dark:hover:bg-tertiary-l1 lg:h-7 lg:w-7 lg:text-b2"
          onClick={() => props.setMenuOpen('Profile')}
        >
          {currentUser?.email[0].toUpperCase()}
        </button>
      )}
    </>
  )
}
export default StartupProfileBar

const StartupProfileMenu = (props: StartupProfileBarProps) => {
  const { logOut } = useAuth()
  const { setPageSelected } = useContext(StartupPageContext)
  return (
    <div className="absolute right-0 top-10 z-10 flex flex-col items-center gap-2 rounded bg-white-d2/95 p-2 dark:bg-black-l2/95">
      <button
        onClick={() => {
          navigate(routes.startupMyProfile())
          props.setMenuOpen('None')
          setPageSelected('Profile')
        }}
        className={profileMenuItemClassName}
      >
        <ProfileIcon className="flex h-6 w-6 fill-black dark:fill-white lg:h-7 lg:w-7" />
        <SubTextLabel label="Profile" />
      </button>
      <button onClick={() => logOut()} className={profileMenuItemClassName}>
        <LogoutIcon className="flex h-6 w-6 fill-error-d1 dark:fill-error-l1 lg:h-7 lg:w-7" />
        <SubTextLabel label="Logout" />
      </button>
    </div>
  )
}
