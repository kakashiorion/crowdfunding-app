import { useContext } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import SvgConnection from 'src/components/Icon/Connection'
import SvgConversation from 'src/components/Icon/Conversation'
import SvgDiamond from 'src/components/Icon/Diamond'
import SvgExplore from 'src/components/Icon/Explore'
import SvgHome from 'src/components/Icon/Home'
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
      className={`fixed left-4 top-10 ${
        props.isMenuOpen == 'Main' ? 'flex' : 'hidden'
      } z-10 shrink-0 flex-col items-center justify-start gap-4 rounded bg-white-d2/95 p-2 shadow-sm dark:bg-black-l2/95 lg:static lg:flex lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent`}
    >
      <InvestorNavigationItem
        icon={SvgHome}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorHome())
        }}
        selected={'Home' == pageSelected}
      />
      <InvestorNavigationItem
        icon={SvgDiamond}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorOffers())
        }}
        selected={'Offers' == pageSelected}
      />
      <InvestorNavigationItem
        icon={SvgConnection}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorMyConnections())
        }}
        selected={'Connections' == pageSelected}
      />
      <InvestorNavigationItem
        icon={SvgConversation}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorMyConversations())
        }}
        selected={'Conversations' == pageSelected}
      />
      <InvestorNavigationItem
        icon={SvgExplore}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.investorExplore())
        }}
        selected={'Explore' == pageSelected}
      />
    </div>
  )
}

export default InvestorNavigationMenu
