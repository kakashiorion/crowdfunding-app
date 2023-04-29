import BidCell from 'src/components/Admin/Bid/BidCell'

type BidPageProps = {
  id: number
}

const BidPage = ({ id }: BidPageProps) => {
  return <BidCell id={id} />
}

export default BidPage
