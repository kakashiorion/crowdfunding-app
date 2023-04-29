import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupPreferencesMutationVariables,
  FindStartupPreferencesById,
} from 'types/graphql'

const DELETE_STARTUP_PREFERENCES_MUTATION = gql`
  mutation DeleteStartupPreferencesMutation($id: Int!) {
    deleteStartupPreferences(id: $id) {
      id
    }
  }
`

interface Props {
  startupPreferences: NonNullable<
    FindStartupPreferencesById['startupPreferences']
  >
}

const StartupPreferences = ({ startupPreferences }: Props) => {
  const [deleteStartupPreferences] = useMutation(
    DELETE_STARTUP_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupPreferences deleted')
        navigate(routes.adminStartupPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StartupPreferences {startupPreferences.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startupPreferences.id}</td>
            </tr>
            <tr>
              <th>Prefers light theme</th>
              <td>{checkboxInputTag(startupPreferences.prefersLightTheme)}</td>
            </tr>
            <tr>
              <th>Profile hidden from strangers</th>
              <td>
                {checkboxInputTag(
                  startupPreferences.profileHiddenFromStrangers
                )}
              </td>
            </tr>
            <tr>
              <th>Receive message from strangers</th>
              <td>
                {checkboxInputTag(
                  startupPreferences.receiveMessageFromStrangers
                )}
              </td>
            </tr>
            <tr>
              <th>Activity visbility</th>
              <td>{formatEnum(startupPreferences.activityVisbility)}</td>
            </tr>
            <tr>
              <th>Financial visbility</th>
              <td>{formatEnum(startupPreferences.financialVisbility)}</td>
            </tr>
            <tr>
              <th>Notification level</th>
              <td>{formatEnum(startupPreferences.notificationLevel)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startupPreferences.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startupPreferences.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartupPreferences({ id: startupPreferences.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startupPreferences.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StartupPreferences
