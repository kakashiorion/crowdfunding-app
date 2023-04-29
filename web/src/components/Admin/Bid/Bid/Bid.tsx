import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type { DeleteBidMutationVariables, FindBidById } from 'types/graphql'

const DELETE_BID_MUTATION = gql`
  mutation DeleteBidMutation($id: Int!) {
    deleteBid(id: $id) {
      id
    }
  }
`

interface Props {
  bid: NonNullable<FindBidById['bid']>
}

const Bid = ({ bid }: Props) => {
  const [deleteBid] = useMutation(DELETE_BID_MUTATION, {
    onCompleted: () => {
      toast.success('Bid deleted')
      navigate(routes.adminBids())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBidMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete bid ' + id + '?')) {
      deleteBid({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bid {bid.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bid.id}</td>
            </tr>
            <tr>
              <th>Offer id</th>
              <td>{bid.offerID}</td>
            </tr>
            <tr>
              <th>Investor id</th>
              <td>{bid.investorID}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(bid.status)}</td>
            </tr>
            <tr>
              <th>Rebid</th>
              <td>{checkboxInputTag(bid.rebid)}</td>
            </tr>
            <tr>
              <th>Capital available</th>
              <td>{bid.capitalAvailable}</td>
            </tr>
            <tr>
              <th>Equity needed</th>
              <td>{bid.equityNeeded}</td>
            </tr>
            <tr>
              <th>Counter capital</th>
              <td>{bid.counterCapital}</td>
            </tr>
            <tr>
              <th>Counter equity</th>
              <td>{bid.counterEquity}</td>
            </tr>
            <tr>
              <th>Can help with</th>
              <td>{bid.canHelpWith}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(bid.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(bid.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditBid({ id: bid.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bid.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Bid
