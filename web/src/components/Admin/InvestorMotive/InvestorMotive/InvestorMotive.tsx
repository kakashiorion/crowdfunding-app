import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvestorMotiveMutationVariables,
  FindInvestorMotiveById,
} from 'types/graphql'

const DELETE_INVESTOR_MOTIVE_MUTATION = gql`
  mutation DeleteInvestorMotiveMutation($id: Int!) {
    deleteInvestorMotive(id: $id) {
      id
    }
  }
`

interface Props {
  investorMotive: NonNullable<FindInvestorMotiveById['investorMotive']>
}

const InvestorMotive = ({ investorMotive }: Props) => {
  const [deleteInvestorMotive] = useMutation(DELETE_INVESTOR_MOTIVE_MUTATION, {
    onCompleted: () => {
      toast.success('InvestorMotive deleted')
      navigate(routes.adminInvestorMotives())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInvestorMotiveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete investorMotive ' + id + '?')) {
      deleteInvestorMotive({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InvestorMotive {investorMotive.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{investorMotive.id}</td>
            </tr>
            <tr>
              <th>Preferred industry sectors</th>
              <td>{investorMotive.preferredIndustrySectors}</td>
            </tr>
            <tr>
              <th>Preffered capital to invest</th>
              <td>{formatEnum(investorMotive.prefferedCapitalToInvest)}</td>
            </tr>
            <tr>
              <th>Preferred funding stage</th>
              <td>{formatEnum(investorMotive.preferredFundingStage)}</td>
            </tr>
            <tr>
              <th>Preferred startup team size</th>
              <td>{formatEnum(investorMotive.preferredStartupTeamSize)}</td>
            </tr>
            <tr>
              <th>Preferred timeline months</th>
              <td>{investorMotive.preferredTimelineMonths}</td>
            </tr>
            <tr>
              <th>Preferred returns mult</th>
              <td>{investorMotive.preferredReturnsMult}</td>
            </tr>
            <tr>
              <th>Preferred locations</th>
              <td>{investorMotive.preferredLocations}</td>
            </tr>
            <tr>
              <th>Reason for investing</th>
              <td>{investorMotive.reasonForInvesting}</td>
            </tr>
            <tr>
              <th>Platform goal</th>
              <td>{formatEnum(investorMotive.platformGoal)}</td>
            </tr>
            <tr>
              <th>Refer source</th>
              <td>{formatEnum(investorMotive.referSource)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(investorMotive.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(investorMotive.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditInvestorMotive({ id: investorMotive.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(investorMotive.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InvestorMotive
