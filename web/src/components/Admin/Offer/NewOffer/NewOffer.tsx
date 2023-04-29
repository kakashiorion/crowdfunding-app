import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OfferForm from 'src/components/Admin/Offer/OfferForm'

import type { CreateOfferInput } from 'types/graphql'

const CREATE_OFFER_MUTATION = gql`
  mutation CreateOfferMutation($input: CreateOfferInput!) {
    createOffer(input: $input) {
      id
    }
  }
`

const NewOffer = () => {
  const [createOffer, { loading, error }] = useMutation(CREATE_OFFER_MUTATION, {
    onCompleted: () => {
      toast.success('Offer created')
      navigate(routes.adminOffers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateOfferInput) => {
    createOffer({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Offer</h2>
      </header>
      <div className="rw-segment-main">
        <OfferForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOffer
