import type { FindStartupFinancialsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupFinancials from 'src/components/Admin/StartupFinancials/StartupFinancials'

export const QUERY = gql`
  query FindStartupFinancialsById($id: Int!) {
    startupFinancials: startupFinancials(id: $id) {
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

export const Empty = () => <div>StartupFinancials not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupFinancials,
}: CellSuccessProps<FindStartupFinancialsById>) => {
  return <StartupFinancials startupFinancials={startupFinancials} />
}
