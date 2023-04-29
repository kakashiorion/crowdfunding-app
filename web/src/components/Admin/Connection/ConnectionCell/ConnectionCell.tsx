import type { FindConnectionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Connection from 'src/components/Admin/Connection/Connection'

export const QUERY = gql`
  query FindConnectionById($id: Int!) {
    connection: connection(id: $id) {
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

export const Empty = () => <div>Connection not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  connection,
}: CellSuccessProps<FindConnectionById>) => {
  return <Connection connection={connection} />
}
