import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/StartupPreferences/StartupPreferenceCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteStartupPreferencesMutationVariables,
  FindStartupPreference,
} from 'types/graphql'

const DELETE_STARTUP_PREFERENCES_MUTATION = gql`
  mutation DeleteStartupPreferencesMutation($id: Int!) {
    deleteStartupPreferences(id: $id) {
      id
    }
  }
`

const StartupPreferenceList = ({
  startupPreference,
}: FindStartupPreference) => {
  const [deleteStartupPreferences] = useMutation(
    DELETE_STARTUP_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupPreferences deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    id: DeleteStartupPreferencesMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete startupPreferences ' + id + '?')
    ) {
      deleteStartupPreferences({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Prefers light theme</th>
            <th>Profile hidden from strangers</th>
            <th>Receive message from strangers</th>
            <th>Activity visbility</th>
            <th>Financial visbility</th>
            <th>Notification level</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startupPreference.map((startupPreferences) => (
            <tr key={startupPreferences.id}>
              <td>{truncate(startupPreferences.id)}</td>
              <td>{checkboxInputTag(startupPreferences.prefersLightTheme)}</td>
              <td>
                {checkboxInputTag(
                  startupPreferences.profileHiddenFromStrangers
                )}
              </td>
              <td>
                {checkboxInputTag(
                  startupPreferences.receiveMessageFromStrangers
                )}
              </td>
              <td>{formatEnum(startupPreferences.activityVisbility)}</td>
              <td>{formatEnum(startupPreferences.financialVisbility)}</td>
              <td>{formatEnum(startupPreferences.notificationLevel)}</td>
              <td>{timeTag(startupPreferences.createdAt)}</td>
              <td>{timeTag(startupPreferences.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartupPreferences({
                      id: startupPreferences.id,
                    })}
                    title={
                      'Show startupPreferences ' +
                      startupPreferences.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartupPreferences({
                      id: startupPreferences.id,
                    })}
                    title={'Edit startupPreferences ' + startupPreferences.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startupPreferences ' + startupPreferences.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startupPreferences.id)}
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

export default StartupPreferenceList
