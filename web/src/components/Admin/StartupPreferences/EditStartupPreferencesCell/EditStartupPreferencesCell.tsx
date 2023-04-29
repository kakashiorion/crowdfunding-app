import type {
  EditStartupPreferencesById,
  UpdateStartupPreferencesInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupPreferencesForm from 'src/components/Admin/StartupPreferences/StartupPreferencesForm'

export const QUERY = gql`
  query EditStartupPreferencesById($id: Int!) {
    startupPreferences: startupPreferences(id: $id) {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
      financialVisbility
      notificationLevel
      createdAt
      updatedAt
    }
  }
`
const UPDATE_STARTUP_PREFERENCES_MUTATION = gql`
  mutation UpdateStartupPreferencesMutation(
    $id: Int!
    $input: UpdateStartupPreferencesInput!
  ) {
    updateStartupPreferences(id: $id, input: $input) {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
      financialVisbility
      notificationLevel
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupPreferences,
}: CellSuccessProps<EditStartupPreferencesById>) => {
  const [updateStartupPreferences, { loading, error }] = useMutation(
    UPDATE_STARTUP_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupPreferences updated')
        navigate(routes.adminStartupPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStartupPreferencesInput,
    id: EditStartupPreferencesById['startupPreferences']['id']
  ) => {
    updateStartupPreferences({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StartupPreferences {startupPreferences?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupPreferencesForm
          startupPreferences={startupPreferences}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
