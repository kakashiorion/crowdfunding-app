import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/IndustrySector/IndustrySectorsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteIndustrySectorMutationVariables,
  FindIndustrySectors,
} from 'types/graphql'

const DELETE_INDUSTRY_SECTOR_MUTATION = gql`
  mutation DeleteIndustrySectorMutation($id: Int!) {
    deleteIndustrySector(id: $id) {
      id
    }
  }
`

const IndustrySectorsList = ({ industrySectors }: FindIndustrySectors) => {
  const [deleteIndustrySector] = useMutation(DELETE_INDUSTRY_SECTOR_MUTATION, {
    onCompleted: () => {
      toast.success('IndustrySector deleted')
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

  const onDeleteClick = (id: DeleteIndustrySectorMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete industrySector ' + id + '?')) {
      deleteIndustrySector({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Industry</th>
            <th>Sector</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {industrySectors.map((industrySector) => (
            <tr key={industrySector.id}>
              <td>{truncate(industrySector.id)}</td>
              <td>{formatEnum(industrySector.industry)}</td>
              <td>{formatEnum(industrySector.sector)}</td>
              <td>{timeTag(industrySector.createdAt)}</td>
              <td>{timeTag(industrySector.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminIndustrySector({ id: industrySector.id })}
                    title={
                      'Show industrySector ' + industrySector.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditIndustrySector({
                      id: industrySector.id,
                    })}
                    title={'Edit industrySector ' + industrySector.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete industrySector ' + industrySector.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(industrySector.id)}
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

export default IndustrySectorsList
