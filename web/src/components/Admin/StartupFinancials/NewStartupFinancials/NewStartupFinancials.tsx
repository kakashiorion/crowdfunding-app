import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StartupFinancialsForm from 'src/components/Admin/StartupFinancials/StartupFinancialsForm'

import type { CreateStartupFinancialsInput } from 'types/graphql'

const CREATE_STARTUP_FINANCIALS_MUTATION = gql`
  mutation CreateStartupFinancialsMutation(
    $input: CreateStartupFinancialsInput!
  ) {
    createStartupFinancials(input: $input) {
      id
    }
  }
`

const NewStartupFinancials = () => {
  const [createStartupFinancials, { loading, error }] = useMutation(
    CREATE_STARTUP_FINANCIALS_MUTATION,
    {
      onCompleted: () => {
        toast.success('StartupFinancials created')
        navigate(routes.adminStartupFinancial())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStartupFinancialsInput) => {
    createStartupFinancials({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New StartupFinancials
        </h2>
      </header>
      <div className="rw-segment-main">
        <StartupFinancialsForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewStartupFinancials
