import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/InvestedCompany/InvestedCompaniesCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteInvestedCompanyMutationVariables,
  FindInvestedCompanies,
} from 'types/graphql'

const DELETE_INVESTED_COMPANY_MUTATION = gql`
  mutation DeleteInvestedCompanyMutation($id: Int!) {
    deleteInvestedCompany(id: $id) {
      id
    }
  }
`

const InvestedCompaniesList = ({
  investedCompanies,
}: FindInvestedCompanies) => {
  const [deleteInvestedCompany] = useMutation(
    DELETE_INVESTED_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestedCompany deleted')
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

  const onDeleteClick = (id: DeleteInvestedCompanyMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete investedCompany ' + id + '?')
    ) {
      deleteInvestedCompany({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Investor id</th>
            <th>Company name</th>
            <th>Industry sector id</th>
            <th>Funding stage</th>
            <th>Funding amount lacs</th>
            <th>Funding reason</th>
            <th>Has exited</th>
            <th>Expected returns mult</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {investedCompanies.map((investedCompany) => (
            <tr key={investedCompany.id}>
              <td>{truncate(investedCompany.id)}</td>
              <td>{truncate(investedCompany.investorID)}</td>
              <td>{truncate(investedCompany.companyName)}</td>
              <td>{truncate(investedCompany.industrySectorID)}</td>
              <td>{formatEnum(investedCompany.fundingStage)}</td>
              <td>{formatEnum(investedCompany.fundingAmountLacs)}</td>
              <td>{truncate(investedCompany.fundingReason)}</td>
              <td>{checkboxInputTag(investedCompany.hasExited)}</td>
              <td>{truncate(investedCompany.expectedReturnsMult)}</td>
              <td>{timeTag(investedCompany.createdAt)}</td>
              <td>{timeTag(investedCompany.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminInvestedCompany({ id: investedCompany.id })}
                    title={
                      'Show investedCompany ' + investedCompany.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditInvestedCompany({
                      id: investedCompany.id,
                    })}
                    title={'Edit investedCompany ' + investedCompany.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete investedCompany ' + investedCompany.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(investedCompany.id)}
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

export default InvestedCompaniesList
