import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Offer/OffersCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type { DeleteOfferMutationVariables, FindOffers } from 'types/graphql'

const DELETE_OFFER_MUTATION = gql`
  mutation DeleteOfferMutation($id: Int!) {
    deleteOffer(id: $id) {
      id
    }
  }
`

const OffersList = ({ offers }: FindOffers) => {
  const [deleteOffer] = useMutation(DELETE_OFFER_MUTATION, {
    onCompleted: () => {
      toast.success('Offer deleted')
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

  const onDeleteClick = (id: DeleteOfferMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete offer ' + id + '?')) {
      deleteOffer({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Startup id</th>
            <th>Status</th>
            <th>Extended</th>
            <th>Capital target lacs</th>
            <th>Equity being issued</th>
            <th>Min ticket size lacs</th>
            <th>Max ticket size lacs</th>
            <th>Number of investors</th>
            <th>Will use funds for</th>
            <th>Need help with</th>
            <th>Timeline days</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{truncate(offer.id)}</td>
              <td>{truncate(offer.startupID)}</td>
              <td>{formatEnum(offer.status)}</td>
              <td>{checkboxInputTag(offer.extended)}</td>
              <td>{truncate(offer.capitalTargetLacs)}</td>
              <td>{truncate(offer.equityBeingIssued)}</td>
              <td>{truncate(offer.minTicketSizeLacs)}</td>
              <td>{truncate(offer.maxTicketSizeLacs)}</td>
              <td>{truncate(offer.numberOfInvestors)}</td>
              <td>{truncate(offer.willUseFundsFor)}</td>
              <td>{truncate(offer.needHelpWith)}</td>
              <td>{truncate(offer.timelineDays)}</td>
              <td>{timeTag(offer.createdAt)}</td>
              <td>{timeTag(offer.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminOffer({ id: offer.id })}
                    title={'Show offer ' + offer.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditOffer({ id: offer.id })}
                    title={'Edit offer ' + offer.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete offer ' + offer.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(offer.id)}
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

export default OffersList
