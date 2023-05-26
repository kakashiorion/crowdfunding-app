import type {
  FindStartupHomeFeedQuery,
  FindStartupHomeFeedQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
    <div className="flex flex-col gap-2">
      {startupHomeFeedPosts.map((p: { id: number }) => (
        <StartupHomePostCell id={p.id} key={p.id} />
      ))}
      {startupHomeFeedConnections.map((c: { id: number }) => (
        <StartupHomeConnectionCell id={c.id} key={c.id} />
      ))}
    </div>
  )
}
