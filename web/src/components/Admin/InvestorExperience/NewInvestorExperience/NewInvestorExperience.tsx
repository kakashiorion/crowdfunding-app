import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorExperienceForm from 'src/components/Admin/InvestorExperience/InvestorExperienceForm'

import type { CreateInvestorExperienceInput } from 'types/graphql'

const CREATE_INVESTOR_EXPERIENCE_MUTATION = gql`
  mutation CreateInvestorExperienceMutation(
    $input: CreateInvestorExperienceInput!
  ) {
    createInvestorExperience(input: $input) {
      id
    }
  }
`

const NewInvestorExperience = () => {
  const [createInvestorExperience, { loading, error }] = useMutation(
    CREATE_INVESTOR_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorExperience created')
        navigate(routes.adminInvestorExperiences())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvestorExperienceInput) => {
    createInvestorExperience({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New InvestorExperience
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorExperienceForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewInvestorExperience
