import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Conversation/ConversationsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteConversationMutationVariables,
  FindConversations,
} from 'types/graphql'

const DELETE_CONVERSATION_MUTATION = gql`
  mutation DeleteConversationMutation($id: Int!) {
    deleteConversation(id: $id) {
      id
    }
  }
`

const ConversationsList = ({ conversations }: FindConversations) => {
  const [deleteConversation] = useMutation(DELETE_CONVERSATION_MUTATION, {
    onCompleted: () => {
      toast.success('Conversation deleted')
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

  const onDeleteClick = (id: DeleteConversationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete conversation ' + id + '?')) {
      deleteConversation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Conversation starter id</th>
            <th>Conversation responder id</th>
            <th>Is favorite by starter</th>
            <th>Is favorite by responder</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map((conversation) => (
            <tr key={conversation.id}>
              <td>{truncate(conversation.id)}</td>
              <td>{truncate(conversation.conversationStarterID)}</td>
              <td>{truncate(conversation.conversationResponderID)}</td>
              <td>{checkboxInputTag(conversation.isFavoriteByStarter)}</td>
              <td>{checkboxInputTag(conversation.isFavoriteByResponder)}</td>
              <td>{timeTag(conversation.createdAt)}</td>
              <td>{timeTag(conversation.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminConversation({ id: conversation.id })}
                    title={'Show conversation ' + conversation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditConversation({ id: conversation.id })}
                    title={'Edit conversation ' + conversation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete conversation ' + conversation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(conversation.id)}
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

export default ConversationsList
