import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupMutationVariables,
  FindStartupById,
} from 'types/graphql'

const DELETE_STARTUP_MUTATION = gql`
  mutation DeleteStartupMutation($id: Int!) {
    deleteStartup(id: $id) {
      id
    }
  }
`

interface Props {
  startup: NonNullable<FindStartupById['startup']>
}

const Startup = ({ startup }: Props) => {
  const [deleteStartup] = useMutation(DELETE_STARTUP_MUTATION, {
    onCompleted: () => {
      toast.success('Startup deleted')
      navigate(routes.adminStartups())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStartupMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startup ' + id + '?')) {
      deleteStartup({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Startup {startup.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startup.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{startup.name}</td>
            </tr>
            <tr>
              <th>Write up</th>
              <td>{startup.writeUp}</td>
            </tr>
            <tr>
              <th>Date incorporated</th>
              <td>{timeTag(startup.dateIncorporated)}</td>
            </tr>
            <tr>
              <th>Linked in url</th>
              <td>{startup.linkedInURL}</td>
            </tr>
            <tr>
              <th>Website url</th>
              <td>{startup.websiteURL}</td>
            </tr>
            <tr>
              <th>Location id</th>
              <td>{startup.locationID}</td>
            </tr>
            <tr>
              <th>Industry sector id</th>
              <td>{startup.industrySectorID}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startup.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startup.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartup({ id: startup.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startup.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Startup
