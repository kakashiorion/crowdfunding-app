import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteKeyPeopleMutationVariables,
  FindKeyPeopleById,
} from 'types/graphql'

const DELETE_KEY_PEOPLE_MUTATION = gql`
  mutation DeleteKeyPeopleMutation($id: Int!) {
    deleteKeyPeople(id: $id) {
      id
    }
  }
`

interface Props {
  keyPeople: NonNullable<FindKeyPeopleById['keyPeople']>
}

const KeyPeople = ({ keyPeople }: Props) => {
  const [deleteKeyPeople] = useMutation(DELETE_KEY_PEOPLE_MUTATION, {
    onCompleted: () => {
      toast.success('KeyPeople deleted')
      navigate(routes.adminKeyPeoples())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteKeyPeopleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete keyPeople ' + id + '?')) {
      deleteKeyPeople({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            KeyPeople {keyPeople.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{keyPeople.id}</td>
            </tr>
            <tr>
              <th>Startup id</th>
              <td>{keyPeople.startupID}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{keyPeople.name}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{keyPeople.role}</td>
            </tr>
            <tr>
              <th>Writeup</th>
              <td>{keyPeople.writeup}</td>
            </tr>
            <tr>
              <th>Edu bg</th>
              <td>{formatEnum(keyPeople.eduBG)}</td>
            </tr>
            <tr>
              <th>Linked in url</th>
              <td>{keyPeople.linkedInURL}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(keyPeople.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(keyPeople.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditKeyPeople({ id: keyPeople.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(keyPeople.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default KeyPeople
