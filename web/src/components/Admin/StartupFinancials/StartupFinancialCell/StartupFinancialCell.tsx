import type { FindStartupFinancial } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupFinancial from 'src/components/Admin/StartupFinancials/StartupFinancial'

export const QUERY = gql`
  query FindStartupFinancial {
    startupFinancial {
      id
      currentValuationLacs
      currentStage
      currentRatio
      DERatio
      revenueLastFYLacs
      revenueGrowthRate
      isProfitable
      margin
      cashRunwayMonths
      plansForUsingCash
      biggestCostHeads
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No startupFinancial yet. '}
      <Link to={routes.adminNewStartupFinancials()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupFinancial,
}: CellSuccessProps<FindStartupFinancial>) => {
  return <StartupFinancial startupFinancial={startupFinancial} />
}
