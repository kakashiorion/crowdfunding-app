import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Startup/StartupsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteStartupMutationVariables,
  FindStartups,
} from 'types/graphql'

const DELETE_STARTUP_MUTATION = gql`
  mutation DeleteStartupMutation($id: Int!) {
    deleteStartup(id: $id) {
      id
    }
  }
`

const StartupsList = ({ startups }: FindStartups) => {
  const [deleteStartup] = useMutation(DELETE_STARTUP_MUTATION, {
    onCompleted: () => {
      toast.success('Startup deleted')
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

  const onDeleteClick = (id: DeleteStartupMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startup ' + id + '?')) {
      deleteStartup({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Write up</th>
            <th>Date incorporated</th>
            <th>Linked in url</th>
            <th>Website url</th>
            <th>Location id</th>
            <th>Industry sector id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((startup) => (
            <tr key={startup.id}>
              <td>{truncate(startup.id)}</td>
              <td>{truncate(startup.name)}</td>
              <td>{truncate(startup.writeUp)}</td>
              <td>{timeTag(startup.dateIncorporated)}</td>
              <td>{truncate(startup.linkedInURL)}</td>
              <td>{truncate(startup.websiteURL)}</td>
              <td>{truncate(startup.locationID)}</td>
              <td>{truncate(startup.industrySectorID)}</td>
              <td>{timeTag(startup.createdAt)}</td>
              <td>{timeTag(startup.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartup({ id: startup.id })}
                    title={'Show startup ' + startup.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartup({ id: startup.id })}
                    title={'Edit startup ' + startup.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startup ' + startup.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startup.id)}
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

export default StartupsList
