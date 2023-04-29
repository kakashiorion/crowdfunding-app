import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteConnectionMutationVariables,
  FindConnectionById,
} from 'types/graphql'

const DELETE_CONNECTION_MUTATION = gql`
  mutation DeleteConnectionMutation($id: Int!) {
    deleteConnection(id: $id) {
      id
    }
  }
`

interface Props {
  connection: NonNullable<FindConnectionById['connection']>
}

const Connection = ({ connection }: Props) => {
  const [deleteConnection] = useMutation(DELETE_CONNECTION_MUTATION, {
    onCompleted: () => {
      toast.success('Connection deleted')
      navigate(routes.adminConnections())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteConnectionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete connection ' + id + '?')) {
      deleteConnection({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Connection {connection.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{connection.id}</td>
            </tr>
            <tr>
              <th>Requester id</th>
              <td>{connection.requesterID}</td>
            </tr>
            <tr>
              <th>Accepter id</th>
              <td>{connection.accepterID}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(connection.status)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(connection.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(connection.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditConnection({ id: connection.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(connection.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Connection
