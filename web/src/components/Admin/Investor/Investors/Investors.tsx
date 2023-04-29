import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Investor/InvestorsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteInvestorMutationVariables,
  FindInvestors,
} from 'types/graphql'

const DELETE_INVESTOR_MUTATION = gql`
  mutation DeleteInvestorMutation($id: Int!) {
    deleteInvestor(id: $id) {
      id
    }
  }
`

const InvestorsList = ({ investors }: FindInvestors) => {
  const [deleteInvestor] = useMutation(DELETE_INVESTOR_MUTATION, {
    onCompleted: () => {
      toast.success('Investor deleted')
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

  const onDeleteClick = (id: DeleteInvestorMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete investor ' + id + '?')) {
      deleteInvestor({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Date of birth</th>
            <th>Linked in url</th>
            <th>Website url</th>
            <th>Location id</th>
            <th>Edu bg</th>
            <th>Years of work ex</th>
            <th>Number of companies</th>
            <th>Worked in sectors</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr key={investor.id}>
              <td>{truncate(investor.id)}</td>
              <td>{truncate(investor.firstName)}</td>
              <td>{truncate(investor.lastName)}</td>
              <td>{timeTag(investor.dateOfBirth)}</td>
              <td>{truncate(investor.linkedInURL)}</td>
              <td>{truncate(investor.websiteURL)}</td>
              <td>{truncate(investor.locationID)}</td>
              <td>{formatEnum(investor.eduBG)}</td>
              <td>{truncate(investor.yearsOfWorkEx)}</td>
              <td>{truncate(investor.numberOfCompanies)}</td>
              <td>{truncate(investor.workedInSectors)}</td>
              <td>{timeTag(investor.createdAt)}</td>
              <td>{timeTag(investor.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminInvestor({ id: investor.id })}
                    title={'Show investor ' + investor.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditInvestor({ id: investor.id })}
                    title={'Edit investor ' + investor.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete investor ' + investor.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(investor.id)}
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

export default InvestorsList
