import type { FindInvestors } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Investors from 'src/components/Admin/Investor/Investors'

export const QUERY = gql`
  query FindInvestors {
    investors {
      id
      firstName
      lastName
      dateOfBirth
      linkedInURL
      websiteURL
      locationID
      eduBG
      yearsOfWorkEx
      numberOfCompanies
      workedInSectors
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No investors yet. '}
      <Link to={routes.adminNewInvestor()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ investors }: CellSuccessProps<FindInvestors>) => {
  return <Investors investors={investors} />
}
