import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupPreferencesForm from 'src/components/Admin/StartupPreferences/StartupPreferencesForm'

import type { CreateStartupPreferencesInput } from 'types/graphql'

const CREATE_STARTUP_PREFERENCES_MUTATION = gql`
  mutation CreateStartupPreferencesMutation(
    $input: CreateStartupPreferencesInput!
  ) {
    createStartupPreferences(input: $input) {
      id
    }
  }
`

const NewStartupPreferences = () => {
  const [createStartupPreferences, { loading, error }] = useMutation(
    CREATE_STARTUP_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupPreferences created')
        navigate(routes.adminStartupPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupPreferencesInput) => {
    createStartupPreferences({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New StartupPreferences
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupPreferencesForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewStartupPreferences
