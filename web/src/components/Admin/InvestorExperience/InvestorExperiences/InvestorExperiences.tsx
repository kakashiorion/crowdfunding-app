import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/InvestorExperience/InvestorExperiencesCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteInvestorExperienceMutationVariables,
  FindInvestorExperiences,
} from 'types/graphql'

const DELETE_INVESTOR_EXPERIENCE_MUTATION = gql`
  mutation DeleteInvestorExperienceMutation($id: Int!) {
    deleteInvestorExperience(id: $id) {
      id
    }
  }
`

const InvestorExperiencesList = ({
  investorExperiences,
}: FindInvestorExperiences) => {
  const [deleteInvestorExperience] = useMutation(
    DELETE_INVESTOR_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorExperience deleted')
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
    id: DeleteInvestorExperienceMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete investorExperience ' + id + '?')
    ) {
      deleteInvestorExperience({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Has invested before</th>
            <th>Has found startup</th>
            <th>Has worked in startup</th>
            <th>Risk apetite</th>
            <th>Investor level</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {investorExperiences.map((investorExperience) => (
            <tr key={investorExperience.id}>
              <td>{truncate(investorExperience.id)}</td>
              <td>{checkboxInputTag(investorExperience.hasInvestedBefore)}</td>
              <td>{checkboxInputTag(investorExperience.hasFoundStartup)}</td>
              <td>{checkboxInputTag(investorExperience.hasWorkedInStartup)}</td>
              <td>{formatEnum(investorExperience.riskApetite)}</td>
              <td>{formatEnum(investorExperience.investorLevel)}</td>
              <td>{timeTag(investorExperience.createdAt)}</td>
              <td>{timeTag(investorExperience.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminInvestorExperience({
                      id: investorExperience.id,
                    })}
                    title={
                      'Show investorExperience ' +
                      investorExperience.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditInvestorExperience({
                      id: investorExperience.id,
                    })}
                    title={'Edit investorExperience ' + investorExperience.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete investorExperience ' + investorExperience.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(investorExperience.id)}
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

export default InvestorExperiencesList
