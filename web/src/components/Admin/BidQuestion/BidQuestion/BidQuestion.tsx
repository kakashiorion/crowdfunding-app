import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteBidQuestionMutationVariables,
  FindBidQuestionById,
} from 'types/graphql'

const DELETE_BID_QUESTION_MUTATION = gql`
  mutation DeleteBidQuestionMutation($id: Int!) {
    deleteBidQuestion(id: $id) {
      id
    }
  }
`

interface Props {
  bidQuestion: NonNullable<FindBidQuestionById['bidQuestion']>
}

const BidQuestion = ({ bidQuestion }: Props) => {
  const [deleteBidQuestion] = useMutation(DELETE_BID_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('BidQuestion deleted')
      navigate(routes.adminBidQuestions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBidQuestionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete bidQuestion ' + id + '?')) {
      deleteBidQuestion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BidQuestion {bidQuestion.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bidQuestion.id}</td>
            </tr>
            <tr>
              <th>Bid id</th>
              <td>{bidQuestion.bidID}</td>
            </tr>
            <tr>
              <th>Question</th>
              <td>{bidQuestion.question}</td>
            </tr>
            <tr>
              <th>Answered</th>
              <td>{checkboxInputTag(bidQuestion.answered)}</td>
            </tr>
            <tr>
              <th>Answer</th>
              <td>{bidQuestion.answer}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(bidQuestion.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(bidQuestion.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditBidQuestion({ id: bidQuestion.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bidQuestion.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BidQuestion
