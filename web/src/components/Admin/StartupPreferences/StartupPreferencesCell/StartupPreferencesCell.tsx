import type { FindStartupPreferencesById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupPreferences from 'src/components/Admin/StartupPreferences/StartupPreferences'

export const QUERY = gql`
  query FindStartupPreferencesById($id: Int!) {
    startupPreferences: startupPreferences(id: $id) {
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

export const Empty = () => <div>StartupPreferences not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupPreferences,
}: CellSuccessProps<FindStartupPreferencesById>) => {
  return <StartupPreferences startupPreferences={startupPreferences} />
}
