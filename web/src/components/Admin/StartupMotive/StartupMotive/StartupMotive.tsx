import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteStartupMotiveMutationVariables,
  FindStartupMotiveById,
} from 'types/graphql'

const DELETE_STARTUP_MOTIVE_MUTATION = gql`
  mutation DeleteStartupMotiveMutation($id: Int!) {
    deleteStartupMotive(id: $id) {
      id
    }
  }
`

interface Props {
  startupMotive: NonNullable<FindStartupMotiveById['startupMotive']>
}

const StartupMotive = ({ startupMotive }: Props) => {
  const [deleteStartupMotive] = useMutation(DELETE_STARTUP_MOTIVE_MUTATION, {
    onCompleted: () => {
      toast.success('StartupMotive deleted')
      navigate(routes.adminStartupMotives())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStartupMotiveMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete startupMotive ' + id + '?')) {
      deleteStartupMotive({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StartupMotive {startupMotive.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{startupMotive.id}</td>
            </tr>
            <tr>
              <th>Platform goal</th>
              <td>{formatEnum(startupMotive.platformGoal)}</td>
            </tr>
            <tr>
              <th>Refer source</th>
              <td>{formatEnum(startupMotive.referSource)}</td>
            </tr>
            <tr>
              <th>Preferred industry sectors</th>
              <td>{startupMotive.preferredIndustrySectors}</td>
            </tr>
            <tr>
              <th>Preferred investor levels</th>
              <td>{formatEnum(startupMotive.preferredInvestorLevels)}</td>
            </tr>
            <tr>
              <th>Preferred locations</th>
              <td>{startupMotive.preferredLocations}</td>
            </tr>
            <tr>
              <th>Promising returns mult</th>
              <td>{startupMotive.promisingReturnsMult}</td>
            </tr>
            <tr>
              <th>Promising timeline</th>
              <td>{startupMotive.promisingTimeline}</td>
            </tr>
            <tr>
              <th>Pitch deck url</th>
              <td>{startupMotive.pitchDeckURL}</td>
            </tr>
            <tr>
              <th>Demo url</th>
              <td>{startupMotive.demoURL}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(startupMotive.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(startupMotive.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStartupMotive({ id: startupMotive.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(startupMotive.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StartupMotive
