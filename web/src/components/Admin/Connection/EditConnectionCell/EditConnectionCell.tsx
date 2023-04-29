import type { EditConnectionById, UpdateConnectionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConnectionForm from 'src/components/Admin/Connection/ConnectionForm'

export const QUERY = gql`
  query EditConnectionById($id: Int!) {
    connection: connection(id: $id) {
      id
      requesterID
      accepterID
      status
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CONNECTION_MUTATION = gql`
  mutation UpdateConnectionMutation($id: Int!, $input: UpdateConnectionInput!) {
    updateConnection(id: $id, input: $input) {
      id
      requesterID
      accepterID
      status
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  connection,
}: CellSuccessProps<EditConnectionById>) => {
  const [updateConnection, { loading, error }] = useMutation(
    UPDATE_CONNECTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Connection updated')
        navigate(routes.adminConnections())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateConnectionInput,
    id: EditConnectionById['connection']['id']
  ) => {
    updateConnection({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Connection {connection?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ConnectionForm
          connection={connection}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
