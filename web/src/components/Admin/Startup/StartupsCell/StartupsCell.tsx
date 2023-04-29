import type { FindStartups } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Startups from 'src/components/Admin/Startup/Startups'

export const QUERY = gql`
  query FindStartups {
    startups {
      id
      name
      writeUp
      dateIncorporated
      linkedInURL
      websiteURL
      locationID
      industrySectorID
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No startups yet. '}
      <Link to={routes.adminNewStartup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ startups }: CellSuccessProps<FindStartups>) => {
  return <Startups startups={startups} />
}
