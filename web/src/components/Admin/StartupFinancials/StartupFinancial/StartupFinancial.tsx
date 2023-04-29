import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/StartupFinancials/StartupFinancialCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteStartupFinancialsMutationVariables,
  FindStartupFinancial,
} from 'types/graphql'

const DELETE_STARTUP_FINANCIALS_MUTATION = gql`
  mutation DeleteStartupFinancialsMutation($id: Int!) {
    deleteStartupFinancials(id: $id) {
      id
    }
  }
`

const StartupFinancialList = ({ startupFinancial }: FindStartupFinancial) => {
  const [deleteStartupFinancials] = useMutation(
    DELETE_STARTUP_FINANCIALS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupFinancials deleted')
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
    id: DeleteStartupFinancialsMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete startupFinancials ' + id + '?')
    ) {
      deleteStartupFinancials({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Current valuation lacs</th>
            <th>Current stage</th>
            <th>Current ratio</th>
            <th>De ratio</th>
            <th>Revenue last fy lacs</th>
            <th>Revenue growth rate</th>
            <th>Is profitable</th>
            <th>Margin</th>
            <th>Cash runway months</th>
            <th>Plans for using cash</th>
            <th>Biggest cost heads</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startupFinancial.map((startupFinancials) => (
            <tr key={startupFinancials.id}>
              <td>{truncate(startupFinancials.id)}</td>
              <td>{truncate(startupFinancials.currentValuationLacs)}</td>
              <td>{formatEnum(startupFinancials.currentStage)}</td>
              <td>{truncate(startupFinancials.currentRatio)}</td>
              <td>{truncate(startupFinancials.DERatio)}</td>
              <td>{truncate(startupFinancials.revenueLastFYLacs)}</td>
              <td>{truncate(startupFinancials.revenueGrowthRate)}</td>
              <td>{checkboxInputTag(startupFinancials.isProfitable)}</td>
              <td>{truncate(startupFinancials.margin)}</td>
              <td>{truncate(startupFinancials.cashRunwayMonths)}</td>
              <td>{truncate(startupFinancials.plansForUsingCash)}</td>
              <td>{truncate(startupFinancials.biggestCostHeads)}</td>
              <td>{timeTag(startupFinancials.createdAt)}</td>
              <td>{timeTag(startupFinancials.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartupFinancials({
                      id: startupFinancials.id,
                    })}
                    title={
                      'Show startupFinancials ' +
                      startupFinancials.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartupFinancials({
                      id: startupFinancials.id,
                    })}
                    title={'Edit startupFinancials ' + startupFinancials.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startupFinancials ' + startupFinancials.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startupFinancials.id)}
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

export default StartupFinancialList
