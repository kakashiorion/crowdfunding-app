import { useContext } from 'react'

import ConnectionIcon from 'public/icons/connection.svg'
import ConversationIcon from 'public/icons/conversation.svg'
import ExploreIcon from 'public/icons/explore.svg'
import HelpIcon from 'public/icons/help.svg'
import HomeIcon from 'public/icons/home.svg'
import OfferIcon from 'public/icons/offer.svg'

import { navigate, routes } from '@redwoodjs/router'

import StartupNavigationItem from 'src/components/Startup/Navigation/StartupNavigationItem/StartupNavigationItem'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

type StartupNavigationMenuProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}

const StartupNavigationMenu = (props: StartupNavigationMenuProps) => {
  const { pageSelected } = useContext(StartupPageContext)
  return (
    <div
      className={`fixed left-4 top-9 ${
        props.isMenuOpen == 'Main' ? 'flex' : 'hidden'
      } z-10 shrink-0 flex-col items-center justify-start gap-4 rounded bg-white-d2/95 p-2 shadow-sm dark:bg-black-l3/95 lg:static lg:flex lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent`}
    >
      <StartupNavigationItem
        icon={HomeIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupHome())
        }}
        selected={'Home' == pageSelected}
      />
      <StartupNavigationItem
        icon={OfferIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyOffer())
        }}
        selected={'Offer' == pageSelected}
      />
      <StartupNavigationItem
        icon={ConnectionIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyConnections())
        }}
        selected={'Connections' == pageSelected}
      />
      <StartupNavigationItem
        icon={ConversationIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyConversations())
        }}
        selected={'Conversations' == pageSelected}
      />
      <StartupNavigationItem
        icon={ExploreIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupExplore())
        }}
        selected={'Explore' == pageSelected}
      />
      <StartupNavigationItem
        icon={HelpIcon}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupHelp())
        }}
        selected={'Help' == pageSelected}
      />
    </div>
  )
}

export default StartupNavigationMenu
