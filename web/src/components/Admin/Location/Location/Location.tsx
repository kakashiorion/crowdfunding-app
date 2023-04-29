import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteLocationMutationVariables,
  FindLocationById,
} from 'types/graphql'

const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocationMutation($id: Int!) {
    deleteLocation(id: $id) {
      id
    }
  }
`

interface Props {
  location: NonNullable<FindLocationById['location']>
}

const Location = ({ location }: Props) => {
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Location deleted')
      navigate(routes.adminLocations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLocationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete location ' + id + '?')) {
      deleteLocation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Location {location.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{location.id}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{location.state}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{location.city}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(location.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(location.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditLocation({ id: location.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(location.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Location
