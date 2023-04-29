import type { FindBidById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Bid from 'src/components/Admin/Bid/Bid'

export const QUERY = gql`
  query FindBidById($id: Int!) {
    bid: bid(id: $id) {
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

export const Empty = () => <div>Bid not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bid }: CellSuccessProps<FindBidById>) => {
  return <Bid bid={bid} />
}
