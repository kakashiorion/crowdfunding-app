import { useContext } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import SvgConnection from 'src/components/Icon/Connection'
import SvgConversation from 'src/components/Icon/Conversation'
import SvgDiamond from 'src/components/Icon/Diamond'
import SvgExplore from 'src/components/Icon/Explore'
import SvgHome from 'src/components/Icon/Home'
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
      className={`fixed left-4 top-10 ${
        props.isMenuOpen == 'Main' ? 'flex' : 'hidden'
      } z-10 shrink-0 flex-col items-center justify-start gap-4 rounded bg-white-d2/95 p-2 shadow-sm dark:bg-black-l2/95 lg:static lg:flex lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent`}
    >
      <StartupNavigationItem
        icon={SvgHome}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupHome())
        }}
        selected={'Home' == pageSelected}
      />
      <StartupNavigationItem
        icon={SvgDiamond}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyOffer())
        }}
        selected={'Offer' == pageSelected}
      />
      <StartupNavigationItem
        icon={SvgConnection}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyConnections())
        }}
        selected={'Connections' == pageSelected}
      />
      <StartupNavigationItem
        icon={SvgConversation}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupMyConversations())
        }}
        selected={'Conversations' == pageSelected}
      />
      <StartupNavigationItem
        icon={SvgExplore}
        action={() => {
          props.setMenuOpen('None')
          navigate(routes.startupExplore())
        }}
        selected={'Explore' == pageSelected}
      />
    </div>
  )
}

export default StartupNavigationMenu
