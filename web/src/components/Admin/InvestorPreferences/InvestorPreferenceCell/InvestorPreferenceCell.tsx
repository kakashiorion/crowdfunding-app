import type { FindInvestorPreference } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InvestorPreference from 'src/components/Admin/InvestorPreferences/InvestorPreference'

export const QUERY = gql`
  query FindInvestorPreference {
    investorPreference {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No investorPreference yet. '}
      <Link to={routes.adminNewInvestorPreferences()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  investorPreference,
}: CellSuccessProps<FindInvestorPreference>) => {
  return <InvestorPreference investorPreference={investorPreference} />
}
