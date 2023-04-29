import type { FindKeyPeoples } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KeyPeoples from 'src/components/Admin/KeyPeople/KeyPeoples'

export const QUERY = gql`
  query FindKeyPeoples {
    keyPeoples {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No keyPeoples yet. '}
      <Link to={routes.adminNewKeyPeople()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keyPeoples }: CellSuccessProps<FindKeyPeoples>) => {
  return <KeyPeoples keyPeoples={keyPeoples} />
}
