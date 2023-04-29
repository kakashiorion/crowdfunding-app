import type { FindInvestorExperienceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestorExperience from 'src/components/Admin/InvestorExperience/InvestorExperience'

export const QUERY = gql`
  query FindInvestorExperienceById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InvestorExperience not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorExperience,
}: CellSuccessProps<FindInvestorExperienceById>) => {
  return <InvestorExperience investorExperience={investorExperience} />
}
