import EditPostCell from 'src/components/Admin/Post/EditPostCell'

type PostPageProps = {
  id: number
}

const EditPostPage = ({ id }: PostPageProps) => {
  return <EditPostCell id={id} />
}

export default EditPostPage
