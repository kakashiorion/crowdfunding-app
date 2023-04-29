import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Bid/BidsCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type { DeleteBidMutationVariables, FindBids } from 'types/graphql'

const DELETE_BID_MUTATION = gql`
  mutation DeleteBidMutation($id: Int!) {
    deleteBid(id: $id) {
      id
    }
  }
`

const BidsList = ({ bids }: FindBids) => {
  const [deleteBid] = useMutation(DELETE_BID_MUTATION, {
    onCompleted: () => {
      toast.success('Bid deleted')
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

  const onDeleteClick = (id: DeleteBidMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete bid ' + id + '?')) {
      deleteBid({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Offer id</th>
            <th>Investor id</th>
            <th>Status</th>
            <th>Rebid</th>
            <th>Capital available</th>
            <th>Equity needed</th>
            <th>Counter capital</th>
            <th>Counter equity</th>
            <th>Can help with</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.id}>
              <td>{truncate(bid.id)}</td>
              <td>{truncate(bid.offerID)}</td>
              <td>{truncate(bid.investorID)}</td>
              <td>{formatEnum(bid.status)}</td>
              <td>{checkboxInputTag(bid.rebid)}</td>
              <td>{truncate(bid.capitalAvailable)}</td>
              <td>{truncate(bid.equityNeeded)}</td>
              <td>{truncate(bid.counterCapital)}</td>
              <td>{truncate(bid.counterEquity)}</td>
              <td>{truncate(bid.canHelpWith)}</td>
              <td>{timeTag(bid.createdAt)}</td>
              <td>{timeTag(bid.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminBid({ id: bid.id })}
                    title={'Show bid ' + bid.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditBid({ id: bid.id })}
                    title={'Edit bid ' + bid.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete bid ' + bid.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bid.id)}
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

export default BidsList
