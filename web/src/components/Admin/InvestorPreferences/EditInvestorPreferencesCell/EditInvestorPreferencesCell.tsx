import type {
  EditInvestorPreferencesById,
  UpdateInvestorPreferencesInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorPreferencesForm from 'src/components/Admin/InvestorPreferences/InvestorPreferencesForm'

export const QUERY = gql`
  query EditInvestorPreferencesById($id: Int!) {
    investorPreferences: investorPreferences(id: $id) {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
      notificationLevel
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVESTOR_PREFERENCES_MUTATION = gql`
  mutation UpdateInvestorPreferencesMutation(
    $id: Int!
    $input: UpdateInvestorPreferencesInput!
  ) {
    updateInvestorPreferences(id: $id, input: $input) {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
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
  investorPreferences,
}: CellSuccessProps<EditInvestorPreferencesById>) => {
  const [updateInvestorPreferences, { loading, error }] = useMutation(
    UPDATE_INVESTOR_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorPreferences updated')
        navigate(routes.adminInvestorPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvestorPreferencesInput,
    id: EditInvestorPreferencesById['investorPreferences']['id']
  ) => {
    updateInvestorPreferences({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InvestorPreferences {investorPreferences?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorPreferencesForm
          investorPreferences={investorPreferences}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
