import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/CapTable/CapTablesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCapTableMutationVariables,
  FindCapTables,
} from 'types/graphql'

const DELETE_CAP_TABLE_MUTATION = gql`
  mutation DeleteCapTableMutation($id: Int!) {
    deleteCapTable(id: $id) {
      id
    }
  }
`

const CapTablesList = ({ capTables }: FindCapTables) => {
  const [deleteCapTable] = useMutation(DELETE_CAP_TABLE_MUTATION, {
    onCompleted: () => {
      toast.success('CapTable deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCapTableMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete capTable ' + id + '?')) {
      deleteCapTable({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Startup id</th>
            <th>Shareholder</th>
            <th>Equity share</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {capTables.map((capTable) => (
            <tr key={capTable.id}>
              <td>{truncate(capTable.id)}</td>
              <td>{truncate(capTable.startupID)}</td>
              <td>{truncate(capTable.shareholder)}</td>
              <td>{truncate(capTable.equityShare)}</td>
              <td>{timeTag(capTable.createdAt)}</td>
              <td>{timeTag(capTable.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminCapTable({ id: capTable.id })}
                    title={'Show capTable ' + capTable.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditCapTable({ id: capTable.id })}
                    title={'Edit capTable ' + capTable.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete capTable ' + capTable.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(capTable.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CapTablesList
