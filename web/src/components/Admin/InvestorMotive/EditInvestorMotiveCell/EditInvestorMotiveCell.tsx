import type {
  EditInvestorMotiveById,
  UpdateInvestorMotiveInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvestorMotiveForm from 'src/components/Admin/InvestorMotive/InvestorMotiveForm'

export const QUERY = gql`
  query EditInvestorMotiveById($id: Int!) {
    investorMotive: investorMotive(id: $id) {
      id
      preferredIndustrySectors
      prefferedCapitalToInvest
      preferredFundingStage
      preferredStartupTeamSize
      preferredTimelineMonths
      preferredReturnsMult
      preferredLocations
      reasonForInvesting
      platformGoal
      referSource
      createdAt
      updatedAt
    }
  }
`
const UPDATE_INVESTOR_MOTIVE_MUTATION = gql`
  mutation UpdateInvestorMotiveMutation(
    $id: Int!
    $input: UpdateInvestorMotiveInput!
  ) {
    updateInvestorMotive(id: $id, input: $input) {
      id
      preferredIndustrySectors
      prefferedCapitalToInvest
      preferredFundingStage
      preferredStartupTeamSize
      preferredTimelineMonths
      preferredReturnsMult
      preferredLocations
      reasonForInvesting
      platformGoal
      referSource
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
  investorMotive,
}: CellSuccessProps<EditInvestorMotiveById>) => {
  const [updateInvestorMotive, { loading, error }] = useMutation(
    UPDATE_INVESTOR_MOTIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('InvestorMotive updated')
        navigate(routes.adminInvestorMotives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvestorMotiveInput,
    id: EditInvestorMotiveById['investorMotive']['id']
  ) => {
    updateInvestorMotive({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InvestorMotive {investorMotive?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InvestorMotiveForm
          investorMotive={investorMotive}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
