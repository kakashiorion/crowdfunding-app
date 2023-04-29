import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorPreferencesForm from 'src/components/Admin/InvestorPreferences/InvestorPreferencesForm'

import type { CreateInvestorPreferencesInput } from 'types/graphql'

const CREATE_INVESTOR_PREFERENCES_MUTATION = gql`
  mutation CreateInvestorPreferencesMutation(
    $input: CreateInvestorPreferencesInput!
  ) {
    createInvestorPreferences(input: $input) {
      id
    }
  }
`

const NewInvestorPreferences = () => {
  const [createInvestorPreferences, { loading, error }] = useMutation(
    CREATE_INVESTOR_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorPreferences created')
        navigate(routes.adminInvestorPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvestorPreferencesInput) => {
    createInvestorPreferences({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New InvestorPreferences
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorPreferencesForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewInvestorPreferences
