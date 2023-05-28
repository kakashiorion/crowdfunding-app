import AddIcon from 'public/icons/add.svg'
import type {
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { LeadingIconBlackFilledButton } from 'src/components/Button/Button'
import { TertiaryTextLabel } from 'src/components/Label/Label'
import StartupHomeConnectionCell from 'src/components/Startup/Home/StartupHomeConnectionCell'
import StartupHomePostCell from 'src/components/Startup/Home/StartupHomePostCell'

export const QUERY = gql`
  query FindStartupHomeFeedQuery {
    startupHomeFeedPosts: posts {
      id
    }
    startupHomeFeedConnections: connections {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStartupHomeFeedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  startupHomeFeedPosts,
  startupHomeFeedConnections,
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
        {startupHomeFeedPosts.map((p: { id: number }) => (
          <>
            <StartupHomePostCell id={p.id} key={'post' + p.id} />
          </>
        ))}
        {startupHomeFeedConnections.map((c: { id: number }) => (
          <>
            <StartupHomeConnectionCell id={c.id} key={'conn' + c.id} />
          </>
        ))}
      </div>
    </div>
  )
}
