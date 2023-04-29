import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IndustrySectorForm from 'src/components/Admin/IndustrySector/IndustrySectorForm'

import type { CreateIndustrySectorInput } from 'types/graphql'

const CREATE_INDUSTRY_SECTOR_MUTATION = gql`
  mutation CreateIndustrySectorMutation($input: CreateIndustrySectorInput!) {
    createIndustrySector(input: $input) {
      id
    }
  }
`

const NewIndustrySector = () => {
  const [createIndustrySector, { loading, error }] = useMutation(
    CREATE_INDUSTRY_SECTOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('IndustrySector created')
        navigate(routes.adminIndustrySectors())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateIndustrySectorInput) => {
    createIndustrySector({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New IndustrySector</h2>
      </header>
      <div className="rw-segment-main">
        <IndustrySectorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIndustrySector
