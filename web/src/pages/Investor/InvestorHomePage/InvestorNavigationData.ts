import BidIcon from 'public/icons/bid.svg'
import ConnectionIcon from 'public/icons/connection.svg'
import ConversationIcon from 'public/icons/conversation.svg'
import ExploreIcon from 'public/icons/explore.svg'
import HelpIcon from 'public/icons/help.svg'
import HomeIcon from 'public/icons/home.svg'
import LogoutIcon from 'public/icons/logout.svg'
import ProfileIcon from 'public/icons/profile.svg'

import { routes } from '@redwoodjs/router'

export const InvestorMainNavigationList = [
  {
    icon: HomeIcon,
    label: 'Home',
    route: routes.investorHome,
  },
  {
    icon: BidIcon,
    label: 'Bids',
    route: routes.investorMyBids,
  },
  {
    icon: ConnectionIcon,
    label: 'Connections',
    route: routes.investorMyConnections,
  },
  {
    icon: ConversationIcon,
    label: 'Conversations',
    route: routes.investorMyConversations,
  },
  {
    icon: ExploreIcon,
    label: 'Explore',
    route: routes.investorExplore,
  },
]

export const InvestorSupportNavigationList = [
  {
    icon: HelpIcon,
    label: 'Help',
    route: routes.investorHelp,
  },
  {
    icon: ProfileIcon,
    label: 'Profile',
    route: routes.investorMyProfile,
  },
  {
    icon: LogoutIcon,
    label: 'Logout',
    // route: '',
  },
]
