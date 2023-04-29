import type { FindConversationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Conversation from 'src/components/Admin/Conversation/Conversation'

export const QUERY = gql`
  query FindConversationById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Conversation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  conversation,
}: CellSuccessProps<FindConversationById>) => {
  return <Conversation conversation={conversation} />
}
