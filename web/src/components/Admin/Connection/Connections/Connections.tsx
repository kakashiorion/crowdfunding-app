import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Connection/ConnectionsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteConnectionMutationVariables,
  FindConnections,
} from 'types/graphql'

const DELETE_CONNECTION_MUTATION = gql`
  mutation DeleteConnectionMutation($id: Int!) {
    deleteConnection(id: $id) {
      id
    }
  }
`

const ConnectionsList = ({ connections }: FindConnections) => {
  const [deleteConnection] = useMutation(DELETE_CONNECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Connection deleted')
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

  const onDeleteClick = (id: DeleteConnectionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete connection ' + id + '?')) {
      deleteConnection({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Requester id</th>
            <th>Accepter id</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {connections.map((connection) => (
            <tr key={connection.id}>
              <td>{truncate(connection.id)}</td>
              <td>{truncate(connection.requesterID)}</td>
              <td>{truncate(connection.accepterID)}</td>
              <td>{formatEnum(connection.status)}</td>
              <td>{timeTag(connection.createdAt)}</td>
              <td>{timeTag(connection.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminConnection({ id: connection.id })}
                    title={'Show connection ' + connection.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditConnection({ id: connection.id })}
                    title={'Edit connection ' + connection.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete connection ' + connection.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(connection.id)}
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

export default ConnectionsList
