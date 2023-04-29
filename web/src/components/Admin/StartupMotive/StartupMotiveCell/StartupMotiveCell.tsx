import type { FindStartupMotiveById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupMotive from 'src/components/Admin/StartupMotive/StartupMotive'

export const QUERY = gql`
  query FindStartupMotiveById($id: Int!) {
    startupMotive: startupMotive(id: $id) {
      id
      platformGoal
      referSource
      preferredIndustrySectors
      preferredInvestorLevels
      preferredLocations
      promisingReturnsMult
      promisingTimeline
      pitchDeckURL
      demoURL
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StartupMotive not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupMotive,
}: CellSuccessProps<FindStartupMotiveById>) => {
  return <StartupMotive startupMotive={startupMotive} />
}
