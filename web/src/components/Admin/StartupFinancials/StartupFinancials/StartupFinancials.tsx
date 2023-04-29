import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupFinancialsMutationVariables,
  FindStartupFinancialsById,
} from 'types/graphql'

const DELETE_STARTUP_FINANCIALS_MUTATION = gql`
  mutation DeleteStartupFinancialsMutation($id: Int!) {
    deleteStartupFinancials(id: $id) {
      id
    }
  }
`

interface Props {
  startupFinancials: NonNullable<FindStartupFinancialsById['startupFinancials']>
}

const StartupFinancials = ({ startupFinancials }: Props) => {
  const [deleteStartupFinancials] = useMutation(
    DELETE_STARTUP_FINANCIALS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupFinancials deleted')
        navigate(routes.adminStartupFinancial())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StartupFinancials {startupFinancials.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startupFinancials.id}</td>
            </tr>
            <tr>
              <th>Current valuation lacs</th>
              <td>{startupFinancials.currentValuationLacs}</td>
            </tr>
            <tr>
              <th>Current stage</th>
              <td>{formatEnum(startupFinancials.currentStage)}</td>
            </tr>
            <tr>
              <th>Current ratio</th>
              <td>{startupFinancials.currentRatio}</td>
            </tr>
            <tr>
              <th>De ratio</th>
              <td>{startupFinancials.DERatio}</td>
            </tr>
            <tr>
              <th>Revenue last fy lacs</th>
              <td>{startupFinancials.revenueLastFYLacs}</td>
            </tr>
            <tr>
              <th>Revenue growth rate</th>
              <td>{startupFinancials.revenueGrowthRate}</td>
            </tr>
            <tr>
              <th>Is profitable</th>
              <td>{checkboxInputTag(startupFinancials.isProfitable)}</td>
            </tr>
            <tr>
              <th>Margin</th>
              <td>{startupFinancials.margin}</td>
            </tr>
            <tr>
              <th>Cash runway months</th>
              <td>{startupFinancials.cashRunwayMonths}</td>
            </tr>
            <tr>
              <th>Plans for using cash</th>
              <td>{startupFinancials.plansForUsingCash}</td>
            </tr>
            <tr>
              <th>Biggest cost heads</th>
              <td>{startupFinancials.biggestCostHeads}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startupFinancials.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startupFinancials.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartupFinancials({ id: startupFinancials.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startupFinancials.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StartupFinancials
