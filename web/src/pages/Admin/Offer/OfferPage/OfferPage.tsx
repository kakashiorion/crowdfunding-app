import OfferCell from 'src/components/Admin/Offer/OfferCell'

type OfferPageProps = {
  id: number
}

const OfferPage = ({ id }: OfferPageProps) => {
  return <OfferCell id={id} />
}

export default OfferPage
