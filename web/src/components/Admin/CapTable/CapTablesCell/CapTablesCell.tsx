import type { FindCapTables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CapTables from 'src/components/Admin/CapTable/CapTables'

export const QUERY = gql`
  query FindCapTables {
    capTables {
      id
      startupID
      shareholder
      equityShare
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No capTables yet. '}
      <Link to={routes.adminNewCapTable()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ capTables }: CellSuccessProps<FindCapTables>) => {
  return <CapTables capTables={capTables} />
}
