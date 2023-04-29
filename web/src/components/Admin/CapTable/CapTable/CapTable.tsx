import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCapTableMutationVariables,
  FindCapTableById,
} from 'types/graphql'

const DELETE_CAP_TABLE_MUTATION = gql`
  mutation DeleteCapTableMutation($id: Int!) {
    deleteCapTable(id: $id) {
      id
    }
  }
`

interface Props {
  capTable: NonNullable<FindCapTableById['capTable']>
}

const CapTable = ({ capTable }: Props) => {
  const [deleteCapTable] = useMutation(DELETE_CAP_TABLE_MUTATION, {
    onCompleted: () => {
      toast.success('CapTable deleted')
      navigate(routes.adminCapTables())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCapTableMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete capTable ' + id + '?')) {
      deleteCapTable({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CapTable {capTable.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{capTable.id}</td>
            </tr>
            <tr>
              <th>Startup id</th>
              <td>{capTable.startupID}</td>
            </tr>
            <tr>
              <th>Shareholder</th>
              <td>{capTable.shareholder}</td>
            </tr>
            <tr>
              <th>Equity share</th>
              <td>{capTable.equityShare}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(capTable.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(capTable.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCapTable({ id: capTable.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(capTable.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CapTable
