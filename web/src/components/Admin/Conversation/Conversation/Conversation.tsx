import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

import type {
  DeleteConversationMutationVariables,
  FindConversationById,
} from 'types/graphql'

const DELETE_CONVERSATION_MUTATION = gql`
  mutation DeleteConversationMutation($id: Int!) {
    deleteConversation(id: $id) {
      id
    }
  }
`

interface Props {
  conversation: NonNullable<FindConversationById['conversation']>
}

const Conversation = ({ conversation }: Props) => {
  const [deleteConversation] = useMutation(DELETE_CONVERSATION_MUTATION, {
    onCompleted: () => {
      toast.success('Conversation deleted')
      navigate(routes.adminConversations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteConversationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete conversation ' + id + '?')) {
      deleteConversation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Conversation {conversation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{conversation.id}</td>
            </tr>
            <tr>
              <th>Conversation starter id</th>
              <td>{conversation.conversationStarterID}</td>
            </tr>
            <tr>
              <th>Conversation responder id</th>
              <td>{conversation.conversationResponderID}</td>
            </tr>
            <tr>
              <th>Is favorite by starter</th>
              <td>{checkboxInputTag(conversation.isFavoriteByStarter)}</td>
            </tr>
            <tr>
              <th>Is favorite by responder</th>
              <td>{checkboxInputTag(conversation.isFavoriteByResponder)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(conversation.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(conversation.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditConversation({ id: conversation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(conversation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Conversation
