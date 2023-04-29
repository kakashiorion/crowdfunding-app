import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvestorMutationVariables,
  FindInvestorById,
} from 'types/graphql'

const DELETE_INVESTOR_MUTATION = gql`
  mutation DeleteInvestorMutation($id: Int!) {
    deleteInvestor(id: $id) {
      id
    }
  }
`

interface Props {
  investor: NonNullable<FindInvestorById['investor']>
}

const Investor = ({ investor }: Props) => {
  const [deleteInvestor] = useMutation(DELETE_INVESTOR_MUTATION, {
    onCompleted: () => {
      toast.success('Investor deleted')
      navigate(routes.adminInvestors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInvestorMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete investor ' + id + '?')) {
      deleteInvestor({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Investor {investor.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{investor.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{investor.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{investor.lastName}</td>
            </tr>
            <tr>
              <th>Date of birth</th>
              <td>{timeTag(investor.dateOfBirth)}</td>
            </tr>
            <tr>
              <th>Linked in url</th>
              <td>{investor.linkedInURL}</td>
            </tr>
            <tr>
              <th>Website url</th>
              <td>{investor.websiteURL}</td>
            </tr>
            <tr>
              <th>Location id</th>
              <td>{investor.locationID}</td>
            </tr>
            <tr>
              <th>Edu bg</th>
              <td>{formatEnum(investor.eduBG)}</td>
            </tr>
            <tr>
              <th>Years of work ex</th>
              <td>{investor.yearsOfWorkEx}</td>
            </tr>
            <tr>
              <th>Number of companies</th>
              <td>{investor.numberOfCompanies}</td>
            </tr>
            <tr>
              <th>Worked in sectors</th>
              <td>{investor.workedInSectors}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(investor.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(investor.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditInvestor({ id: investor.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(investor.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Investor
