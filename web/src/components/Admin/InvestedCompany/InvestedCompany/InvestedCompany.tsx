import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvestedCompanyMutationVariables,
  FindInvestedCompanyById,
} from 'types/graphql'

const DELETE_INVESTED_COMPANY_MUTATION = gql`
  mutation DeleteInvestedCompanyMutation($id: Int!) {
    deleteInvestedCompany(id: $id) {
      id
    }
  }
`

interface Props {
  investedCompany: NonNullable<FindInvestedCompanyById['investedCompany']>
}

const InvestedCompany = ({ investedCompany }: Props) => {
  const [deleteInvestedCompany] = useMutation(
    DELETE_INVESTED_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestedCompany deleted')
        navigate(routes.adminInvestedCompanies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteInvestedCompanyMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete investedCompany ' + id + '?')
    ) {
      deleteInvestedCompany({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InvestedCompany {investedCompany.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{investedCompany.id}</td>
            </tr>
            <tr>
              <th>Investor id</th>
              <td>{investedCompany.investorID}</td>
            </tr>
            <tr>
              <th>Company name</th>
              <td>{investedCompany.companyName}</td>
            </tr>
            <tr>
              <th>Industry sector id</th>
              <td>{investedCompany.industrySectorID}</td>
            </tr>
            <tr>
              <th>Funding stage</th>
              <td>{formatEnum(investedCompany.fundingStage)}</td>
            </tr>
            <tr>
              <th>Funding amount lacs</th>
              <td>{formatEnum(investedCompany.fundingAmountLacs)}</td>
            </tr>
            <tr>
              <th>Funding reason</th>
              <td>{investedCompany.fundingReason}</td>
            </tr>
            <tr>
              <th>Has exited</th>
              <td>{checkboxInputTag(investedCompany.hasExited)}</td>
            </tr>
            <tr>
              <th>Expected returns mult</th>
              <td>{investedCompany.expectedReturnsMult}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(investedCompany.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(investedCompany.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditInvestedCompany({ id: investedCompany.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(investedCompany.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InvestedCompany
