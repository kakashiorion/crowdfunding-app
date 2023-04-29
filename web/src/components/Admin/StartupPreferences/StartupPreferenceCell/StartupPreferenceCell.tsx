import type { FindStartupPreference } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupPreference from 'src/components/Admin/StartupPreferences/StartupPreference'

export const QUERY = gql`
  query FindStartupPreference {
    startupPreference {
      id
      prefersLightTheme
      profileHiddenFromStrangers
      receiveMessageFromStrangers
      activityVisbility
      financialVisbility
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
      {'No startupPreference yet. '}
      <Link to={routes.adminNewStartupPreferences()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupPreference,
}: CellSuccessProps<FindStartupPreference>) => {
  return <StartupPreference startupPreference={startupPreference} />
}
