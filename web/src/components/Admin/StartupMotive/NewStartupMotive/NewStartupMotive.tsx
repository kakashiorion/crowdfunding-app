import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupMotiveForm from 'src/components/Admin/StartupMotive/StartupMotiveForm'

import type { CreateStartupMotiveInput } from 'types/graphql'

const CREATE_STARTUP_MOTIVE_MUTATION = gql`
  mutation CreateStartupMotiveMutation($input: CreateStartupMotiveInput!) {
    createStartupMotive(input: $input) {
      id
    }
  }
`

const NewStartupMotive = () => {
  const [createStartupMotive, { loading, error }] = useMutation(
    CREATE_STARTUP_MOTIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupMotive created')
        navigate(routes.adminStartupMotives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupMotiveInput) => {
    createStartupMotive({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StartupMotive</h2>
      </header>
      <div className="rw-segment-main">
        <StartupMotiveForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStartupMotive
