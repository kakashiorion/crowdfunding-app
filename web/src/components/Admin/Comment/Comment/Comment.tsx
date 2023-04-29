import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCommentMutationVariables,
  FindCommentById,
} from 'types/graphql'

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

interface Props {
  comment: NonNullable<FindCommentById['comment']>
}

const Comment = ({ comment }: Props) => {
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Comment deleted')
      navigate(routes.adminComments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCommentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete comment ' + id + '?')) {
      deleteComment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Comment {comment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{comment.id}</td>
            </tr>
            <tr>
              <th>Commenter id</th>
              <td>{comment.commenterID}</td>
            </tr>
            <tr>
              <th>Post id</th>
              <td>{comment.postID}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{comment.content}</td>
            </tr>
            <tr>
              <th>Attachment url</th>
              <td>{comment.attachmentURL}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(comment.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(comment.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditComment({ id: comment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(comment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Comment
