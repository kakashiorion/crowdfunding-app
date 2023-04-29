import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/User/UsersCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type { DeleteUserMutationVariables, FindUsers } from 'types/graphql'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const UsersList = ({ users }: FindUsers) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
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

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Hashed password</th>
            <th>Salt</th>
            <th>Reset token</th>
            <th>Reset token expires at</th>
            <th>Last login</th>
            <th>Profile pic url</th>
            <th>Mobile</th>
            <th>Otp</th>
            <th>Otp expires at</th>
            <th>Web authn challenge</th>
            <th>Type</th>
            <th>Is logged in</th>
            <th>Is onboarded</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{truncate(user.id)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.hashedPassword)}</td>
              <td>{truncate(user.salt)}</td>
              <td>{truncate(user.resetToken)}</td>
              <td>{timeTag(user.resetTokenExpiresAt)}</td>
              <td>{timeTag(user.lastLogin)}</td>
              <td>{truncate(user.profilePicURL)}</td>
              <td>{truncate(user.mobile)}</td>
              <td>{truncate(user.otp)}</td>
              <td>{timeTag(user.otpExpiresAt)}</td>
              <td>{truncate(user.webAuthnChallenge)}</td>
              <td>{formatEnum(user.type)}</td>
              <td>{checkboxInputTag(user.isLoggedIn)}</td>
              <td>{checkboxInputTag(user.isOnboarded)}</td>
              <td>{timeTag(user.createdAt)}</td>
              <td>{timeTag(user.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminUser({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditUser({ id: user.id })}
                    title={'Edit user ' + user.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete user ' + user.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(user.id)}
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

export default UsersList
