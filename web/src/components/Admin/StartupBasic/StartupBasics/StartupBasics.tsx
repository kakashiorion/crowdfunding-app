import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/StartupBasic/StartupBasicsCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

import type {
  DeleteStartupBasicMutationVariables,
  FindStartupBasics,
} from 'types/graphql'

const DELETE_STARTUP_BASIC_MUTATION = gql`
  mutation DeleteStartupBasicMutation($id: Int!) {
    deleteStartupBasic(id: $id) {
      id
    }
  }
`

const StartupBasicsList = ({ startupBasics }: FindStartupBasics) => {
  const [deleteStartupBasic] = useMutation(DELETE_STARTUP_BASIC_MUTATION, {
    onCompleted: () => {
      toast.success('StartupBasic deleted')
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

  const onDeleteClick = (id: DeleteStartupBasicMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startupBasic ' + id + '?')) {
      deleteStartupBasic({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Value prop</th>
            <th>Story</th>
            <th>Why this business</th>
            <th>Is first startup</th>
            <th>Mission</th>
            <th>Vision</th>
            <th>Startup size</th>
            <th>Core values</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {startupBasics.map((startupBasic) => (
            <tr key={startupBasic.id}>
              <td>{truncate(startupBasic.id)}</td>
              <td>{truncate(startupBasic.valueProp)}</td>
              <td>{truncate(startupBasic.story)}</td>
              <td>{truncate(startupBasic.whyThisBusiness)}</td>
              <td>{checkboxInputTag(startupBasic.isFirstStartup)}</td>
              <td>{truncate(startupBasic.mission)}</td>
              <td>{truncate(startupBasic.vision)}</td>
              <td>{formatEnum(startupBasic.startupSize)}</td>
              <td>{truncate(startupBasic.coreValues)}</td>
              <td>{timeTag(startupBasic.createdAt)}</td>
              <td>{timeTag(startupBasic.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStartupBasic({ id: startupBasic.id })}
                    title={'Show startupBasic ' + startupBasic.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStartupBasic({ id: startupBasic.id })}
                    title={'Edit startupBasic ' + startupBasic.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete startupBasic ' + startupBasic.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(startupBasic.id)}
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

export default StartupBasicsList
