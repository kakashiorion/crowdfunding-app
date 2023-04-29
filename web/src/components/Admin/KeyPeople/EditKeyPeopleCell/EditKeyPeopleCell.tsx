import type { EditKeyPeopleById, UpdateKeyPeopleInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeyPeopleForm from 'src/components/Admin/KeyPeople/KeyPeopleForm'

export const QUERY = gql`
  query EditKeyPeopleById($id: Int!) {
    keyPeople: keyPeople(id: $id) {
      id
      startupID
      name
      role
      writeup
      eduBG
      linkedInURL
      createdAt
      updatedAt
    }
  }
`
const UPDATE_KEY_PEOPLE_MUTATION = gql`
  mutation UpdateKeyPeopleMutation($id: Int!, $input: UpdateKeyPeopleInput!) {
    updateKeyPeople(id: $id, input: $input) {
      id
      startupID
      name
      role
      writeup
      eduBG
      linkedInURL
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keyPeople }: CellSuccessProps<EditKeyPeopleById>) => {
  const [updateKeyPeople, { loading, error }] = useMutation(
    UPDATE_KEY_PEOPLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('KeyPeople updated')
        navigate(routes.adminKeyPeoples())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateKeyPeopleInput,
    id: EditKeyPeopleById['keyPeople']['id']
  ) => {
    updateKeyPeople({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit KeyPeople {keyPeople?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <KeyPeopleForm
          keyPeople={keyPeople}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
