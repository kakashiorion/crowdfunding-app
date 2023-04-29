import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupBusinessForm from 'src/components/Admin/StartupBusiness/StartupBusinessForm'

import type { CreateStartupBusinessInput } from 'types/graphql'

const CREATE_STARTUP_BUSINESS_MUTATION = gql`
  mutation CreateStartupBusinessMutation($input: CreateStartupBusinessInput!) {
    createStartupBusiness(input: $input) {
      id
    }
  }
`

const NewStartupBusiness = () => {
  const [createStartupBusiness, { loading, error }] = useMutation(
    CREATE_STARTUP_BUSINESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupBusiness created')
        navigate(routes.adminStartupBusinesses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupBusinessInput) => {
    createStartupBusiness({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StartupBusiness</h2>
      </header>
      <div className="rw-segment-main">
        <StartupBusinessForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStartupBusiness
