import type { FindConnections } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Connections from 'src/components/Admin/Connection/Connections'

export const QUERY = gql`
  query FindConnections {
    connections {
      id
      requesterID
      accepterID
      status
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No connections yet. '}
      <Link to={routes.adminNewConnection()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ connections }: CellSuccessProps<FindConnections>) => {
  return <Connections connections={connections} />
}
