import type { FindConversations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Conversations from 'src/components/Admin/Conversation/Conversations'

export const QUERY = gql`
  query FindConversations {
    conversations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No conversations yet. '}
      <Link to={routes.adminNewConversation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  conversations,
}: CellSuccessProps<FindConversations>) => {
  return <Conversations conversations={conversations} />
}
