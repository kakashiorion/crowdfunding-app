import EditConversationCell from 'src/components/Admin/Conversation/EditConversationCell'

type ConversationPageProps = {
  id: number
}

const EditConversationPage = ({ id }: ConversationPageProps) => {
  return <EditConversationCell id={id} />
}

export default EditConversationPage
