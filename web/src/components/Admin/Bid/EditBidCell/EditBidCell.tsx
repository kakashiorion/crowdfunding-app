import type { EditBidById, UpdateBidInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BidForm from 'src/components/Admin/Bid/BidForm'

export const QUERY = gql`
  query EditBidById($id: Int!) {
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
const UPDATE_BID_MUTATION = gql`
  mutation UpdateBidMutation($id: Int!, $input: UpdateBidInput!) {
    updateBid(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bid }: CellSuccessProps<EditBidById>) => {
  const [updateBid, { loading, error }] = useMutation(UPDATE_BID_MUTATION, {
    onCompleted: () => {
      toast.success('Bid updated')
      navigate(routes.adminBids())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateBidInput, id: EditBidById['bid']['id']) => {
    updateBid({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Bid {bid?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BidForm bid={bid} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
