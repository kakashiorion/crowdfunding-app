import { useContext } from 'react'

import HelpIcon from 'public/icons/help.svg'
import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'
import UpIcon from 'public/icons/up.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import {
  ProfileMenuItemClassName,
  ProfileMenuSelectedItemClassName,
  ProfileUpIconClassName,
} from 'src/components/Investor/InvestorConsts'
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
            className={ProfileUpIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorProfileMenu
            isMenuOpen={props.isMenuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        </>
      ) : (
        <button
          className="flex h-8 w-8 items-center justify-center rounded bg-black-l1 text-b3 text-white hover:bg-primary-d1 dark:bg-white-d1 dark:text-black dark:hover:bg-primary-l1 lg:text-b2"
          onClick={() => props.setMenuOpen('Profile')}
        >
          {/* //TODO: apply profile pic as BG */}
          {currentUser?.email[0].toUpperCase()}
        </button>
      )}
    </>
  )
}
export default InvestorProfileBar

const InvestorProfileMenu = (props: InvestorProfileBarProps) => {
  const { logOut } = useAuth()
  const { pageSelected, setPageSelected } = useContext(InvestorPageContext)
  return (
    <div className="absolute right-0 top-10 z-10 flex flex-col items-center gap-2 rounded bg-white-d2/95 p-2 dark:bg-black-l2/95">
      <button
        onClick={() => {
          navigate(routes.investorMyProfile())
          props.setMenuOpen('None')
          setPageSelected('Profile')
        }}
        className={
          pageSelected == 'Profile'
            ? ProfileMenuSelectedItemClassName
            : ProfileMenuItemClassName
        }
      >
        <ProfileIcon className="flex h-5 w-5 fill-black dark:fill-white lg:h-6 lg:w-6" />
        <SubTextLabel label="Profile" />
      </button>
      <button
        onClick={() => {
          navigate(routes.investorHelp())
          props.setMenuOpen('None')
          setPageSelected('Help')
        }}
        className={
          pageSelected == 'Help'
            ? ProfileMenuSelectedItemClassName
            : ProfileMenuItemClassName
        }
      >
        <HelpIcon className="flex h-5 w-5 fill-black dark:fill-white lg:h-6 lg:w-6" />
        <SubTextLabel label="Help" />
      </button>
      <button onClick={() => logOut()} className={ProfileMenuItemClassName}>
        <LogoutIcon className="flex h-5 w-5 fill-error-d1 dark:fill-error-l1 lg:h-6 lg:w-6" />
        <SubTextLabel label="Logout" />
      </button>
    </div>
  )
}
