import type { FindKeyPeopleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KeyPeople from 'src/components/Admin/KeyPeople/KeyPeople'

export const QUERY = gql`
  query FindKeyPeopleById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>KeyPeople not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keyPeople }: CellSuccessProps<FindKeyPeopleById>) => {
  return <KeyPeople keyPeople={keyPeople} />
}
