import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteIndustrySectorMutationVariables,
  FindIndustrySectorById,
} from 'types/graphql'

const DELETE_INDUSTRY_SECTOR_MUTATION = gql`
  mutation DeleteIndustrySectorMutation($id: Int!) {
    deleteIndustrySector(id: $id) {
      id
    }
  }
`

interface Props {
  industrySector: NonNullable<FindIndustrySectorById['industrySector']>
}

const IndustrySector = ({ industrySector }: Props) => {
  const [deleteIndustrySector] = useMutation(DELETE_INDUSTRY_SECTOR_MUTATION, {
    onCompleted: () => {
      toast.success('IndustrySector deleted')
      navigate(routes.adminIndustrySectors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteIndustrySectorMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete industrySector ' + id + '?')) {
      deleteIndustrySector({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            IndustrySector {industrySector.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{industrySector.id}</td>
            </tr>
            <tr>
              <th>Industry</th>
              <td>{formatEnum(industrySector.industry)}</td>
            </tr>
            <tr>
              <th>Sector</th>
              <td>{formatEnum(industrySector.sector)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(industrySector.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(industrySector.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditIndustrySector({ id: industrySector.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(industrySector.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default IndustrySector
