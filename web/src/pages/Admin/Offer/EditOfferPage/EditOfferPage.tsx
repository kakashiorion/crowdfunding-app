import EditOfferCell from 'src/components/Admin/Offer/EditOfferCell'

type OfferPageProps = {
  id: number
}

const EditOfferPage = ({ id }: OfferPageProps) => {
  return <EditOfferCell id={id} />
}

export default EditOfferPage
