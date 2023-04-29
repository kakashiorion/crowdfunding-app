import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestedCompanyForm from 'src/components/Admin/InvestedCompany/InvestedCompanyForm'

import type { CreateInvestedCompanyInput } from 'types/graphql'

const CREATE_INVESTED_COMPANY_MUTATION = gql`
  mutation CreateInvestedCompanyMutation($input: CreateInvestedCompanyInput!) {
    createInvestedCompany(input: $input) {
      id
    }
  }
`

const NewInvestedCompany = () => {
  const [createInvestedCompany, { loading, error }] = useMutation(
    CREATE_INVESTED_COMPANY_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestedCompany created')
        navigate(routes.adminInvestedCompanies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvestedCompanyInput) => {
    createInvestedCompany({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New InvestedCompany</h2>
      </header>
      <div className="rw-segment-main">
        <InvestedCompanyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInvestedCompany
