import AddIcon from 'public/icons/add.svg'
import type {
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { LeadingIconBlackFilledButton } from 'src/components/Button/Button'
import { TertiaryTextLabel } from 'src/components/Label/Label'
import StartupHomeConnectionCell from 'src/components/Startup/Home/StartupHomeConnectionCell'
import StartupHomePostCell from 'src/components/Startup/Home/StartupHomePostCell'

/*
Startup feed will consist of:

1. Posts from investors in last 7 days:
    - if post visibility is Connections && startup is a Connection
    - if post visibility is Followers && startup is a Follower
    - if post visibility is Public
2. Connection events from investors in last 7 days:
    - if investor's activity visibility is Connections && startup is a Connection
    - if investor's activity visibility is Followers && startup is a Follower

*/

export const QUERY = gql`
  query FindStartupHomeFeedQuery {
    recentConnectionPosts: recentConnectionPosts {
      id
    }
    recentFollowingPosts: recentFollowingPosts {
      id
    }
    recentPublicPosts: recentPublicPosts {
      id
    }
    recentConnectionConnections: recentConnectionConnections {
      id
    }
    recentFollowingConnections: recentFollowingConnections {
      id
    }
  }
`

export const Empty = () => {
  return <></>
}

export const Success = ({
  recentConnectionPosts,
  recentFollowingPosts,
  recentPublicPosts,
  recentConnectionConnections,
  recentFollowingConnections,
}: CellSuccessProps<
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables
>) => {
  return (
    <div className="flex h-full flex-col gap-2 lg:gap-3">
      <div className="flex items-center justify-between">
        <TertiaryTextLabel label="YOUR FEED" />
        <LeadingIconBlackFilledButton
          label="CREATE POST"
          icon={<AddIcon className="h-5 w-5 lg:h-6 lg:w-6" />}
          action={() => {
            navigate(routes.startupCreatePost())
          }}
        />
      </div>
      {/* //TODO: Different tabs for various activities */}
      <div className="flex flex-col gap-2 overflow-y-scroll lg:gap-3">
        {recentConnectionPosts.map((p: { id: number }) => (
          <>
            <StartupHomePostCell id={p.id} key={'conpost' + p.id.toString()} />
          </>
        ))}
        {recentFollowingPosts.map((p: { id: number }) => (
          <>
            <StartupHomePostCell id={p.id} key={'folpost' + p.id.toString()} />
          </>
        ))}
        {recentPublicPosts.map((p: { id: number }) => (
          <>
            <StartupHomePostCell id={p.id} key={'pubpost' + p.id.toString()} />
          </>
        ))}
        {recentConnectionConnections.map((c: { id: number }) => (
          <>
            <StartupHomeConnectionCell
              id={c.id}
              key={'concon' + c.id.toString()}
            />
          </>
        ))}
        {recentFollowingConnections.map((c: { id: number }) => (
          <>
            <StartupHomeConnectionCell
              id={c.id}
              key={'folcon' + c.id.toString()}
            />
          </>
        ))}
      </div>
    </div>
  )
}
