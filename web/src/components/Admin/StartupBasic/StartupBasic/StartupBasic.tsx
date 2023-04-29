import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupBasicMutationVariables,
  FindStartupBasicById,
} from 'types/graphql'

const DELETE_STARTUP_BASIC_MUTATION = gql`
  mutation DeleteStartupBasicMutation($id: Int!) {
    deleteStartupBasic(id: $id) {
      id
    }
  }
`

interface Props {
  startupBasic: NonNullable<FindStartupBasicById['startupBasic']>
}

const StartupBasic = ({ startupBasic }: Props) => {
  const [deleteStartupBasic] = useMutation(DELETE_STARTUP_BASIC_MUTATION, {
    onCompleted: () => {
      toast.success('StartupBasic deleted')
      navigate(routes.adminStartupBasics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStartupBasicMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startupBasic ' + id + '?')) {
      deleteStartupBasic({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StartupBasic {startupBasic.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startupBasic.id}</td>
            </tr>
            <tr>
              <th>Value prop</th>
              <td>{startupBasic.valueProp}</td>
            </tr>
            <tr>
              <th>Story</th>
              <td>{startupBasic.story}</td>
            </tr>
            <tr>
              <th>Why this business</th>
              <td>{startupBasic.whyThisBusiness}</td>
            </tr>
            <tr>
              <th>Is first startup</th>
              <td>{checkboxInputTag(startupBasic.isFirstStartup)}</td>
            </tr>
            <tr>
              <th>Mission</th>
              <td>{startupBasic.mission}</td>
            </tr>
            <tr>
              <th>Vision</th>
              <td>{startupBasic.vision}</td>
            </tr>
            <tr>
              <th>Startup size</th>
              <td>{formatEnum(startupBasic.startupSize)}</td>
            </tr>
            <tr>
              <th>Core values</th>
              <td>{startupBasic.coreValues}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startupBasic.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startupBasic.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartupBasic({ id: startupBasic.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startupBasic.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StartupBasic
