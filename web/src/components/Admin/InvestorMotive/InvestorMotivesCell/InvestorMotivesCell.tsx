import type { FindInvestorMotives } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestorMotives from 'src/components/Admin/InvestorMotive/InvestorMotives'

export const QUERY = gql`
  query FindInvestorMotives {
    investorMotives {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No investorMotives yet. '}
      <Link to={routes.adminNewInvestorMotive()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorMotives,
}: CellSuccessProps<FindInvestorMotives>) => {
  return <InvestorMotives investorMotives={investorMotives} />
}
