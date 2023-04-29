import EditUserCell from 'src/components/Admin/User/EditUserCell'

type UserPageProps = {
  id: number
}

const EditUserPage = ({ id }: UserPageProps) => {
  return <EditUserCell id={id} />
}

export default EditUserPage
