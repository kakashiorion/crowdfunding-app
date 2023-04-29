import EditKeyPeopleCell from 'src/components/Admin/KeyPeople/EditKeyPeopleCell'

type KeyPeoplePageProps = {
  id: number
}

const EditKeyPeoplePage = ({ id }: KeyPeoplePageProps) => {
  return <EditKeyPeopleCell id={id} />
}

export default EditKeyPeoplePage
