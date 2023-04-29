import EditBidCell from 'src/components/Admin/Bid/EditBidCell'

type BidPageProps = {
  id: number
}

const EditBidPage = ({ id }: BidPageProps) => {
  return <EditBidCell id={id} />
}

export default EditBidPage
