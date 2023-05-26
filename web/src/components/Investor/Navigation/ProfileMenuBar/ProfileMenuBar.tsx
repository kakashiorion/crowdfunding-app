import { useContext } from 'react'

import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'
import UpIcon from 'public/icons/up.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import {
  profileMenuItemClassName,
  upIconClassName,
} from 'src/components/Investor/Navigation/InvestorNavigationConsts'
import { SubTextLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

type InvestorProfileBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const InvestorProfileBar = (props: InvestorProfileBarProps) => {
  const { currentUser } = useAuth()
  return (
    <>
      {props.isMenuOpen == 'Profile' ? (
        <>
          <UpIcon
            className={upIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorProfileMenu
            isMenuOpen={props.isMenuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        </>
      ) : (
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full bg-black-l1 text-b3 text-white hover:bg-primary-d1 dark:bg-white-d1 dark:text-black dark:hover:bg-primary-l1 lg:h-7 lg:w-7 lg:text-b2"
          onClick={() => props.setMenuOpen('Profile')}
        >
          {currentUser?.email[0].toUpperCase()}
        </button>
      )}
    </>
  )
}
export default InvestorProfileBar

const InvestorProfileMenu = (props: InvestorProfileBarProps) => {
  const { logOut } = useAuth()
  const { setPageSelected } = useContext(InvestorPageContext)
  return (
    <div className="absolute right-0 top-10 z-10 flex flex-col items-center gap-2 rounded bg-white-d2/95 p-2 dark:bg-black-l2/95">
      <button
        onClick={() => {
          navigate(routes.myInvestorProfile())
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
