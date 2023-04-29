import EditBidQuestionCell from 'src/components/Admin/BidQuestion/EditBidQuestionCell'

type BidQuestionPageProps = {
  id: number
}

const EditBidQuestionPage = ({ id }: BidQuestionPageProps) => {
  return <EditBidQuestionCell id={id} />
}

export default EditBidQuestionPage
