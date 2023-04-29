import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvestorPreferencesMutationVariables,
  FindInvestorPreferencesById,
} from 'types/graphql'

const DELETE_INVESTOR_PREFERENCES_MUTATION = gql`
  mutation DeleteInvestorPreferencesMutation($id: Int!) {
    deleteInvestorPreferences(id: $id) {
      id
    }
  }
`

interface Props {
  investorPreferences: NonNullable<
    FindInvestorPreferencesById['investorPreferences']
  >
}

const InvestorPreferences = ({ investorPreferences }: Props) => {
  const [deleteInvestorPreferences] = useMutation(
    DELETE_INVESTOR_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorPreferences deleted')
        navigate(routes.adminInvestorPreference())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteInvestorPreferencesMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete investorPreferences ' + id + '?')
    ) {
      deleteInvestorPreferences({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InvestorPreferences {investorPreferences.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{investorPreferences.id}</td>
            </tr>
            <tr>
              <th>Prefers light theme</th>
              <td>{checkboxInputTag(investorPreferences.prefersLightTheme)}</td>
            </tr>
            <tr>
              <th>Profile hidden from strangers</th>
              <td>
                {checkboxInputTag(
                  investorPreferences.profileHiddenFromStrangers
                )}
              </td>
            </tr>
            <tr>
              <th>Receive message from strangers</th>
              <td>
                {checkboxInputTag(
                  investorPreferences.receiveMessageFromStrangers
                )}
              </td>
            </tr>
            <tr>
              <th>Activity visbility</th>
              <td>{formatEnum(investorPreferences.activityVisbility)}</td>
            </tr>
            <tr>
              <th>Notification level</th>
              <td>{formatEnum(investorPreferences.notificationLevel)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(investorPreferences.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(investorPreferences.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditInvestorPreferences({
            id: investorPreferences.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(investorPreferences.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InvestorPreferences
