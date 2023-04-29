import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/KeyPeople/KeyPeoplesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteKeyPeopleMutationVariables,
  FindKeyPeoples,
} from 'types/graphql'

const DELETE_KEY_PEOPLE_MUTATION = gql`
  mutation DeleteKeyPeopleMutation($id: Int!) {
    deleteKeyPeople(id: $id) {
      id
    }
  }
`

const KeyPeoplesList = ({ keyPeoples }: FindKeyPeoples) => {
  const [deleteKeyPeople] = useMutation(DELETE_KEY_PEOPLE_MUTATION, {
    onCompleted: () => {
      toast.success('KeyPeople deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteKeyPeopleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete keyPeople ' + id + '?')) {
      deleteKeyPeople({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Startup id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Writeup</th>
            <th>Edu bg</th>
            <th>Linked in url</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {keyPeoples.map((keyPeople) => (
            <tr key={keyPeople.id}>
              <td>{truncate(keyPeople.id)}</td>
              <td>{truncate(keyPeople.startupID)}</td>
              <td>{truncate(keyPeople.name)}</td>
              <td>{truncate(keyPeople.role)}</td>
              <td>{truncate(keyPeople.writeup)}</td>
              <td>{formatEnum(keyPeople.eduBG)}</td>
              <td>{truncate(keyPeople.linkedInURL)}</td>
              <td>{timeTag(keyPeople.createdAt)}</td>
              <td>{timeTag(keyPeople.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminKeyPeople({ id: keyPeople.id })}
                    title={'Show keyPeople ' + keyPeople.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditKeyPeople({ id: keyPeople.id })}
                    title={'Edit keyPeople ' + keyPeople.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete keyPeople ' + keyPeople.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(keyPeople.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KeyPeoplesList
