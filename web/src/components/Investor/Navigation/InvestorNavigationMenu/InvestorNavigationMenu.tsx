import { useContext } from 'react'

import BidIcon from 'public/icons/bid.svg'
import ConnectionIcon from 'public/icons/connection.svg'
import ConversationIcon from 'public/icons/conversation.svg'
import ExploreIcon from 'public/icons/explore.svg'
import HelpIcon from 'public/icons/help.svg'
import HomeIcon from 'public/icons/home.svg'
import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { MenuOpenContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

import InvestorNavigationItem from '../InvestorNavigationItem/InvestorNavigationItem'

type InvestorNavigationMenuProps = {
  selectedPage?: string
}

const InvestorNavigationMenu = (props: InvestorNavigationMenuProps) => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuOpenContext)
  const { logOut } = useAuth()

  return (
    <div
      className={`fixed left-4 top-9 ${
        isMenuOpen ? 'flex' : 'hidden'
      } z-10 shrink-0 flex-col items-center justify-start gap-4 overflow-hidden rounded-sm bg-white-d1/90 p-2 dark:bg-black-l2/90 lg:static lg:flex lg:justify-between lg:p-3`}
    >
      <div className="flex flex-col items-start justify-start gap-4">
        <InvestorNavigationItem
          icon={HomeIcon}
          label={'Home'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorHome())
          }}
          selected={'Home' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={BidIcon}
          label={'Bids'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorMyBids())
          }}
          selected={'Bids' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={ConnectionIcon}
          label={'Connections'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorMyConnections())
          }}
          selected={'Connections' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={ConversationIcon}
          label={'Conversations'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorMyConversations())
          }}
          selected={'Conversations' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={ExploreIcon}
          label={'Explore'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorExplore())
          }}
          selected={'Explore' == props.selectedPage}
        />
      </div>
      <div className="flex h-[2px] w-full bg-black-l3 dark:bg-white-d2 lg:hidden xl:bg-white-d2 xl:dark:bg-black-l3 "></div>
      <div className="flex w-full flex-col items-start justify-start gap-4 ">
        <InvestorNavigationItem
          icon={HelpIcon}
          label={'Help'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.investorHelp())
          }}
          selected={'Help' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={ProfileIcon}
          label={'Profile'}
          action={() => {
            setMenuOpen(false)
            navigate(routes.myInvestorProfile())
          }}
          selected={'Profile' == props.selectedPage}
        />
        <InvestorNavigationItem
          icon={LogoutIcon}
          label={'Logout'}
          action={() => {
            setMenuOpen(false)
            logOut()
          }}
          selected={'Logout' == props.selectedPage}
        />
      </div>
    </div>
  )
}
export default InvestorNavigationMenu

//TODO: Logout modal
// const askLogout = () => {}
