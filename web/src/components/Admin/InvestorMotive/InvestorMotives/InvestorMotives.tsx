import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/InvestorMotive/InvestorMotivesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteInvestorMotiveMutationVariables,
  FindInvestorMotives,
} from 'types/graphql'

const DELETE_INVESTOR_MOTIVE_MUTATION = gql`
  mutation DeleteInvestorMotiveMutation($id: Int!) {
    deleteInvestorMotive(id: $id) {
      id
    }
  }
`

const InvestorMotivesList = ({ investorMotives }: FindInvestorMotives) => {
  const [deleteInvestorMotive] = useMutation(DELETE_INVESTOR_MOTIVE_MUTATION, {
    onCompleted: () => {
      toast.success('InvestorMotive deleted')
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

  const onDeleteClick = (id: DeleteInvestorMotiveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete investorMotive ' + id + '?')) {
      deleteInvestorMotive({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Preferred industry sectors</th>
            <th>Preffered capital to invest</th>
            <th>Preferred funding stage</th>
            <th>Preferred startup team size</th>
            <th>Preferred timeline months</th>
            <th>Preferred returns mult</th>
            <th>Preferred locations</th>
            <th>Reason for investing</th>
            <th>Platform goal</th>
            <th>Refer source</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {investorMotives.map((investorMotive) => (
            <tr key={investorMotive.id}>
              <td>{truncate(investorMotive.id)}</td>
              <td>{truncate(investorMotive.preferredIndustrySectors)}</td>
              <td>{formatEnum(investorMotive.prefferedCapitalToInvest)}</td>
              <td>{formatEnum(investorMotive.preferredFundingStage)}</td>
              <td>{formatEnum(investorMotive.preferredStartupTeamSize)}</td>
              <td>{truncate(investorMotive.preferredTimelineMonths)}</td>
              <td>{truncate(investorMotive.preferredReturnsMult)}</td>
              <td>{truncate(investorMotive.preferredLocations)}</td>
              <td>{truncate(investorMotive.reasonForInvesting)}</td>
              <td>{formatEnum(investorMotive.platformGoal)}</td>
              <td>{formatEnum(investorMotive.referSource)}</td>
              <td>{timeTag(investorMotive.createdAt)}</td>
              <td>{timeTag(investorMotive.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminInvestorMotive({ id: investorMotive.id })}
                    title={
                      'Show investorMotive ' + investorMotive.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditInvestorMotive({
                      id: investorMotive.id,
                    })}
                    title={'Edit investorMotive ' + investorMotive.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete investorMotive ' + investorMotive.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(investorMotive.id)}
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

export default InvestorMotivesList
