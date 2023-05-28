import type {
  FindStartupHomeConnectionQuery,
  FindStartupHomeConnectionQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { HoverTertiaryTextButton } from 'src/components/Button/Button'
import { TextLabel } from 'src/components/Label/Label'
import {
  ConnDivClassName,
  PosterProfilePicClassName,
} from 'src/components/Startup/startupHomeConsts'

export const QUERY = gql`
  query FindStartupHomeConnectionQuery($id: Int!) {
    startupHomeConnection: connection(id: $id) {
      id
      users {
        id
        profilePicURL
        investor {
          id
          name
        }
      }
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStartupHomeConnectionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  startupHomeConnection,
}: CellSuccessProps<
  FindStartupHomeConnectionQuery,
  FindStartupHomeConnectionQueryVariables
>) => {
  return (
    <div className={ConnDivClassName}>
      <button
        className={PosterProfilePicClassName}
        onClick={() => {
          //Navigate to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[0]?.id ?? 0,
            })
          )
        }}
      >
        {
          //TODO: Add Profile pic as BG
          startupHomeConnection.users[0]?.investor?.name[0].toUpperCase()
        }
      </button>
      <HoverTertiaryTextButton
        label={startupHomeConnection.users[0]?.investor?.name ?? ''}
        action={() => {
          //Navigate to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[0]?.id ?? 0,
            })
          )
        }}
      />
      <TextLabel label="is now connected with" />
      <button
        className={PosterProfilePicClassName}
        onClick={() => {
          //Navigate to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[1]?.id ?? 0,
            })
          )
        }}
      >
        {
          //TODO: Add Profile pic as BG
          startupHomeConnection.users[1]?.investor?.name[0].toUpperCase()
        }
      </button>
      <HoverTertiaryTextButton
        label={startupHomeConnection.users[1]?.investor?.name ?? ''}
        action={() => {
          //Navigate to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[1]?.id ?? 0,
            })
          )
        }}
      />
    </div>
  )
}
