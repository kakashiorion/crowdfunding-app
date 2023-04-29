import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConversationForm from 'src/components/Admin/Conversation/ConversationForm'

import type { CreateConversationInput } from 'types/graphql'

const CREATE_CONVERSATION_MUTATION = gql`
  mutation CreateConversationMutation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
    }
  }
`

const NewConversation = () => {
  const [createConversation, { loading, error }] = useMutation(
    CREATE_CONVERSATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Conversation created')
        navigate(routes.adminConversations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateConversationInput) => {
    createConversation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Conversation</h2>
      </header>
      <div className="rw-segment-main">
        <ConversationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConversation
