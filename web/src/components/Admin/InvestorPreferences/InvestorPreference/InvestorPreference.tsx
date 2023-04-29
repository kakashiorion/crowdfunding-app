import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/InvestorPreferences/InvestorPreferenceCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteInvestorPreferencesMutationVariables,
  FindInvestorPreference,
} from 'types/graphql'

const DELETE_INVESTOR_PREFERENCES_MUTATION = gql`
  mutation DeleteInvestorPreferencesMutation($id: Int!) {
    deleteInvestorPreferences(id: $id) {
      id
    }
  }
`

const InvestorPreferenceList = ({
  investorPreference,
}: FindInvestorPreference) => {
  const [deleteInvestorPreferences] = useMutation(
    DELETE_INVESTOR_PREFERENCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorPreferences deleted')
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
    id: DeleteInvestorPreferencesMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete investorPreferences ' + id + '?')
    ) {
      deleteInvestorPreferences({ variables: { id } })
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
            <th>Notification level</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {investorPreference.map((investorPreferences) => (
            <tr key={investorPreferences.id}>
              <td>{truncate(investorPreferences.id)}</td>
              <td>{checkboxInputTag(investorPreferences.prefersLightTheme)}</td>
              <td>
                {checkboxInputTag(
                  investorPreferences.profileHiddenFromStrangers
                )}
              </td>
              <td>
                {checkboxInputTag(
                  investorPreferences.receiveMessageFromStrangers
                )}
              </td>
              <td>{formatEnum(investorPreferences.activityVisbility)}</td>
              <td>{formatEnum(investorPreferences.notificationLevel)}</td>
              <td>{timeTag(investorPreferences.createdAt)}</td>
              <td>{timeTag(investorPreferences.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminInvestorPreferences({
                      id: investorPreferences.id,
                    })}
                    title={
                      'Show investorPreferences ' +
                      investorPreferences.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditInvestorPreferences({
                      id: investorPreferences.id,
                    })}
                    title={'Edit investorPreferences ' + investorPreferences.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete investorPreferences ' + investorPreferences.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(investorPreferences.id)}
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

export default InvestorPreferenceList
