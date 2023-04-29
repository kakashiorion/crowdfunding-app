import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteInvestorExperienceMutationVariables,
  FindInvestorExperienceById,
} from 'types/graphql'

const DELETE_INVESTOR_EXPERIENCE_MUTATION = gql`
  mutation DeleteInvestorExperienceMutation($id: Int!) {
    deleteInvestorExperience(id: $id) {
      id
    }
  }
`

interface Props {
  investorExperience: NonNullable<
    FindInvestorExperienceById['investorExperience']
  >
}

const InvestorExperience = ({ investorExperience }: Props) => {
  const [deleteInvestorExperience] = useMutation(
    DELETE_INVESTOR_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorExperience deleted')
        navigate(routes.adminInvestorExperiences())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteInvestorExperienceMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete investorExperience ' + id + '?')
    ) {
      deleteInvestorExperience({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InvestorExperience {investorExperience.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{investorExperience.id}</td>
            </tr>
            <tr>
              <th>Has invested before</th>
              <td>{checkboxInputTag(investorExperience.hasInvestedBefore)}</td>
            </tr>
            <tr>
              <th>Has found startup</th>
              <td>{checkboxInputTag(investorExperience.hasFoundStartup)}</td>
            </tr>
            <tr>
              <th>Has worked in startup</th>
              <td>{checkboxInputTag(investorExperience.hasWorkedInStartup)}</td>
            </tr>
            <tr>
              <th>Risk apetite</th>
              <td>{formatEnum(investorExperience.riskApetite)}</td>
            </tr>
            <tr>
              <th>Investor level</th>
              <td>{formatEnum(investorExperience.investorLevel)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(investorExperience.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(investorExperience.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditInvestorExperience({ id: investorExperience.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(investorExperience.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InvestorExperience
