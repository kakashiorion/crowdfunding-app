import type {
  FindStartupHomeConnectionQuery,
  FindStartupHomeConnectionQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { TertiaryTextLabel, TextLabel } from 'src/components/Label/Label'
import {
  HomeConnDivClassName,
  ProfilePicClassName,
} from 'src/components/Startup/StartupConsts'

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
    }
  }
`

export const Empty = () => {
  return <></>
}

export const Success = ({
  startupHomeConnection,
}: CellSuccessProps<
  FindStartupHomeConnectionQuery,
  FindStartupHomeConnectionQueryVariables
>) => {
  return (
    <div className={HomeConnDivClassName}>
      <button
        className={ProfilePicClassName}
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
          //TODO: Add Profile pic as BG - phase 2
          startupHomeConnection.users[0]?.investor?.name[0].toUpperCase()
        }
      </button>
      <TertiaryTextLabel
        label={startupHomeConnection.users[0]?.investor?.name ?? ''}
      />
      <TextLabel label="is now connected with" />
      <button
        className={ProfilePicClassName}
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
          //TODO: Add Profile pic as BG - phase 2
          startupHomeConnection.users[1]?.investor?.name[0].toUpperCase()
        }
      </button>
      <TertiaryTextLabel
        label={startupHomeConnection.users[1]?.investor?.name ?? ''}
      />
    </div>
  )
}
