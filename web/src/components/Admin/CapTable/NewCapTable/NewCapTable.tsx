import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CapTableForm from 'src/components/Admin/CapTable/CapTableForm'

import type { CreateCapTableInput } from 'types/graphql'

const CREATE_CAP_TABLE_MUTATION = gql`
  mutation CreateCapTableMutation($input: CreateCapTableInput!) {
    createCapTable(input: $input) {
      id
    }
  }
`

const NewCapTable = () => {
  const [createCapTable, { loading, error }] = useMutation(
    CREATE_CAP_TABLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CapTable created')
        navigate(routes.adminCapTables())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCapTableInput) => {
    createCapTable({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CapTable</h2>
      </header>
      <div className="rw-segment-main">
        <CapTableForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCapTable
