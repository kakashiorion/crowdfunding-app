import type { FindBidQuestions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BidQuestions from 'src/components/Admin/BidQuestion/BidQuestions'

export const QUERY = gql`
  query FindBidQuestions {
    bidQuestions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bidQuestions yet. '}
      <Link to={routes.adminNewBidQuestion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  bidQuestions,
}: CellSuccessProps<FindBidQuestions>) => {
  return <BidQuestions bidQuestions={bidQuestions} />
}
