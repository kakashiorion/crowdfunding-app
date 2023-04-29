import type { FindStartupMotives } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupMotives from 'src/components/Admin/StartupMotive/StartupMotives'

export const QUERY = gql`
  query FindStartupMotives {
    startupMotives {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No startupMotives yet. '}
      <Link to={routes.adminNewStartupMotive()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupMotives,
}: CellSuccessProps<FindStartupMotives>) => {
  return <StartupMotives startupMotives={startupMotives} />
}
