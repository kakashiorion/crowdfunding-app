import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupBusinessMutationVariables,
  FindStartupBusinessById,
} from 'types/graphql'

const DELETE_STARTUP_BUSINESS_MUTATION = gql`
  mutation DeleteStartupBusinessMutation($id: Int!) {
    deleteStartupBusiness(id: $id) {
      id
    }
  }
`

interface Props {
  startupBusiness: NonNullable<FindStartupBusinessById['startupBusiness']>
}

const StartupBusiness = ({ startupBusiness }: Props) => {
  const [deleteStartupBusiness] = useMutation(
    DELETE_STARTUP_BUSINESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBusiness deleted')
        navigate(routes.adminStartupBusinesses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StartupBusiness {startupBusiness.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startupBusiness.id}</td>
            </tr>
            <tr>
              <th>Number users fy</th>
              <td>{startupBusiness.numberUsersFY}</td>
            </tr>
            <tr>
              <th>Number cities fy</th>
              <td>{startupBusiness.numberCitiesFY}</td>
            </tr>
            <tr>
              <th>Distribution type</th>
              <td>{formatEnum(startupBusiness.distributionType)}</td>
            </tr>
            <tr>
              <th>Worked well</th>
              <td>{startupBusiness.workedWell}</td>
            </tr>
            <tr>
              <th>Challenges</th>
              <td>{startupBusiness.challenges}</td>
            </tr>
            <tr>
              <th>Could improve</th>
              <td>{startupBusiness.couldImprove}</td>
            </tr>
            <tr>
              <th>Current fy activities</th>
              <td>{startupBusiness.currentFYActivities}</td>
            </tr>
            <tr>
              <th>Has online business</th>
              <td>{checkboxInputTag(startupBusiness.hasOnlineBusiness)}</td>
            </tr>
            <tr>
              <th>Partners</th>
              <td>{startupBusiness.partners}</td>
            </tr>
            <tr>
              <th>Customers</th>
              <td>{startupBusiness.customers}</td>
            </tr>
            <tr>
              <th>Revenue model</th>
              <td>{startupBusiness.revenueModel}</td>
            </tr>
            <tr>
              <th>Cost structure</th>
              <td>{startupBusiness.costStructure}</td>
            </tr>
            <tr>
              <th>Short term plan</th>
              <td>{formatEnum(startupBusiness.shortTermPlan)}</td>
            </tr>
            <tr>
              <th>Market size lacs</th>
              <td>{startupBusiness.marketSizeLacs}</td>
            </tr>
            <tr>
              <th>Market growth rate</th>
              <td>{startupBusiness.marketGrowthRate}</td>
            </tr>
            <tr>
              <th>Trends</th>
              <td>{startupBusiness.trends}</td>
            </tr>
            <tr>
              <th>Competitors</th>
              <td>{startupBusiness.competitors}</td>
            </tr>
            <tr>
              <th>Opporunities</th>
              <td>{startupBusiness.opporunities}</td>
            </tr>
            <tr>
              <th>Threats</th>
              <td>{startupBusiness.threats}</td>
            </tr>
            <tr>
              <th>X factor</th>
              <td>{startupBusiness.xFactor}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startupBusiness.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startupBusiness.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartupBusiness({ id: startupBusiness.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startupBusiness.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StartupBusiness
