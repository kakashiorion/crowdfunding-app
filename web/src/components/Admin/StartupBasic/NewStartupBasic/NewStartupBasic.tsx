import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupBasicForm from 'src/components/Admin/StartupBasic/StartupBasicForm'

import type { CreateStartupBasicInput } from 'types/graphql'

const CREATE_STARTUP_BASIC_MUTATION = gql`
  mutation CreateStartupBasicMutation($input: CreateStartupBasicInput!) {
    createStartupBasic(input: $input) {
      id
    }
  }
`

const NewStartupBasic = () => {
  const [createStartupBasic, { loading, error }] = useMutation(
    CREATE_STARTUP_BASIC_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBasic created')
        navigate(routes.adminStartupBasics())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupBasicInput) => {
    createStartupBasic({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StartupBasic</h2>
      </header>
      <div className="rw-segment-main">
        <StartupBasicForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStartupBasic
