import type { FindBids } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Bids from 'src/components/Admin/Bid/Bids'

export const QUERY = gql`
  query FindBids {
    bids {
      id
      offerID
      investorID
      status
      rebid
      capitalAvailable
      equityNeeded
      counterCapital
      counterEquity
      canHelpWith
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bids yet. '}
      <Link to={routes.adminNewBid()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bids }: CellSuccessProps<FindBids>) => {
  return <Bids bids={bids} />
}
