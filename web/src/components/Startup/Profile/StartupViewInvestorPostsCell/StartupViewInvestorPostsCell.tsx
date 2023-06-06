import type { StartupViewInvestorPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query StartupViewInvestorPostsQuery {
    startupViewInvestorPosts {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  startupViewInvestorPosts,
}: CellSuccessProps<StartupViewInvestorPostsQuery>) => {
  return (
    <ul>
      {startupViewInvestorPosts.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
