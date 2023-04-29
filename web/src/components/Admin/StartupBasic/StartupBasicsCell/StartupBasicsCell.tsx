import type { FindStartupBasics } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StartupBasics from 'src/components/Admin/StartupBasic/StartupBasics'

export const QUERY = gql`
  query FindStartupBasics {
    startupBasics {
      id
      valueProp
      story
      whyThisBusiness
      isFirstStartup
      mission
      vision
      startupSize
      coreValues
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No startupBasics yet. '}
      <Link to={routes.adminNewStartupBasic()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  startupBasics,
}: CellSuccessProps<FindStartupBasics>) => {
  return <StartupBasics startupBasics={startupBasics} />
}
