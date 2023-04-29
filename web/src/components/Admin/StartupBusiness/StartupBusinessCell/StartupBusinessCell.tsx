import type { FindStartupBusinessById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupBusiness from 'src/components/Admin/StartupBusiness/StartupBusiness'

export const QUERY = gql`
  query FindStartupBusinessById($id: Int!) {
    startupBusiness: startupBusiness(id: $id) {
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

export const Empty = () => <div>StartupBusiness not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupBusiness,
}: CellSuccessProps<FindStartupBusinessById>) => {
  return <StartupBusiness startupBusiness={startupBusiness} />
}
