import type {
  EditConversationById,
  UpdateConversationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConversationForm from 'src/components/Admin/Conversation/ConversationForm'

export const QUERY = gql`
  query EditConversationById($id: Int!) {
    conversation: conversation(id: $id) {
      id
      conversationStarterID
      conversationResponderID
      isFavoriteByStarter
      isFavoriteByResponder
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CONVERSATION_MUTATION = gql`
  mutation UpdateConversationMutation(
    $id: Int!
    $input: UpdateConversationInput!
  ) {
    updateConversation(id: $id, input: $input) {
      id
      conversationStarterID
      conversationResponderID
      isFavoriteByStarter
      isFavoriteByResponder
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
  conversation,
}: CellSuccessProps<EditConversationById>) => {
  const [updateConversation, { loading, error }] = useMutation(
    UPDATE_CONVERSATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Conversation updated')
        navigate(routes.adminConversations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateConversationInput,
    id: EditConversationById['conversation']['id']
  ) => {
    updateConversation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Conversation {conversation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ConversationForm
          conversation={conversation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
