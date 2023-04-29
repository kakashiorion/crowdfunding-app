import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BidForm from 'src/components/Admin/Bid/BidForm'

import type { CreateBidInput } from 'types/graphql'

const CREATE_BID_MUTATION = gql`
  mutation CreateBidMutation($input: CreateBidInput!) {
    createBid(input: $input) {
      id
    }
  }
`

const NewBid = () => {
  const [createBid, { loading, error }] = useMutation(CREATE_BID_MUTATION, {
    onCompleted: () => {
      toast.success('Bid created')
      navigate(routes.adminBids())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateBidInput) => {
    createBid({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Bid</h2>
      </header>
      <div className="rw-segment-main">
        <BidForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBid