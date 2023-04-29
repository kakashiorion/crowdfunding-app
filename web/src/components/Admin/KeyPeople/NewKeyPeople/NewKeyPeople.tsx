import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeyPeopleForm from 'src/components/Admin/KeyPeople/KeyPeopleForm'

import type { CreateKeyPeopleInput } from 'types/graphql'

const CREATE_KEY_PEOPLE_MUTATION = gql`
  mutation CreateKeyPeopleMutation($input: CreateKeyPeopleInput!) {
    createKeyPeople(input: $input) {
      id
    }
  }
`

const NewKeyPeople = () => {
  const [createKeyPeople, { loading, error }] = useMutation(
    CREATE_KEY_PEOPLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('KeyPeople created')
        navigate(routes.adminKeyPeoples())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateKeyPeopleInput) => {
    createKeyPeople({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New KeyPeople</h2>
      </header>
      <div className="rw-segment-main">
        <KeyPeopleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewKeyPeople
