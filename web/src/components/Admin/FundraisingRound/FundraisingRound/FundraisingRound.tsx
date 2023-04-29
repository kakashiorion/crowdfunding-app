import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteFundraisingRoundMutationVariables,
  FindFundraisingRoundById,
} from 'types/graphql'

const DELETE_FUNDRAISING_ROUND_MUTATION = gql`
  mutation DeleteFundraisingRoundMutation($id: Int!) {
    deleteFundraisingRound(id: $id) {
      id
    }
  }
`

interface Props {
  fundraisingRound: NonNullable<FindFundraisingRoundById['fundraisingRound']>
}

const FundraisingRound = ({ fundraisingRound }: Props) => {
  const [deleteFundraisingRound] = useMutation(
    DELETE_FUNDRAISING_ROUND_MUTATION,
    {
      onCompleted: () => {
        toast.success('FundraisingRound deleted')
        navigate(routes.adminFundraisingRounds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FundraisingRound {fundraisingRound.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fundraisingRound.id}</td>
            </tr>
            <tr>
              <th>Startup id</th>
              <td>{fundraisingRound.startupID}</td>
            </tr>
            <tr>
              <th>Round stage</th>
              <td>{formatEnum(fundraisingRound.roundStage)}</td>
            </tr>
            <tr>
              <th>Capital raised lacs</th>
              <td>{fundraisingRound.capitalRaisedLacs}</td>
            </tr>
            <tr>
              <th>Valuation lacs</th>
              <td>{fundraisingRound.valuationLacs}</td>
            </tr>
            <tr>
              <th>Key investors</th>
              <td>{fundraisingRound.keyInvestors}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(fundraisingRound.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(fundraisingRound.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditFundraisingRound({ id: fundraisingRound.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fundraisingRound.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default FundraisingRound
