import HelpIcon from 'public/icons/help.svg'
import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'

import { navigate, routes } from '@redwoodjs/router'

type ProfileMenuBarProps = {
  setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ProfileMenuBar = (props: ProfileMenuBarProps) => {
  const className =
    'absolute z-10 lg:hidden right-4 top-9 flex flex-col items-center justify-start gap-5 rounded bg-white-d1/95 p-4 dark:bg-black-l2/95 '

  return (
    <div className={className}>
      <InvestorSupportNavigationItem
        icon={HelpIcon}
        label={'Help'}
        action={() => {
          props.setProfileOpen(false)
          navigate(routes.investorHelp())
        }}
      />
      <InvestorSupportNavigationItem
        icon={ProfileIcon}
        label={'Profile'}
        action={() => {
          props.setProfileOpen(false)
          navigate(routes.myInvestorProfile())
        }}
      />
      <InvestorSupportNavigationItem
        icon={LogoutIcon}
        label={'Logout'}
        action={() => {
          props.setProfileOpen(false)
          askLogout()
        }}
      />
    </div>
  )
}

//TODO: Logout modal
const askLogout = () => {}

export default ProfileMenuBar

type InvestorSupportNavigationItemProps = {
  action: () => void
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
}
const InvestorSupportNavigationItem = (
  props: InvestorSupportNavigationItemProps
) => {
  return (
    <button
      className={`flex w-full items-center justify-start gap-3 rounded py-2`}
      onClick={props.action}
    >
      <props.icon className={`h-5 w-5 fill-black dark:fill-white`} />
      <p className={`flex text-b2 text-black dark:text-white lg:hidden `}>
        {props.label}
      </p>
    </button>
  )
}
