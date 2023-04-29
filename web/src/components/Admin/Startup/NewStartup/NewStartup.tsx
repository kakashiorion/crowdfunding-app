import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupForm from 'src/components/Admin/Startup/StartupForm'

import type { CreateStartupInput } from 'types/graphql'

const CREATE_STARTUP_MUTATION = gql`
  mutation CreateStartupMutation($input: CreateStartupInput!) {
    createStartup(input: $input) {
      id
    }
  }
`

const NewStartup = () => {
  const [createStartup, { loading, error }] = useMutation(
    CREATE_STARTUP_MUTATION,
    {
      onCompleted: () => {
        toast.success('Startup created')
        navigate(routes.adminStartups())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupInput) => {
    createStartup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Startup</h2>
      </header>
      <div className="rw-segment-main">
        <StartupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStartup
