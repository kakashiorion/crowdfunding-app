import type { EditCapTableById, UpdateCapTableInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CapTableForm from 'src/components/Admin/CapTable/CapTableForm'

export const QUERY = gql`
  query EditCapTableById($id: Int!) {
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
const UPDATE_CAP_TABLE_MUTATION = gql`
  mutation UpdateCapTableMutation($id: Int!, $input: UpdateCapTableInput!) {
    updateCapTable(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ capTable }: CellSuccessProps<EditCapTableById>) => {
  const [updateCapTable, { loading, error }] = useMutation(
    UPDATE_CAP_TABLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CapTable updated')
        navigate(routes.adminCapTables())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCapTableInput,
    id: EditCapTableById['capTable']['id']
  ) => {
    updateCapTable({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CapTable {capTable?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CapTableForm
          capTable={capTable}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
