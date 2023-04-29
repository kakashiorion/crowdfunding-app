import type { FindOfferById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Offer from 'src/components/Admin/Offer/Offer'

export const QUERY = gql`
  query FindOfferById($id: Int!) {
    offer: offer(id: $id) {
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

export const Empty = () => <div>Offer not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ offer }: CellSuccessProps<FindOfferById>) => {
  return <Offer offer={offer} />
}
