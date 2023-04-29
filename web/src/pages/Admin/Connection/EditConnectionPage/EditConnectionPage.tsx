import EditConnectionCell from 'src/components/Admin/Connection/EditConnectionCell'

type ConnectionPageProps = {
  id: number
}

const EditConnectionPage = ({ id }: ConnectionPageProps) => {
  return <EditConnectionCell id={id} />
}

export default EditConnectionPage
