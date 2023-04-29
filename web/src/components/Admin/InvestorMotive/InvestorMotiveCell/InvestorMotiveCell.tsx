import type { FindInvestorMotiveById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestorMotive from 'src/components/Admin/InvestorMotive/InvestorMotive'

export const QUERY = gql`
  query FindInvestorMotiveById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InvestorMotive not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorMotive,
}: CellSuccessProps<FindInvestorMotiveById>) => {
  return <InvestorMotive investorMotive={investorMotive} />
}
