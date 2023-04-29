import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConnectionForm from 'src/components/Admin/Connection/ConnectionForm'

import type { CreateConnectionInput } from 'types/graphql'

const CREATE_CONNECTION_MUTATION = gql`
  mutation CreateConnectionMutation($input: CreateConnectionInput!) {
    createConnection(input: $input) {
      id
    }
  }
`

const NewConnection = () => {
  const [createConnection, { loading, error }] = useMutation(
    CREATE_CONNECTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Connection created')
        navigate(routes.adminConnections())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateConnectionInput) => {
    createConnection({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Connection</h2>
      </header>
      <div className="rw-segment-main">
        <ConnectionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConnection
