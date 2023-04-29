import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/BidQuestion/BidQuestionsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteBidQuestionMutationVariables,
  FindBidQuestions,
} from 'types/graphql'

const DELETE_BID_QUESTION_MUTATION = gql`
  mutation DeleteBidQuestionMutation($id: Int!) {
    deleteBidQuestion(id: $id) {
      id
    }
  }
`

const BidQuestionsList = ({ bidQuestions }: FindBidQuestions) => {
  const [deleteBidQuestion] = useMutation(DELETE_BID_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('BidQuestion deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteBidQuestionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete bidQuestion ' + id + '?')) {
      deleteBidQuestion({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Bid id</th>
            <th>Question</th>
            <th>Answered</th>
            <th>Answer</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bidQuestions.map((bidQuestion) => (
            <tr key={bidQuestion.id}>
              <td>{truncate(bidQuestion.id)}</td>
              <td>{truncate(bidQuestion.bidID)}</td>
              <td>{truncate(bidQuestion.question)}</td>
              <td>{checkboxInputTag(bidQuestion.answered)}</td>
              <td>{truncate(bidQuestion.answer)}</td>
              <td>{timeTag(bidQuestion.createdAt)}</td>
              <td>{timeTag(bidQuestion.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminBidQuestion({ id: bidQuestion.id })}
                    title={'Show bidQuestion ' + bidQuestion.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditBidQuestion({ id: bidQuestion.id })}
                    title={'Edit bidQuestion ' + bidQuestion.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete bidQuestion ' + bidQuestion.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bidQuestion.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BidQuestionsList
