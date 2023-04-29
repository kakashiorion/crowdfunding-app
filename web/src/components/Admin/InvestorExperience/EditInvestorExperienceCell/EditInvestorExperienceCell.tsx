import type {
  EditInvestorExperienceById,
  UpdateInvestorExperienceInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorExperienceForm from 'src/components/Admin/InvestorExperience/InvestorExperienceForm'

export const QUERY = gql`
  query EditInvestorExperienceById($id: Int!) {
    investorExperience: investorExperience(id: $id) {
      id
      hasInvestedBefore
      hasFoundStartup
      hasWorkedInStartup
      riskApetite
      investorLevel
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVESTOR_EXPERIENCE_MUTATION = gql`
  mutation UpdateInvestorExperienceMutation(
    $id: Int!
    $input: UpdateInvestorExperienceInput!
  ) {
    updateInvestorExperience(id: $id, input: $input) {
      id
      hasInvestedBefore
      hasFoundStartup
      hasWorkedInStartup
      riskApetite
      investorLevel
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorExperience,
}: CellSuccessProps<EditInvestorExperienceById>) => {
  const [updateInvestorExperience, { loading, error }] = useMutation(
    UPDATE_INVESTOR_EXPERIENCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorExperience updated')
        navigate(routes.adminInvestorExperiences())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvestorExperienceInput,
    id: EditInvestorExperienceById['investorExperience']['id']
  ) => {
    updateInvestorExperience({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InvestorExperience {investorExperience?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorExperienceForm
          investorExperience={investorExperience}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
