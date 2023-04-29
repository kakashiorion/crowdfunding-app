import ConversationCell from 'src/components/Admin/Conversation/ConversationCell'

type ConversationPageProps = {
  id: number
}

const ConversationPage = ({ id }: ConversationPageProps) => {
  return <ConversationCell id={id} />
}

export default ConversationPage
