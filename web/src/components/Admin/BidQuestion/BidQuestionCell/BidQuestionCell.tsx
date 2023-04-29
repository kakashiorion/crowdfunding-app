import type { FindBidQuestionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BidQuestion from 'src/components/Admin/BidQuestion/BidQuestion'

export const QUERY = gql`
  query FindBidQuestionById($id: Int!) {
    bidQuestion: bidQuestion(id: $id) {
      id
      bidID
      question
      answered
      answer
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BidQuestion not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  bidQuestion,
}: CellSuccessProps<FindBidQuestionById>) => {
  return <BidQuestion bidQuestion={bidQuestion} />
}
