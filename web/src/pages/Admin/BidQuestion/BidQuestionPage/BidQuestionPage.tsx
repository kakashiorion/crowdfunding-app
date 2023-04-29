import BidQuestionCell from 'src/components/Admin/BidQuestion/BidQuestionCell'

type BidQuestionPageProps = {
  id: number
}

const BidQuestionPage = ({ id }: BidQuestionPageProps) => {
  return <BidQuestionCell id={id} />
}

export default BidQuestionPage
