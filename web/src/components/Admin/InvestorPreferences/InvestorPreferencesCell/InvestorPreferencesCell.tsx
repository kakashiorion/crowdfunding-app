import type { FindInvestorPreferencesById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestorPreferences from 'src/components/Admin/InvestorPreferences/InvestorPreferences'

export const QUERY = gql`
  query FindInvestorPreferencesById($id: Int!) {
    investorPreferences: investorPreferences(id: $id) {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
      notificationLevel
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InvestorPreferences not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorPreferences,
}: CellSuccessProps<FindInvestorPreferencesById>) => {
  return <InvestorPreferences investorPreferences={investorPreferences} />
}
