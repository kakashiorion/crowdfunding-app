import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorMotiveForm from 'src/components/Admin/InvestorMotive/InvestorMotiveForm'

import type { CreateInvestorMotiveInput } from 'types/graphql'

const CREATE_INVESTOR_MOTIVE_MUTATION = gql`
  mutation CreateInvestorMotiveMutation($input: CreateInvestorMotiveInput!) {
    createInvestorMotive(input: $input) {
      id
    }
  }
`

const NewInvestorMotive = () => {
  const [createInvestorMotive, { loading, error }] = useMutation(
    CREATE_INVESTOR_MOTIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorMotive created')
        navigate(routes.adminInvestorMotives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvestorMotiveInput) => {
    createInvestorMotive({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New InvestorMotive</h2>
      </header>
      <div className="rw-segment-main">
        <InvestorMotiveForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInvestorMotive
