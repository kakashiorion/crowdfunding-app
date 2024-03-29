import type {
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { LeadingIconBlackFilledButton } from 'src/components/Button/Button'
import SvgAdd from 'src/components/Icon/Add'
import { TertiaryTitleLabel } from 'src/components/Label/Label'
import StartupHomeConnectionCell from 'src/components/Startup/Home/StartupHomeConnectionCell'
import StartupHomePostCell from 'src/components/Startup/Home/StartupHomePostCell'

/*
Startup feed will consist of:

1. Recent posts from investors:
    - if post visibility is Connections && startup is a Connection
    - if post visibility is Followers && startup is a Follower
    - if post visibility is Public
2. Recent connection events from investors:
    - if investor's activity visibility is Connections && startup is a Connection
    - if investor's activity visibility is Followers && startup is a Follower

*/

export const QUERY = gql`
  query FindStartupHomeFeedQuery {
    recentInvestorsPosts: recentInvestorsPosts {
      id
    }
    recentInvestorsConnections: recentInvestorsConnections {
      id
    }
  }
`

export const Success = ({
  recentInvestorsPosts,
  recentInvestorsConnections,
}: CellSuccessProps<
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables
>) => {
  return (
    <div className="flex h-full flex-col gap-2 lg:gap-3">
      <div className="flex items-start justify-between">
        <TertiaryTitleLabel label="Home Feed" />
        <LeadingIconBlackFilledButton
          label="CREATE POST"
          icon={<SvgAdd className="h-5 w-5 lg:h-6 lg:w-6" />}
          action={() => {
            navigate(routes.startupCreatePost())
          }}
        />
      </div>
      {/* //TODO: Different tabs for various activities */}
      <div className="flex flex-col gap-2 overflow-y-auto lg:gap-3">
        {recentInvestorsPosts.map((p: { id: number }) => (
          <StartupHomePostCell id={p.id} key={'post' + p.id.toString()} />
        ))}
        {recentInvestorsConnections.map((c: { id: number }) => (
          <StartupHomeConnectionCell id={c.id} key={'conn' + c.id.toString()} />
        ))}
      </div>
    </div>
  )
}
