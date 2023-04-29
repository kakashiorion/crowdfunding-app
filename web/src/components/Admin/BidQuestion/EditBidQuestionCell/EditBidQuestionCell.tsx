import type { EditBidQuestionById, UpdateBidQuestionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BidQuestionForm from 'src/components/Admin/BidQuestion/BidQuestionForm'

export const QUERY = gql`
  query EditBidQuestionById($id: Int!) {
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
const UPDATE_BID_QUESTION_MUTATION = gql`
  mutation UpdateBidQuestionMutation(
    $id: Int!
    $input: UpdateBidQuestionInput!
  ) {
    updateBidQuestion(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  bidQuestion,
}: CellSuccessProps<EditBidQuestionById>) => {
  const [updateBidQuestion, { loading, error }] = useMutation(
    UPDATE_BID_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('BidQuestion updated')
        navigate(routes.adminBidQuestions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBidQuestionInput,
    id: EditBidQuestionById['bidQuestion']['id']
  ) => {
    updateBidQuestion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BidQuestion {bidQuestion?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BidQuestionForm
          bidQuestion={bidQuestion}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
