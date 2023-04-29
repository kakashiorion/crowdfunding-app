import type { FindOffers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Offers from 'src/components/Admin/Offer/Offers'

export const QUERY = gql`
  query FindOffers {
    offers {
      id
      startupID
      status
      extended
      capitalTargetLacs
      equityBeingIssued
      minTicketSizeLacs
      maxTicketSizeLacs
      numberOfInvestors
      willUseFundsFor
      needHelpWith
      timelineDays
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No offers yet. '}
      <Link to={routes.adminNewOffer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ offers }: CellSuccessProps<FindOffers>) => {
  return <Offers offers={offers} />
}
