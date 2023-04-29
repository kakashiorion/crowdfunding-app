import type { FindInvestorById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Investor from 'src/components/Admin/Investor/Investor'

export const QUERY = gql`
  query FindInvestorById($id: Int!) {
    investor: investor(id: $id) {
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

export const Empty = () => <div>Investor not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ investor }: CellSuccessProps<FindInvestorById>) => {
  return <Investor investor={investor} />
}
