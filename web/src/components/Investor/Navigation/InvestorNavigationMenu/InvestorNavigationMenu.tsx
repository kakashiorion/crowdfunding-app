import { useContext } from 'react'

import BidIcon from 'public/icons/bid.svg'
import ConnectionIcon from 'public/icons/connection.svg'
import ConversationIcon from 'public/icons/conversation.svg'
import ExploreIcon from 'public/icons/explore.svg'
import HelpIcon from 'public/icons/help.svg'
import HomeIcon from 'public/icons/home.svg'

import { navigate, routes } from '@redwoodjs/router'

import InvestorNavigationItem from 'src/components/Investor/Navigation/InvestorNavigationItem/InvestorNavigationItem'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

type InvestorNavigationMenuProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}

const InvestorNavigationMenu = (props: InvestorNavigationMenuProps) => {
  const { pageSelected } = useContext(InvestorPageContext)
  return (
    <div
      className={`fixed left-4 top-9 ${
        props.isMenuOpen == 'Main' ? 'flex' : 'hidden'
      } z-10 shrink-0 flex-col items-center justify-start gap-4 rounded bg-white-d2/95 p-2 shadow-sm dark:bg-black-l3/95 lg:static lg:flex lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent`}
    >
      <InvestorNavigationItem
        icon={HomeIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorHome())
        }}
        selected={'Home' == pageSelected}
      />
      <InvestorNavigationItem
        icon={BidIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorMyBids())
        }}
        selected={'Bids' == pageSelected}
      />
      <InvestorNavigationItem
        icon={ConnectionIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorMyConnections())
        }}
        selected={'Connections' == pageSelected}
      />
      <InvestorNavigationItem
        icon={ConversationIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorMyConversations())
        }}
        selected={'Conversations' == pageSelected}
      />
      <InvestorNavigationItem
        icon={ExploreIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorExplore())
        }}
        selected={'Explore' == pageSelected}
      />
      <InvestorNavigationItem
        icon={HelpIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorHelp())
        }}
        selected={'Help' == pageSelected}
      />
    </div>
  )
}

export default InvestorNavigationMenu
