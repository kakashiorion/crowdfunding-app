import type { FindCapTableById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CapTable from 'src/components/Admin/CapTable/CapTable'

export const QUERY = gql`
  query FindCapTableById($id: Int!) {
    capTable: capTable(id: $id) {
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

export const Empty = () => <div>CapTable not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ capTable }: CellSuccessProps<FindCapTableById>) => {
  return <CapTable capTable={capTable} />
}
