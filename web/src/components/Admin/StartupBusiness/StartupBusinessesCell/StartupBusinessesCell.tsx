import type { FindStartupBusinesses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupBusinesses from 'src/components/Admin/StartupBusiness/StartupBusinesses'

export const QUERY = gql`
  query FindStartupBusinesses {
    startupBusinesses {
      id
      numberUsersFY
      numberCitiesFY
      distributionType
      workedWell
      challenges
      couldImprove
      currentFYActivities
      hasOnlineBusiness
      partners
      customers
      revenueModel
      costStructure
      shortTermPlan
      marketSizeLacs
      marketGrowthRate
      trends
      competitors
      opporunities
      threats
      xFactor
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No startupBusinesses yet. '}
      <Link to={routes.adminNewStartupBusiness()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupBusinesses,
}: CellSuccessProps<FindStartupBusinesses>) => {
  return <StartupBusinesses startupBusinesses={startupBusinesses} />
}
