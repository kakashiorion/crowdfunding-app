import type { EditOfferById, UpdateOfferInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OfferForm from 'src/components/Admin/Offer/OfferForm'

export const QUERY = gql`
  query EditOfferById($id: Int!) {
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
const UPDATE_OFFER_MUTATION = gql`
  mutation UpdateOfferMutation($id: Int!, $input: UpdateOfferInput!) {
    updateOffer(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ offer }: CellSuccessProps<EditOfferById>) => {
  const [updateOffer, { loading, error }] = useMutation(UPDATE_OFFER_MUTATION, {
    onCompleted: () => {
      toast.success('Offer updated')
      navigate(routes.adminOffers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateOfferInput,
    id: EditOfferById['offer']['id']
  ) => {
    updateOffer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Offer {offer?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OfferForm
          offer={offer}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
