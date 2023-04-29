import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteMessageMutationVariables,
  FindMessageById,
} from 'types/graphql'

const DELETE_MESSAGE_MUTATION = gql`
  mutation DeleteMessageMutation($id: Int!) {
    deleteMessage(id: $id) {
      id
    }
  }
`

interface Props {
  message: NonNullable<FindMessageById['message']>
}

const Message = ({ message }: Props) => {
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Message deleted')
      navigate(routes.adminMessages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMessageMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete message ' + id + '?')) {
      deleteMessage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Message {message.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{message.id}</td>
            </tr>
            <tr>
              <th>Conversation id</th>
              <td>{message.conversationID}</td>
            </tr>
            <tr>
              <th>Sender id</th>
              <td>{message.senderID}</td>
            </tr>
            <tr>
              <th>Receiver id</th>
              <td>{message.receiverID}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{message.content}</td>
            </tr>
            <tr>
              <th>Attachment url</th>
              <td>{message.attachmentURL}</td>
            </tr>
            <tr>
              <th>Unread</th>
              <td>{checkboxInputTag(message.unread)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(message.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(message.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditMessage({ id: message.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(message.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Message
