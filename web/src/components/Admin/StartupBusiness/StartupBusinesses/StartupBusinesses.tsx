import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/StartupBusiness/StartupBusinessesCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteStartupBusinessMutationVariables,
  FindStartupBusinesses,
} from 'types/graphql'

const DELETE_STARTUP_BUSINESS_MUTATION = gql`
  mutation DeleteStartupBusinessMutation($id: Int!) {
    deleteStartupBusiness(id: $id) {
      id
    }
  }
`

const StartupBusinessesList = ({
  startupBusinesses,
}: FindStartupBusinesses) => {
  const [deleteStartupBusiness] = useMutation(
    DELETE_STARTUP_BUSINESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBusiness deleted')
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

  const onDeleteClick = (id: DeleteStartupBusinessMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete startupBusiness ' + id + '?')
    ) {
      deleteStartupBusiness({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Number users fy</th>
            <th>Number cities fy</th>
            <th>Distribution type</th>
            <th>Worked well</th>
            <th>Challenges</th>
            <th>Could improve</th>
            <th>Current fy activities</th>
            <th>Has online business</th>
            <th>Partners</th>
            <th>Customers</th>
            <th>Revenue model</th>
            <th>Cost structure</th>
            <th>Short term plan</th>
            <th>Market size lacs</th>
            <th>Market growth rate</th>
            <th>Trends</th>
            <th>Competitors</th>
            <th>Opporunities</th>
            <th>Threats</th>
            <th>X factor</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startupBusinesses.map((startupBusiness) => (
            <tr key={startupBusiness.id}>
              <td>{truncate(startupBusiness.id)}</td>
              <td>{truncate(startupBusiness.numberUsersFY)}</td>
              <td>{truncate(startupBusiness.numberCitiesFY)}</td>
              <td>{formatEnum(startupBusiness.distributionType)}</td>
              <td>{truncate(startupBusiness.workedWell)}</td>
              <td>{truncate(startupBusiness.challenges)}</td>
              <td>{truncate(startupBusiness.couldImprove)}</td>
              <td>{truncate(startupBusiness.currentFYActivities)}</td>
              <td>{checkboxInputTag(startupBusiness.hasOnlineBusiness)}</td>
              <td>{truncate(startupBusiness.partners)}</td>
              <td>{truncate(startupBusiness.customers)}</td>
              <td>{truncate(startupBusiness.revenueModel)}</td>
              <td>{truncate(startupBusiness.costStructure)}</td>
              <td>{formatEnum(startupBusiness.shortTermPlan)}</td>
              <td>{truncate(startupBusiness.marketSizeLacs)}</td>
              <td>{truncate(startupBusiness.marketGrowthRate)}</td>
              <td>{truncate(startupBusiness.trends)}</td>
              <td>{truncate(startupBusiness.competitors)}</td>
              <td>{truncate(startupBusiness.opporunities)}</td>
              <td>{truncate(startupBusiness.threats)}</td>
              <td>{truncate(startupBusiness.xFactor)}</td>
              <td>{timeTag(startupBusiness.createdAt)}</td>
              <td>{timeTag(startupBusiness.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartupBusiness({ id: startupBusiness.id })}
                    title={
                      'Show startupBusiness ' + startupBusiness.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartupBusiness({
                      id: startupBusiness.id,
                    })}
                    title={'Edit startupBusiness ' + startupBusiness.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startupBusiness ' + startupBusiness.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startupBusiness.id)}
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

export default StartupBusinessesList
