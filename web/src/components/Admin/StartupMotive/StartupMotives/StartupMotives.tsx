import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/StartupMotive/StartupMotivesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteStartupMotiveMutationVariables,
  FindStartupMotives,
} from 'types/graphql'

const DELETE_STARTUP_MOTIVE_MUTATION = gql`
  mutation DeleteStartupMotiveMutation($id: Int!) {
    deleteStartupMotive(id: $id) {
      id
    }
  }
`

const StartupMotivesList = ({ startupMotives }: FindStartupMotives) => {
  const [deleteStartupMotive] = useMutation(DELETE_STARTUP_MOTIVE_MUTATION, {
    onCompleted: () => {
      toast.success('StartupMotive deleted')
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

  const onDeleteClick = (id: DeleteStartupMotiveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startupMotive ' + id + '?')) {
      deleteStartupMotive({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Platform goal</th>
            <th>Refer source</th>
            <th>Preferred industry sectors</th>
            <th>Preferred investor levels</th>
            <th>Preferred locations</th>
            <th>Promising returns mult</th>
            <th>Promising timeline</th>
            <th>Pitch deck url</th>
            <th>Demo url</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startupMotives.map((startupMotive) => (
            <tr key={startupMotive.id}>
              <td>{truncate(startupMotive.id)}</td>
              <td>{formatEnum(startupMotive.platformGoal)}</td>
              <td>{formatEnum(startupMotive.referSource)}</td>
              <td>{truncate(startupMotive.preferredIndustrySectors)}</td>
              <td>{formatEnum(startupMotive.preferredInvestorLevels)}</td>
              <td>{truncate(startupMotive.preferredLocations)}</td>
              <td>{truncate(startupMotive.promisingReturnsMult)}</td>
              <td>{truncate(startupMotive.promisingTimeline)}</td>
              <td>{truncate(startupMotive.pitchDeckURL)}</td>
              <td>{truncate(startupMotive.demoURL)}</td>
              <td>{timeTag(startupMotive.createdAt)}</td>
              <td>{timeTag(startupMotive.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartupMotive({ id: startupMotive.id })}
                    title={'Show startupMotive ' + startupMotive.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartupMotive({ id: startupMotive.id })}
                    title={'Edit startupMotive ' + startupMotive.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startupMotive ' + startupMotive.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startupMotive.id)}
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

export default StartupMotivesList
