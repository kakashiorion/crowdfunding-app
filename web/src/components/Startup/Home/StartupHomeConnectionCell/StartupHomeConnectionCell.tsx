import type {
  FindStartupHomeConnectionQuery,
  FindStartupHomeConnectionQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { TextLabel } from 'src/components/Label/Label'

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
    <div className="flex w-full flex-wrap items-center justify-start gap-2 rounded border border-white-d3 bg-white-d1/50 p-3 dark:border-black-l3 dark:bg-black-l1/50 lg:p-4">
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-b2 text-white hover:bg-tertiary-d1 dark:bg-white dark:text-black dark:hover:bg-tertiary-l1 lg:h-7 lg:w-7 lg:text-b1"
        onClick={() => {
          //Go to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[0].id,
            })
          )
        }}
      >
        {
          //TODO: Add Profile pic as BG
          startupHomeConnection.users[0].investor?.name[0].toUpperCase()
        }
      </button>
      <TextLabel label={startupHomeConnection.users[0].investor?.name ?? ''} />
      <TextLabel label="is now connected with" />
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-b2 text-white hover:bg-tertiary-d1 dark:bg-white dark:text-black dark:hover:bg-tertiary-l1 lg:h-7 lg:w-7 lg:text-b1"
        onClick={() => {
          //Go to investor's profile
          navigate(
            routes.startupInvestorProfile({
              id: startupHomeConnection.users[1].id,
            })
          )
        }}
      >
        {
          //TODO: Add Profile pic as BG
          startupHomeConnection.users[1].investor?.name[0].toUpperCase()
        }
      </button>
      <TextLabel label={startupHomeConnection.users[1].investor?.name ?? ''} />
    </div>
  )
}
