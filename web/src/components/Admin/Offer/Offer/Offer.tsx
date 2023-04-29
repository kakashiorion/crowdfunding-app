import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type { DeleteOfferMutationVariables, FindOfferById } from 'types/graphql'

const DELETE_OFFER_MUTATION = gql`
  mutation DeleteOfferMutation($id: Int!) {
    deleteOffer(id: $id) {
      id
    }
  }
`

interface Props {
  offer: NonNullable<FindOfferById['offer']>
}

const Offer = ({ offer }: Props) => {
  const [deleteOffer] = useMutation(DELETE_OFFER_MUTATION, {
    onCompleted: () => {
      toast.success('Offer deleted')
      navigate(routes.adminOffers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteOfferMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete offer ' + id + '?')) {
      deleteOffer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Offer {offer.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{offer.id}</td>
            </tr>
            <tr>
              <th>Startup id</th>
              <td>{offer.startupID}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(offer.status)}</td>
            </tr>
            <tr>
              <th>Extended</th>
              <td>{checkboxInputTag(offer.extended)}</td>
            </tr>
            <tr>
              <th>Capital target lacs</th>
              <td>{offer.capitalTargetLacs}</td>
            </tr>
            <tr>
              <th>Equity being issued</th>
              <td>{offer.equityBeingIssued}</td>
            </tr>
            <tr>
              <th>Min ticket size lacs</th>
              <td>{offer.minTicketSizeLacs}</td>
            </tr>
            <tr>
              <th>Max ticket size lacs</th>
              <td>{offer.maxTicketSizeLacs}</td>
            </tr>
            <tr>
              <th>Number of investors</th>
              <td>{offer.numberOfInvestors}</td>
            </tr>
            <tr>
              <th>Will use funds for</th>
              <td>{offer.willUseFundsFor}</td>
            </tr>
            <tr>
              <th>Need help with</th>
              <td>{offer.needHelpWith}</td>
            </tr>
            <tr>
              <th>Timeline days</th>
              <td>{offer.timelineDays}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(offer.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(offer.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditOffer({ id: offer.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(offer.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Offer
