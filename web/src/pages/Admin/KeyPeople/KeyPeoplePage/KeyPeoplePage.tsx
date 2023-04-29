import KeyPeopleCell from 'src/components/Admin/KeyPeople/KeyPeopleCell'

type KeyPeoplePageProps = {
  id: number
}

const KeyPeoplePage = ({ id }: KeyPeoplePageProps) => {
  return <KeyPeopleCell id={id} />
}

export default KeyPeoplePage
