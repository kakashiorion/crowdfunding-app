import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/FundraisingRound/FundraisingRoundsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteFundraisingRoundMutationVariables,
  FindFundraisingRounds,
} from 'types/graphql'

const DELETE_FUNDRAISING_ROUND_MUTATION = gql`
  mutation DeleteFundraisingRoundMutation($id: Int!) {
    deleteFundraisingRound(id: $id) {
      id
    }
  }
`

const FundraisingRoundsList = ({
  fundraisingRounds,
}: FindFundraisingRounds) => {
  const [deleteFundraisingRound] = useMutation(
    DELETE_FUNDRAISING_ROUND_MUTATION,
    {
      onCompleted: () => {
        toast.success('FundraisingRound deleted')
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

  const onDeleteClick = (id: DeleteFundraisingRoundMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete fundraisingRound ' + id + '?')
    ) {
      deleteFundraisingRound({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Startup id</th>
            <th>Round stage</th>
            <th>Capital raised lacs</th>
            <th>Valuation lacs</th>
            <th>Key investors</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fundraisingRounds.map((fundraisingRound) => (
            <tr key={fundraisingRound.id}>
              <td>{truncate(fundraisingRound.id)}</td>
              <td>{truncate(fundraisingRound.startupID)}</td>
              <td>{formatEnum(fundraisingRound.roundStage)}</td>
              <td>{truncate(fundraisingRound.capitalRaisedLacs)}</td>
              <td>{truncate(fundraisingRound.valuationLacs)}</td>
              <td>{truncate(fundraisingRound.keyInvestors)}</td>
              <td>{timeTag(fundraisingRound.createdAt)}</td>
              <td>{timeTag(fundraisingRound.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminFundraisingRound({
                      id: fundraisingRound.id,
                    })}
                    title={
                      'Show fundraisingRound ' + fundraisingRound.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditFundraisingRound({
                      id: fundraisingRound.id,
                    })}
                    title={'Edit fundraisingRound ' + fundraisingRound.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete fundraisingRound ' + fundraisingRound.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fundraisingRound.id)}
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

export default FundraisingRoundsList
