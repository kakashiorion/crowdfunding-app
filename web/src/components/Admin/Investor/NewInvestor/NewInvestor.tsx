import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorForm from 'src/components/Admin/Investor/InvestorForm'

import type { CreateInvestorInput } from 'types/graphql'

const CREATE_INVESTOR_MUTATION = gql`
  mutation CreateInvestorMutation($input: CreateInvestorInput!) {
    createInvestor(input: $input) {
      id
    }
  }
`

const NewInvestor = () => {
  const [createInvestor, { loading, error }] = useMutation(
    CREATE_INVESTOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Investor created')
        navigate(routes.adminInvestors())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvestorInput) => {
    createInvestor({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Investor</h2>
      </header>
      <div className="rw-segment-main">
        <InvestorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInvestor
