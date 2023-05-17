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
          className="flex h-5 w-5 rounded-full bg-black-l2 hover:bg-primary dark:bg-white-d1 dark:hover:bg-primary-l1"
          onClick={() => props.setMenuOpen('Profile')}
        />
      )}
    </>
  )
}
export default InvestorProfileBar

const InvestorProfileMenu = (props: InvestorProfileBarProps) => {
  const { logOut } = useAuth()
  const { setPageSelected } = useContext(InvestorPageContext)
  return (
    <div className="absolute right-0 top-9 z-10 flex flex-col items-center gap-2 rounded bg-white-d2/95 p-2 dark:bg-black-l3/95">
      <button
        onClick={() => {
          navigate(routes.myInvestorProfile())
          props.setMenuOpen('None')
          setPageSelected('Profile')
        }}
        className={profileMenuItemClassName}
      >
        <ProfileIcon className="flex h-5 w-5 fill-black dark:fill-white" />
        <SubTextLabel label="Profile" />
      </button>
      <button onClick={() => logOut()} className={profileMenuItemClassName}>
        <LogoutIcon className="flex h-5 w-5 fill-error dark:fill-error-l1" />
        <SubTextLabel label="Logout" />
      </button>
    </div>
  )
}
